# import pandas as pd
# import requests
# import json
# import csv
# import numpy as np

# csv_file = 'data_post.csv'
# data_list = []
# with open(csv_file, 'r') as csv_file:
#     csv_reader = csv.reader(csv_file)
#     for row in csv_reader:
#         row = [int(k) for k in row]
#         data_list.append(row)

# data = np.array(data_list, dtype=int)

# post_url = 'https://dohubapps.com/user/itvkist2/1337/api/number-of-cases'  

# headers = {'Content-Type': 'application/json'}

# for i in range(7):
#     for j in range(8):
#         noc = data[j, i].item()
#         json_data = {
#             "data": {
#                 "infectious_disease": i+1,
#                 "month": j+1,
#                 "number_of_cases": noc,
#                 "year": 2023
#             }
#         }
#         json_string = json.dumps(json_data)
#         response = requests.post(post_url, data=json_string, headers=headers)
