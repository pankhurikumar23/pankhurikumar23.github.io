import json
import geopandas as gpd
import numpy as np
import shapely.speedups
from shapely.ops import nearest_points

fp1 = "WDPA_Nov2019_IND-shapefile/WDPA_Nov2019_IND-shapefile-points.shp"
points = gpd.read_file(fp1)
# points.to_file("points.geojson", driver='GeoJSON')
print(points.shape)

fp2 = "WDPA_Nov2019_IND-shapefile/WDPA_Nov2019_IND-shapefile-polygons.shp"
poly = gpd.read_file(fp2)
# poly.to_file("poly.geojson", driver='GeoJSON')
print(poly.shape)

shapely.speedups.enable()

# Find Containing!
#
fp3 = "all_data.geojson"
projects = gpd.read_file(fp3, driver='GeoJSON')
print(projects.shape)

projects["Closest PP"] = ""
projects["minDist"] = 0
projects["colour"] = 0

count = [0, 0, 0, 0, 0]
for  idx, row in poly.iterrows():
	# if row["geometry"] == None:
	# 	print(row)
	poly_mask = projects.within(row['geometry'])
	poly_data = projects.loc[poly_mask]
	if len(poly_data) > 0:
		for i, r in poly_data.iterrows():
			count[0] += 1
			projects.loc[i, "Closest PP"] = row["NAME"]
			projects.loc[i, "colour"] = 1
			projects.loc[i, "minDist"] = -1
print(count)

for  idx, row in projects.iterrows():
	# if row["geometry"] == None:
	# 	print(row)
	poly_mask = points.within(row['geometry'])
	poly_data = points.loc[poly_mask]
	if len(poly_data) > 0:
		count[0] += 1
		projects.loc[idx, "colour"] = 1
		projects.loc[idx, "minDist"] = -1
		for i, r in poly_data.iterrows():
			projects.loc[idx, "Closest PP"] += poly_data.loc[i, "NAME"] + '; '
print(count)
projects.to_file("all_data_containing.geojson", driver='GeoJSON')

# Find closest

fp3 = "all_data_containing.geojson"
projects = gpd.read_file(fp3, driver='GeoJSON')
print(projects.shape)

projects.to_crs(epsg=3310,inplace=True)
points.to_crs(epsg=3310,inplace=True)
poly.to_crs(epsg=3310,inplace=True)

for idx1, row1 in projects.iterrows():
	if idx1%200 == 0:
		print(idx1)
	if row1["colour"] > 0:
		continue
	t1 = gpd.GeoSeries(row1["geometry"])
	minDist = float('inf')
	p = 0
	for idx2, row2 in poly.iterrows():
		t2 = gpd.GeoSeries(row2["geometry"])
		dist = t2.distance(t1)
		if minDist > dist[0]:
			minDist = dist[0]
			p = row2["NAME"]
	for idx3, row3 in points.iterrows():
		t3 = gpd.GeoSeries(row3["geometry"])
		dist = t3.distance(t1)
		if minDist > dist[0]:
			minDist = dist[0]
			p = row3["NAME"]
	projects.loc[idx1, "Closest PP"] = p
	projects.loc[idx1, "minDist"] = minDist/1000
	if minDist <= 10000:
		projects.loc[idx1, "colour"] = 2
		count[1] += 1
	elif minDist <= 50000:
		projects.loc[idx1, 'colour'] = 3
		count[2] += 1
	elif minDist <= 100000:
		projects.loc[idx1, 'colour'] = 4
		count[3] += 1
	else:
		projects.loc[idx1, 'colour'] = 5
		count[4] += 1

projects.to_crs(epsg=4326,inplace=True)
projects.to_file("all_data_overlap.geojson", driver='GeoJSON')

print("Containing, <10, 10-50, 50-100, >100")
print(count)
# Containing, <10, 10-50, 50-100, >100
# [41,		  219, 1114,  565, 	  123]
# With India corrected (not resolved)
# Containing, <10, 10-50, 50-100, >100
# [41, 		  229, 1161,  585,    31]


