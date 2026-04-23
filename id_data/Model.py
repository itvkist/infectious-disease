import pandas as pd
from sklearn.neighbors import KNeighborsRegressor

df = pd.read_csv('sample_data.csv')

X = df[['Month', 'Pneumonia']].iloc[:-1]
y = df['Pneumonia'].shift(-1).iloc[:-1]
k = 3
model = KNeighborsRegressor(n_neighbors=k)
model.fit(X, y)

current_month = 8
current_patient = 7
x = [current_month, current_patient]
predicted_cases = model.predict([x])
print("Predict number of patients in next month: ", round(predicted_cases[0]))