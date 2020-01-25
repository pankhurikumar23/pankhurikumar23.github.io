import json

with open('district_added.json') as json_file:
    data = json.load(json_file)
print(data)