import json
from geopy.distance import geodesic
import pandas as pd

with open('protected_points.json') as json_file:
    json_points = json.load(json_file)
with open('protected_polygons.json') as json_file:
    json_poly = json.load(json_file)
with open('AmAustCorrect.json') as json_file:
    json_projects = json.load(json_file)

print(len(json_points))
print(len(json_poly))
print(len(json_projects))

count = [0, 0, 0, 0]
for item in json_projects:
	origin = [0, 0]
	minDist = float('inf')
	# print(item)
	if item['type'] == 'Resolve' or item['type'] == 'None':
		continue
	if item['type'] == 'Polygon':
		print('p')
		origin[0] = (float(item['corner1'][0]) + float(item['corner2'][0]))/2
		origin[1] = (float(item['corner1'][1]) + float(item['corner2'][1]))/2
	else:
		origin[0] = float(item['lat'])
		origin[1] = float(item['lng'])
	# if origin[0] > 90:
	# 	print(item)
	# print(origin)
	for item1 in json_points:
		dest = [0, 0]
		dest[0] = float(item1['geometry'][1])
		dest[1] = float(item1['geometry'][0])
		dist = geodesic((origin[0], origin[1]), (dest[0], dest[1])).meters
		if dist < minDist:
			minDist = dist
	for item2 in json_poly:
		dest = [0, 0]
		for val in item2['geometry']:
			dest[0] += float(val[1])
			dest[1] += float(val[0])
		dest[0] = dest[0]/len(item2['geometry'])
		dest[1] = dest[1]/len(item2['geometry'])
		dist = geodesic((origin[0], origin[1]), (dest[0], dest[1])).meters
		if dist < minDist:
			minDist = dist
	if minDist <= 10000:
		item['colour'] = 1
		count[0] += 1
	elif minDist <= 50000:
		item['colour'] = 2
		count[1] += 1
	elif minDist <= 100000:
		item['colour'] = 3
		count[2] += 1
	else:
		item['colour'] = 4
		count[3] += 1
with open('AmAustColour.json', 'w') as outfile:
	json.dump(json_projects, outfile)
print(count)