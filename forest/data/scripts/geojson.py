import json

###########MERGING BOTH DATA
# with open('dataset_1.json') as json_file:
#     data = json.load(json_file)
# print(len(data))

# with open('typed_date_data.json') as json_file:
# 	data2 = json.load(json_file)
# print(len(data2))

# for item in data2:
# 	data.append(item)

# print(len(data))

# with open('complete_data.json', 'w') as outfile:
# 	json.dump(data, outfile)
############

# with open('districts_cleared.json') as json_file:
#     data = json.load(json_file)
# # print(len(data))

with open('resolved_III.json') as json_file:
    data = json.load(json_file)

geojsonData = {
	"type": "FeatureCollection",
	"features": []
}

count = [0, 0, 0]
for item in data:
	# print(item)
	if item["type"] == "Point":
		count[0] += 1
		gjData = {
			"type": "Feature",
			"properties": item,
			"geometry": {
				"type": "Point",
				"coordinates": [float(item["lng"]), float(item["lat"])]
			}
		}
	elif item["type"] == "Polygon":
		count[1] += 1
		c1 = item["corner1"]
		c2 = item["corner2"]
		gjData = {
			"type": "Feature",
			"properties": item,
			"geometry": {
				"type": "Polygon",
				"coordinates": [[[float(c1[1]), float(c1[0])], 
								[float(c1[1]), float(c2[0])],
								[float(c2[1]), float(c2[0])],
								[float(c2[1]), float(c1[0])]]]
			}
		}
	else:
		count[2] += 1
		continue
	geojsonData["features"].append(gjData)

with open('all_data.geojson', 'w') as outfile:
	json.dump(geojsonData, outfile)

print("Point, Poly, Other")
print(count)

# Point, Poly, Other
# [2064, 114, 61]
