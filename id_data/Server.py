import pandas as pd
from sklearn.neighbors import KNeighborsRegressor
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Dấu sao nghĩa là cho phép tất cả các origin, bạn có thể cấu hình làm sao cho phù hợp với nhu cầu của bạn.
    allow_methods=["*"],  # Dấu sao nghĩa là cho phép tất cả các phương thức HTTP (GET, POST, PUT, DELETE, v.v.).
    allow_headers=["*"],  # Dấu sao nghĩa là cho phép tất cả các tiêu đề (headers).
)

df = pd.read_csv('sample_data.csv')

pneumonia_X = df[['Month', 'Pneumonia']].iloc[:-1]
pneumonia_y = df['Pneumonia'].shift(-1).iloc[:-1]

flu_X = df[['Month', 'Flu']].iloc[:-1]
flu_y = df['Flu'].shift(-1).iloc[:-1]

covid_X = df[['Month', 'Covid19']].iloc[:-1]
covid_y = df['Covid19'].shift(-1).iloc[:-1]

tuberculosis_X = df[['Month', 'Tuberculosis']].iloc[:-1]
tuberculosis_y = df['Tuberculosis'].shift(-1).iloc[:-1]

dengue_X = df[['Month', 'Dengue']].iloc[:-1]
dengue_y = df['Dengue'].shift(-1).iloc[:-1]

hepatitis_X = df[['Month', 'Hepatitis']].iloc[:-1]
hepatitis_y = df['Hepatitis'].shift(-1).iloc[:-1]

chickenpox_X = df[['Month', 'Chickenpox']].iloc[:-1]
chickenpox_y = df['Chickenpox'].shift(-1).iloc[:-1]

k = 3

pneumonia_model = KNeighborsRegressor(n_neighbors=k)
pneumonia_model.fit(pneumonia_X, pneumonia_y)

flu_model = KNeighborsRegressor(n_neighbors=k)
flu_model.fit(flu_X, flu_y)

covid_model = KNeighborsRegressor(n_neighbors=k)
covid_model.fit(covid_X, covid_y)

tuberculosis_model = KNeighborsRegressor(n_neighbors=k)
tuberculosis_model.fit(tuberculosis_X, tuberculosis_y)

dengue_model = KNeighborsRegressor(n_neighbors=k)
dengue_model.fit(dengue_X, dengue_y)

hepatitis_model = KNeighborsRegressor(n_neighbors=k)
hepatitis_model.fit(hepatitis_X, hepatitis_y)

chickenpox_model = KNeighborsRegressor(n_neighbors=k)
chickenpox_model.fit(chickenpox_X, chickenpox_y)

class InputData(BaseModel):
    current_month: int
    current_patient: int
    disease_name: str
    next_month: int

class PredictionResult(BaseModel):
    predicted_cases: int

@app.post('/predict', response_model=PredictionResult)
def predict(data: InputData):
    current_month = data.current_month
    current_patient = data.current_patient
    disease_name = data.disease_name
    next_month = data.next_month

    x = [[current_month, current_patient]]
    
    model = pneumonia_model

    if disease_name == 'Pneumonia': model = pneumonia_model
    if disease_name == 'Flu': model = flu_model
    if disease_name == 'Covid19': model = covid_model
    if disease_name == 'Tuberculosis': model = tuberculosis_model
    if disease_name == 'Dengue': model = dengue_model
    if disease_name == 'Hepatitis': model = hepatitis_model
    if disease_name == 'Chickenpox': model = chickenpox_model

    predicted_cases = model.predict(x)
    if next_month >= 2: 
        predicted_cases = model.predict([[current_month + 1, predicted_cases]])
        if next_month >= 3:
            predicted_cases = model.predict([[current_month + 2, predicted_cases]])
            if next_month >= 4:
                predicted_cases = model.predict([[current_month + 3, predicted_cases]])
                if next_month >= 5:
                    predicted_cases = model.predict([[current_month + 4, predicted_cases]])
                    if next_month >= 6:
                        predicted_cases = model.predict([[current_month + 5, predicted_cases]])
                        if next_month >= 7:
                            predicted_cases = model.predict([[current_month + 6, predicted_cases]])
                            if next_month >= 8:
                                predicted_cases = model.predict([[current_month + 7, predicted_cases]])
                                if next_month >= 9:
                                    predicted_cases = model.predict([[current_month + 8, predicted_cases]])
                                    if next_month >= 10:
                                        predicted_cases = model.predict([[current_month + 9, predicted_cases]])
                                        if next_month >= 11:
                                            predicted_cases = model.predict([[current_month + 10, predicted_cases]])
                                            if next_month == 12:
                                                predicted_cases = model.predict([[current_month + 11, predicted_cases]])
                                    


    return JSONResponse(content={'predicted_cases': round(predicted_cases[0])})
