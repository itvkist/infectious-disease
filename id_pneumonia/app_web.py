from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

import uvicorn
from PIL import Image
from io import BytesIO
from scipy.ndimage import gaussian_filter
from skimage import img_as_float

import base64
import traceback

import numpy as np
import cv2

from tensorflow.keras.applications.imagenet_utils import preprocess_input
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image as tfimg


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

templates = Jinja2Templates(directory="templates")
app.mount("/static", StaticFiles(directory="static"), name="static")

MODEL_PATH = "./models/oldModel.h5"
model = load_model(MODEL_PATH)
print("Model loaded. Start serving...")


async def read_image(request: Request) -> Image.Image:
    form = await request.form()
    file = await form["img"].read()
    return Image.open(BytesIO(file))


def img_to_base64(image: np.ndarray) -> bytes:
    _, buffer = cv2.imencode(".jpg", image)
    return base64.b64encode(buffer)


def xray_enhance(image: np.ndarray) -> np.ndarray:
    img = img_as_float(image)
    blurred = gaussian_filter(img, sigma=13)
    sharpened = np.clip(img + (img - blurred), 0.0, 1.0)
    return (sharpened * 255).astype(np.uint8)


def model_predict(img: Image.Image) -> np.ndarray:
    x = tfimg.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    x = preprocess_input(x, mode="tf")
    return model.predict(x)


@app.get("/", response_class=HTMLResponse)
async def homepage(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.post("/predict")
async def predict(request: Request):
    image = await read_image(request)
    np_image = np.asarray(image)

    resized = image.resize((64, 64))
    rgb_img = Image.new("RGB", resized.size)
    rgb_img.paste(resized)

    try:
        preds = model_predict(rgb_img)
        score = float(preds[0, 0])
        label = "Pneumonia" if score > 0.5 else "Normal"

        overlay = f"{'pneumonia' if score > 0.5 else 'normal'}  {score:.4f}"
        annotated = cv2.putText(
            np_image.copy(), overlay,
            (60, 60), cv2.FONT_HERSHEY_COMPLEX, 1.5, (255, 0, 0), 3,
        )
        return {
            "message": "success",
            "images": [img_to_base64(annotated)],
            "result": [{"prediction": label}],
        }
    except Exception:
        print(traceback.format_exc())
        return JSONResponse(content={"message": "server failure"}, status_code=500)


@app.post("/enhanced")
async def enhanced(request: Request):
    image = await read_image(request)
    np_image = np.asarray(image)

    try:
        result = xray_enhance(np_image)
        result_bgr = cv2.cvtColor(result, cv2.COLOR_RGB2BGR)
        return {"message": "success", "result": [img_to_base64(result_bgr)]}
    except Exception:
        print(traceback.format_exc())
        return JSONResponse(content={"message": "server failure"}, status_code=500)


if __name__ == "__main__":
    uvicorn.run("app_web:app", host="0.0.0.0", port=5000, reload=True)
