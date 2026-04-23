import pandas as pd
import requests
import json
import csv
import numpy as np


df = pd.read_csv('sample_data.csv')

year = 2023
df['year'] = None

df_len = df.shape[0]

for i, row in df.iterrows():
    df.at[df_len-i-1, 'year'] = year
    month = df.at[df_len-i-1, 'Month']
    if month == 1: year -= 1

df.to_csv('sample_data.csv', index=False)




