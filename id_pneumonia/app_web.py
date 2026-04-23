from fastapi import FastAPI, File, UploadFile, Request, Response
from fastapi.responses import HTMLResponse, FileResponse, JSONResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

import shutil
import uvicorn
from PIL import Image
import io
from scipy.ndimage.filters import gaussian_filter, median_filter, maximum_filter, minimum_filter
from skimage import img_as_float

from src.algorithms.runner import AlgorithmRunner
from src.algorithms.unsharping_mask import UM

from io import BytesIO
import base64
import traceback

import numpy as np
import cv2

import time, datetime

#lib for pneumonia 
from util import base64_to_pil
from tensorflow.keras.applications.imagenet_utils import preprocess_input
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image as tfimg
import os
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

templates = Jinja2Templates(directory="templates")

app.mount("/static", StaticFiles(directory="static"), name="static")


MODEL_PATH = './models/oldModel.h5'

model = load_model(MODEL_PATH)
#
print('Model loaded. Start serving...')


@app.get("/", response_class=HTMLResponse)
async def static(request: Request):
   return templates.TemplateResponse("index.html", {"request": request})

async def read_image(request):
    
    form = await request.form()
    file = await form["img"].read()
    image = Image.open(BytesIO(file))
    return image

def img2str(result):
    _, buffer = cv2.imencode('.jpg', result)
    img_str = base64.b64encode(buffer)
    return img_str

def xrayenhance(image):
    amount = 1
    radius = 13
    image = img_as_float(image) # ensuring float values for computations
    blurred_image = gaussian_filter(image, sigma=radius)
    mask = image - blurred_image # keep the edges created by the filter
    sharpened_image = image + mask * amount
    sharpened_image = np.clip(sharpened_image, float(0), float(1)) # Interval [0.0, 1.0]
    sharpened_image = (sharpened_image*255).astype(np.uint8) # Interval [0,255]
    return sharpened_image

def saveImage(output_folder = None, image = None, process="upload", type_="jpg", time=0):
    if not os.path.isdir(output_folder):
        os.makedirs(output_folder)
    img_path = output_folder + "/opencv_frame_{}.".format(time) + type_
    cv2.imwrite(img_path, cv2.cvtColor(image, cv2.COLOR_RGB2BGR))
    return img_path.split('/')[-1]

# process model 
def model_predict(img, model):
    
    x = tfimg.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    x = preprocess_input(x, mode='tf')
    
    preds = model.predict(x)
    
    return preds

@app.post("/predict")
async def predict(request: Request):
    time = datetime.datetime.now().strftime("%Y%m%d_%H%M%S_%f")
    image = await read_image(request)
    np_image = np.asarray(image)

    # upload image
    process = "upload"
    disease = "pneumonia"

    output_folder = "./images/" + process + "/" + disease + "/"
    jpg_filename = saveImage(output_folder = output_folder, image=np_image, process=process, type_=image.format, time=time)
    # save and resize image here
    img = tfimg.load_img(output_folder + "opencv_frame_{}.".format(time) + image.format, target_size=(64,64))
    try:
        preds = model_predict(img, model)
        
        result = preds[0,0]    
        print(result)
        
        pred_res = 'Pneumonia' if result > 0.5 else 'Normal'
        print(pred_res)

        return {"message": "success", "result":[{"prediction": pred_res}]}

    except Exception as e:
        print(traceback.format_exc())
        return JSONResponse(content={"message":"server failure"}, status_code = 500)
  

if __name__ == "__main__":
   uvicorn.run("app_web:app", host="0.0.0.0", port=5000, reload=True)