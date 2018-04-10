# Misrepresentation

### Data

I used the NYC Department of Education's New York State Common Core Mathematics Test between 2013-2017 Citywide data, which can be found [here](http://schools.nyc.gov/Accountability/data/TestResults/ELAandMathTestResults). The data reports the grade, year, number of students tested, the mean score and the number and percentage of students scoring at levels 1-4.

### Process Log

The following were the steps I took to misrepresent (read confuse) anyone looking at my visualization:
- Combining the statistics for Level 3 and 4: This information is already provided as a separate column in the data, to find the top half of the class. By plotting Levels 1, 2 and 3-4, I inflate the statistics for two sections, which makes it harder to compare them.
- Using numbers without context: Using raw number of students to represent my data, I deprive the user of context. By omitting the total number of students tested, a person can only compare absolute numbers, which give a false (though informationally accurate) view of the data
- Using numbers instead of percentages: Again, absolute numbers provide a false story of the trend in math scores. In certain places, the numbers may have decreased with time for students performing at a particular level, but the percentage has gone up since the number of students tested that year were lower. This makes us think that students are performing worse, which isn't necessarily true.
- Using mean scores: Average scores may not be the best central measure of this data. Using only means, the performance of students does not change much over the years, but in fact, more students are scoring at higher levels of the test, which is not obvious from the chart.
- Using pie charts: Pie charts make it harder to understand the comparison between different things, which adds a layer of difficulty to the dataset.
- Color: Though aesthetically pleasing, the similar tones of color in the pie-charts can make it tough to match to the key.
