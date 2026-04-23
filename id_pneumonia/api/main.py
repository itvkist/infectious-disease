from fastapi import FastAPI, File, UploadFile, Request, Response
from fastapi.responses import HTMLResponse, FileResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

import shutil
import uvicorn
from PIL import Image
import io


app = FastAPI()
templates = Jinja2Templates(directory="templates")

app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/", response_class=HTMLResponse)
async def static(request: Request):
   return templates.TemplateResponse("index.html", {"request": request})


@app.post("/enhanced")
async def create_upload_file(file: UploadFile = File(...)):
    #save file to local
    with open("destination.png", "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    #process image ----
    result = {"message":"This is just test message"}

    image = Image.open('static/destination.png')
    ar = AlgorithmRunner()
    ar.images_path = ''
    ar.image = image
    ar.algorithm = 'um'
    processed_image = ar.run()

    bytes_image = io.BytesIO()
    processed_image.save(bytes_image, format='PNG')
    return Response(content = bytes_image.getvalue(), headers = result, media_type="image/png")


if __name__ == "__main__":
   print("running server")
   uvicorn.run("main:app", host="https://dohubapps.com/user/thomtt12/", port=9000, reload=True)

if __name__ == "__main__":
   uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)