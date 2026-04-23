import numpy as np
import pandas as pd

pneumonia_data = [1, 2, 10, 3, 9, 5, 8, 7, 4, 7, 13, 12, 3, 3, 14, 18, 9, 2, 17, 10]
flu_data = [0, 0, 0 , 3, 1, 2, 2, 17, 1, 10, 3, 0, 4, 0, 3, 0, 2, 0, 1, 3]
covid19_data = [1, 3, 0 , 0, 2, 1, 0, 13, 3, 0, 0, 1, 4, 0, 0, 0, 0, 0, 4, 3]
tuberculosis_data = [0, 0, 0, 2, 4, 5, 3, 0, 2, 3, 2, 2, 2, 3, 3, 2, 1, 4, 2, 2]
dengue_data = [0, 0, 0, 0, 0, 2, 8, 6, 6, 3, 4, 0, 0, 0, 0, 0, 0, 0, 3, 6]
hepatitis_data = [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1]
chickenpox_data = [1, 2, 0, 5, 0, 5, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 3, 1]

pneumonia_low_values = [x for x in pneumonia_data if x < 6]
pneumonia_mean_low = np.mean(pneumonia_low_values)

pneumonia_high_values = [x for x in pneumonia_data if x >= 6]
pneumonia_mean_high = np.mean(pneumonia_high_values)

flu_mean = np.mean(flu_data)
covid19_mean = np.mean(covid19_data)
tuberculosis_mean = np.mean(tuberculosis_data)
dengue_mean = np.mean(dengue_data)
hepatitis_mean = np.mean(hepatitis_data)
chickenpox_mean = np.mean(chickenpox_data)

pneumonia_sample_data = []
flu_sample_data = []
covid19_sample_data = []
tuberculosis_sample_data = []
dengue_sample_data = []
hepatitis_sample_data = []
chickenpox_sample_data = []

years_time = 10
month = 1
pneumonia_low_month = [1, 2, 6, 9]

for i in range(12*years_time):
    if month in pneumonia_low_month:
        pneumonia_sample_data.append(np.random.poisson(pneumonia_mean_low))
    else:
        pneumonia_sample_data.append(np.random.poisson(pneumonia_mean_high))

    flu_sample_data.append(np.random.poisson(flu_mean))
    covid19_sample_data.append(np.random.poisson(covid19_mean))
    tuberculosis_sample_data.append(np.random.poisson(tuberculosis_mean))
    dengue_sample_data.append(np.random.poisson(dengue_mean))
    hepatitis_sample_data.append(np.random.poisson(hepatitis_mean))
    chickenpox_sample_data.append(np.random.poisson(chickenpox_mean))

    month += 1
    if month > 12: 
        month = 1
        year += 1

for real_dt in flu_data:
    flu_sample_data.append(real_dt)
for real_dt in covid19_data:
    covid19_sample_data.append(real_dt)
for real_dt in pneumonia_data:
    pneumonia_sample_data.append(real_dt)
for real_dt in hepatitis_data:
    hepatitis_sample_data.append(real_dt)
for real_dt in chickenpox_data:
    chickenpox_sample_data.append(real_dt)
for real_dt in dengue_data:
    dengue_sample_data.append(real_dt)
for real_dt in tuberculosis_data:
    tuberculosis_sample_data.append(real_dt)

import pandas as pd

df = pd.DataFrame({'Flu': flu_sample_data})
df['Covid19'] = covid19_sample_data
df['Pneumonia'] = pneumonia_sample_data
df['Hepatitis'] = hepatitis_sample_data
df['Chickenpox'] = chickenpox_sample_data
df['Dengue'] = dengue_sample_data
df['Tuberculosis'] = tuberculosis_sample_data

df['Month'] = (df.index % 12) + 1

df.to_csv('sample_data.csv', index=False)