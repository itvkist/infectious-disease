from fastapi import FastAPI, File, UploadFile, Form, Request
from fastapi.responses import JSONResponse, HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.middleware.cors import CORSMiddleware
import prediction
import os
from PIL import Image
import io

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

templates = Jinja2Templates(directory="templates")
app.mount("/static", StaticFiles(directory="static"), name="static")

save_path = "Uploaded_images/"
os.makedirs(save_path, exist_ok=True)


@app.get("/", response_class=HTMLResponse)
async def homepage(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.post("/getFile")
async def getOutput(myfile: UploadFile = File(...)):
    imgname = myfile.filename
    imgpath = save_path + imgname
    contents = await myfile.read()
    with open(imgpath, "wb") as f:
        f.write(contents)
    output = prediction.prediction(imgpath)
    return JSONResponse(
        content={"result": {"message": "okay", "imgpath": imgpath, "prediction": output}},
        status_code=200,
    )


@app.post("/getData")
async def getData(filename: str = Form(...), img: UploadFile = File(...)):
    contents = await img.read()
    imgpath = save_path + filename
    image = Image.open(io.BytesIO(contents))
    image.save(imgpath)
    output = prediction.prediction(imgpath)
    return JSONResponse(content=[{"prediction": output}], status_code=200)


if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 7002))
    uvicorn.run("server:app", host="0.0.0.0", port=port, reload=True)