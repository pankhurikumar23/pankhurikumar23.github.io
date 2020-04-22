import json
import pandas as pd
import geopandas as gpd

# df = pd.read_json('../prev_data/complete_data.json')
# df.to_excel('../all_old_data.xlsx')

# fp3 = "../all_data.geojson"
# projects = gpd.read_file(fp3, driver='GeoJSON')
# projects.to_excel('../all_data_II.xlsx')
# exit()

df = pd.read_excel('../all_data.xlsx')
# print(df.head())

json_data = df.to_json(orient='records')
data = json.loads(json_data)

geojsonData = {
	"type": "FeatureCollection",
	"features": []
}

count = 0
for item in data:
	if 'geometry' not in item.keys():
		count += 1
		continue
	elif item['geometry'] is None:
		count += 1
		continue
	elif 'POINT' in item['geometry']:
		geom = item['geometry'].split(' ')
		geom[1] = geom[1].replace('(', '')
		geom[2] = geom[2].replace(')', '')
		gjData = {
			"type": "Feature",
			"properties": item,
			"geometry": {
				"type": "Point",
				"coordinates": [float(geom[1]), float(geom[2])]
			}
		}
	elif 'POLYGON' in item['geometry']:
		g = item['geometry'].split(' ', 1)
		geom = g[1].split(', ')
		coordList = []
		# print(len(geom))
		for ge in geom:
			ge = ge.replace('(', '')
			ge = ge.replace(')', '')
			coords = ge.split(' ')
			coordList.append([float(coords[0]), float(coords[1])])
		gjData = {
			"type": "Feature",
			"properties": item,
			"geometry": {
				"type": "Polygon",
				"coordinates": [coordList]
			}
		}
	geojsonData["features"].append(gjData)

print(count)

# with open('../all_data.geojson', 'w') as outfile:
# 	json.dump(geojsonData, outfile)