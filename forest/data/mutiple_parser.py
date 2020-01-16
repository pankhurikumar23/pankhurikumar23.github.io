# -*- coding: utf-8 -*-
# encoding: utf-8

import pandas as pd
import json

df = pd.read_excel('multiple.xlsx')
print(df.shape)

json_data = df.to_json(orient='records')
data = json.loads(json_data)
print(data[0])

with open('data_multiple.json', 'w') as outfile:
    json.dump(data, outfile)