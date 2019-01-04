// #E5FCC2 #9DE0AD #45ADA8 #547980 #594F4F
// #A8A7A7 #CC527A #E8175D #474747 #363636
// #ebf4f6 #bdeaee #76b4bd #58668b #5e5656
//=============================================================================
//=============================================================================
//=============================================================================
//                       IMMOVABILITY
//=============================================================================
//=============================================================================
//=============================================================================
var svg = d3.select('#interactive2').html('')
	.append('svg')
	.attrs({width: 1200, height: 900})
	.style('background', '#E5FCC2');

//=============================================================================
//                        HEADING
//=============================================================================
var gheading = svg.append('g');
var text = gheading.append('text').text('FAIRNESS IN MACHINE LEARNING')
    .attrs({x: 20, y: 53, 'font-size': 33})
    .style('fill', '#594F4F');
var text = gheading.append('text').text("You're an algorithm designer with a quest:")
    .attrs({x: 20, y: 85, 'font-size': 14})
    .style('fill', '#594F4F');
var text = gheading.append('text').text("Testing an algorithm to find what definitions of fairness")
    .attrs({x: 320, y: 85, 'font-size': 14, 'font-weight': 'bold'})
    .style('fill', '#594F4F');
var text = gheading.append('text').text("you can satisfy simultaneously.")
    .attrs({x: 20, y: 105, 'font-size': 14, 'font-weight': 'bold'})
    .style('fill', '#594F4F');
var text = gheading.append('text').text("Try to optimize fairness, using real crime-risk assessment data from the")
    .attrs({x: 270, y: 105, 'font-size': 14})
    .style('fill', '#594F4F');
var text = gheading.append('text').text("ProPublica investigation 'Machine Bias.' Some thresholds may satisfy other kinds of fairness, while others")
    .attrs({x: 20, y: 125, 'font-size': 14})
    .style('fill', '#594F4F');
var text = gheading.append('text').text("won't. Some kinds of fairness may not be achievable in certain protected groups.")
    .attrs({x: 20, y: 145, 'font-size': 14})
    .style('fill', '#594F4F');
var line = gheading.append('line')
    .attrs({x1: 20, y1: 170, x2: 1180, y2: 170})
    .style('stroke', '#594F4F')
    .style('stroke-width', 2);
var line = gheading.append('line')
    .attrs({x1: 20, y1: 250, x2: 1180, y2: 250})
    .style('stroke', '#594F4F')
    .style('stroke-width', 2);
//=============================================================================
//                        SECTION 1
//=============================================================================
var g1 = svg.append('g');
var text = g1.append('text').text('1.')
    .attrs({x: 40, y: 215, 'font-size': 25})
    .style('fill', '#594F4F');
var text = g1.append('text').text('CHOOSE A')
    .attrs({x: 70, y: 205, 'font-size': 15})
    .style('fill', '#594F4F');
var text = g1.append('text').text('PROTECTED CATEGORY')
    .attrs({x: 70, y: 225, 'font-size': 15})
    .style('fill', '#594F4F');
//=============================================================================
//                        SECTION 2
//=============================================================================
var g2 = svg.append('g');
var text = g2.append('text').text('2.')
    .attrs({x: 35, y: 295, 'font-size': 25})
    .style('fill', '#594F4F');
var text = g2.append('text').text('SELECT A FAIRNESS')
    .attrs({x: 70, y: 280, 'font-size': 15})
    .style('fill', '#594F4F');
var text = g2.append('text').text('TO OPTIMIZE')
    .attrs({x: 70, y: 300, 'font-size': 15})
    .style('fill', '#594F4F');
var line = g2.append('line')
    .attrs({x1: 20, y1: 315, x2: 250, y2: 315})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);

var text = g2.append('text').text('Overall Accuracy')
    .attrs({x: 20, y: 345, 'font-size': 14})
    .style('fill', '#594F4F');
var text = g2.append('text').text('Equality')
    .attrs({x: 20, y: 360, 'font-size': 14})
    .style('fill', '#594F4F');
var text = g2.append('text').text('Statistical Parity')
    .attrs({x: 20, y: 390, 'font-size': 14})
    .style('fill', '#594F4F');
var text = g2.append('text').text('Conditional Procedure')
    .attrs({x: 20, y: 425, 'font-size': 14})
    .style('fill', '#594F4F');
var text = g2.append('text').text('Accuracy Equality')
    .attrs({x: 20, y: 440, 'font-size': 14})
    .style('fill', '#594F4F');
var text = g2.append('text').text('Conditional Use')
    .attrs({x: 20, y: 465, 'font-size': 14})
    .style('fill', '#594F4F');
var text = g2.append('text').text('Accuracy Equality')
    .attrs({x: 20, y: 480, 'font-size': 14})
    .style('fill', '#594F4F');
var text = g2.append('text').text('Treatment Equality')
    .attrs({x: 20, y: 510, 'font-size': 14})
    .style('fill', '#594F4F');
var text = g2.append('text').text('Total Fairness')
    .attrs({x: 20, y: 550, 'font-size': 14})
    .style('fill', '#594F4F');
var line = g2.append('line')
    .attrs({x1: 20, y1: 575, x2: 250, y2: 575})
    .style('stroke', '#594F4F')
    .style('stroke-width', 2);
//=============================================================================
//                        SECTION 3
//=============================================================================
var g3 = svg.append('g');
var text = g3.append('text').text('3.')
    .attrs({x: 35, y: 615, 'font-size': 25})
    .style('fill', '#594F4F');
var text = g3.append('text').text('CHECK OVERALL')
    .attrs({x: 70, y: 600, 'font-size': 15})
    .style('fill', '#594F4F');
var text = g3.append('text').text('STATISTICS')
    .attrs({x: 70, y: 620, 'font-size': 15})
    .style('fill', '#594F4F');
var line = g3.append('line')
    .attrs({x1: 20, y1: 635, x2: 250, y2: 635})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);

var text = g3.append('text').text('Overall Accuracy: ')
    .attrs({x: 20, y: 675, 'font-size': 14})
    .style('fill', '#594F4F');
var text = g3.append('text').text('Overall Positive')
    .attrs({x: 20, y: 715, 'font-size': 14})
    .style('fill', '#594F4F');
var text = g3.append('text').text('Predictive Power:')
    .attrs({x: 20, y: 730, 'font-size': 14})
    .style('fill', '#594F4F');
var text = g3.append('text').text('Overall False')
    .attrs({x: 20, y: 765, 'font-size': 14})
    .style('fill', '#594F4F');
var text = g3.append('text').text('Positive Rate:')
    .attrs({x: 20, y: 780, 'font-size': 14})
    .style('fill', '#594F4F');
var text = g3.append('text').text('Overall False')
    .attrs({x: 20, y: 815, 'font-size': 14})
    .style('fill', '#594F4F');
var text = g3.append('text').text('Negative Rate:')
    .attrs({x: 20, y: 830, 'font-size': 14})
    .style('fill', '#594F4F');
//=============================================================================
//                        SECTION 4
//=============================================================================
var g4 = svg.append('g');
var text = g4.append('text').text('4.')
    .attrs({x: 310, y: 295, 'font-size': 25})
    .style('fill', '#594F4F');
var text = g4.append('text').text('EXAMINE AND COMPARE')
    .attrs({x: 345, y: 280, 'font-size': 15})
    .style('fill', '#594F4F');
var text = g4.append('text').text('THRESHOLDS FOR BOTH GROUPS')
    .attrs({x: 345, y: 300, 'font-size': 15})
    .style('fill', '#594F4F');
var line = g4.append('line')
    .attrs({x1: 295, y1: 315, x2: 755, y2: 315})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);

var g4a = svg.append('g');
var rect = g4a.append('rect')
    .attrs({x: 295, y: 370, width: 460, height: 230, 'fill': '#E5FCC2'})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);

var g4b = svg.append('g');
var rect = g4b.append('rect')
    .attrs({x: 295, y: 640, width: 460, height: 230, 'fill': '#E5FCC2'})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);
//=============================================================================
//                        SECTION 5
//=============================================================================
var g5 = svg.append('g');
var text = g5.append('text').text('5.')
    .attrs({x: 805, y: 295, 'font-size': 25})
    .style('fill', '#594F4F');
var text = g5.append('text').text("CHECK THE MATH")
    .attrs({x: 840, y: 290, 'font-size': 15})
    .style('fill', '#594F4F');
var text = g5.append('text').text('Here are the confusion matrices for your choice')
    .attrs({x: 805, y: 315, 'font-size': 14})
    .style('fill', '#594F4F');
var text = g5.append('text').text('of optimized fairness, where difference between')
    .attrs({x: 805, y: 332, 'font-size': 14})
    .style('fill', '#594F4F');
var text = g5.append('text').text('fairness is less than 0.01.')
    .attrs({x: 805, y: 349, 'font-size': 14})
    .style('fill', '#594F4F');

var rect = g5.append('rect')
    .attrs({x: 805, y: 370, width: 375, height: 230, 'fill': '#E5FCC2'})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);
var rect = g5.append('rect')
    .attrs({x: 805, y: 640, width: 375, height: 230, 'fill': '#E5FCC2'})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);

var line = g5.append('line')
    .attrs({x1: 867, y1: 370, x2: 867, y2: 600})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);
var line = g5.append('line')
    .attrs({x1: 867, y1: 640, x2: 867, y2: 870})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);
var line = g5.append('line')
    .attrs({x1: 992, y1: 370, x2: 992, y2: 600})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);
var line = g5.append('line')
    .attrs({x1: 992, y1: 640, x2: 992, y2: 870})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);
var line = g5.append('line')
    .attrs({x1: 1117, y1: 370, x2: 1117, y2: 600})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);
var line = g5.append('line')
    .attrs({x1: 1117, y1: 640, x2: 1117, y2: 870})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);
var line = g5.append('line')
    .attrs({x1: 805, y1: 408, x2: 1180, y2: 408})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);
var line = g5.append('line')
    .attrs({x1: 805, y1: 678, x2: 1180, y2: 678})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);
var line = g5.append('line')
    .attrs({x1: 805, y1: 485, x2: 1180, y2: 485})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);
var line = g5.append('line')
    .attrs({x1: 805, y1: 755, x2: 1180, y2: 755})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);
var line = g5.append('line')
    .attrs({x1: 805, y1: 562, x2: 1180, y2: 562})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);
var line = g5.append('line')
    .attrs({x1: 805, y1: 832, x2: 1180, y2: 832})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);

var text = g5.append('text').text('Actual')
    .attrs({x: 930, y: 385, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = g5.append('text').text('Positives')
    .attrs({x: 930, y: 403, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = g5.append('text').text('Actual')
    .attrs({x: 1055, y: 385, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = g5.append('text').text('Negatives')
    .attrs({x: 1055, y: 403, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = g5.append('text').text('Pred.')
    .attrs({x: 836, y: 433, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = g5.append('text').text('Posi-')
    .attrs({x: 836, y: 453, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = g5.append('text').text('tive')
    .attrs({x: 836, y: 469, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = g5.append('text').text('Pred.')
    .attrs({x: 836, y: 510, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = g5.append('text').text('Nega-')
    .attrs({x: 836, y: 530, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = g5.append('text').text('tive')
    .attrs({x: 836, y: 546, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = g5.append('text').text('Actual')
    .attrs({x: 930, y: 655, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = g5.append('text').text('Positives')
    .attrs({x: 930, y: 673, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = g5.append('text').text('Actual')
    .attrs({x: 1055, y: 655, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = g5.append('text').text('Negatives')
    .attrs({x: 1055, y: 673, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = g5.append('text').text('Pred.')
    .attrs({x: 836, y: 703, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = g5.append('text').text('Posi-')
    .attrs({x: 836, y: 723, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = g5.append('text').text('tive')
    .attrs({x: 836, y: 739, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = g5.append('text').text('Pred.')
    .attrs({x: 836, y: 780, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = g5.append('text').text('Nega-')
    .attrs({x: 836, y: 800, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = g5.append('text').text('tive')
    .attrs({x: 836, y: 816, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
//=============================================================================
//=============================================================================
//=============================================================================
//                        INTERACTIVITY
//=============================================================================
//=============================================================================
//=============================================================================
var data = [];
var categoryData = [];
var currentData = [];
var selectedData = [];
var countRaceDict = {};
var countGenderDict = {};
var category = "Race";
var fairness = 0;

function drawGraph() {
    var caucasian_data = [0, 605, 321, 243, 238, 200, 160, 113, 96, 77, 50];
    var afAm_data = [0, 365, 346, 343, 337, 323, 318, 317, 301, 298, 227];
    var male_data = [0, 1025, 647, 543, 507, 455, 415, 412, 367, 364, 262];
    var female_data = [0, 261, 175, 140, 127, 123, 114, 84, 56, 53, 42];
    var data1 = [];
    var data2 = [];

    if(category == "Race") {
        data1 = caucasian_data;
        data2 = afAm_data;
        factor = 23/70;
    } else {
        data1 = male_data;
        data2 = female_data;
        factor = 23/120;
    }

    g4a.selectAll('rect').remove();
    g4b.selectAll('rect').remove();
    g4a.selectAll('line').remove();
    g4b.selectAll('line').remove();
    g4a.selectAll('#barlabel1').remove();
    g4b.selectAll('#barlabel2').remove();

    var rect = g4a.append('rect')
        .attrs({x: 295, y: 370, width: 460, height: 230, 'fill': '#E5FCC2'})
        .style('stroke', '#594F4F')
        .style('stroke-width', 1);

    var rect = g4b.append('rect')
        .attrs({x: 295, y: 640, width: 460, height: 230, 'fill': '#E5FCC2'})
        .style('stroke', '#594F4F')
        .style('stroke-width', 1);

    var chart1 = g4a.selectAll('rect')
        .data(data1)
        .enter()
        .append('rect')
        .attr('x', function (d, i) {
            return 298 + (46 * (i-1));
        })
        .attr('y', function(d) {
            return 599 - (d*factor);
        })
        .attr('height', function(d, i) {
            if (i == 0) return 0;
            return (d*factor);
        })
        .attr('width', 39)
    	.attr('fill', '#9DE0AD');

    var chart2 = g4b.selectAll('rect')
        .data(data2)
        .enter()
        .append('rect')
        .attr('x', function (d, i) {
            return 298 + (46 * (i-1));
        })
        .attr('y', function(d) {
            return 869 - (d*factor);
        })
        .attr('height', function(d, i) {
            if (i == 0) return 0;
            return (d*factor);
        })
        .attr('width', 39)
    	.attr('fill', '#9DE0AD');

    var line1 = g4a.append('line')
        .attr('x1', function() {
            return 295 + (46 * ((selectedData.ThresholdA*10)-1));
        })
        .attr('x2', function() {
            return 295 + (46 * ((selectedData.ThresholdA*10)-1));
        })
        .attrs({y1: 370, y2: 600})
        .style('stroke', '#547980')
        .style('stroke-width', 2);

    var line2 = g4b.append('line')
        .attr('x1', function() {
            return 295 + (46 * ((selectedData.ThresholdB*10)-1));
        })
        .attr('x2', function() {
            return 295 + (46 * ((selectedData.ThresholdB*10)-1));
        })
        .attrs({y1: 640, y2: 870})
        .style('stroke', '#547980')
        .style('stroke-width', 2);

    var text = g4a.selectAll('text')
        .data(data1)
        .enter()
        .append('text')
        .attr('id', 'barlabel1')
        .attr('x', function(d, i) {
            return 298 + (46 * (i-1)) + 39/2;
        })
        .attr('y', function(d) {
            return 594 - (d*factor);
        })
        .attr('fill', '#547980')
        .attr('text-anchor', 'middle')
        .attr('font-size', '18')
        .text(function(d, i) {
            if(i == 0) return "";
            return d;
        });
    var text = g4b.selectAll('text')
        .data(data2)
        .enter()
        .append('text')
        .attr('id', 'barlabel2')
        .attr('x', function(d, i) {
            return 298 + (46 * (i-1)) + 39/2;
        })
        .attr('y', function(d) {
            return 864 - (d*factor);
        })
        .attr('fill', '#547980')
        .attr('text-anchor', 'middle')
        .attr('font-size', '18')
        .text(function(d, i) {
            if(i == 0) return "";
            return d;
        });
}

function populateData() {
	if(category == "Gender") {
    	group1.text("Male");
    	group2.text("Female");
	} else {
    	group1.text("Caucasian");
    	group2.text("African-American");
	}

	total_accuracy.text(selectedData.Accuracy);
	total_ppv.text(selectedData.PPV);
	total_fpr.text(selectedData.FPR);
	total_fnr.text(selectedData.FNR);

	tpa.text(selectedData.Tpa);
	fna.text(selectedData.Fna);
	fpa.text(selectedData.Fpa);
	tna.text(selectedData.Tna);
	tpb.text(selectedData.Tpb);
	fnb.text(selectedData.Fnb);
	fpb.text(selectedData.Fpb);
	tnb.text(selectedData.Tnb);

	threshold1.text(selectedData.ThresholdA);
	threshold2.text(selectedData.ThresholdB);
	var tuple = "(" + selectedData.ThresholdA + "," + selectedData.ThresholdB + ")";
	var fairness;
	if(category == "Race") {
		fairness = countRaceDict[tuple];
	} else {
		fairness = countGenderDict[tuple];
	}
	for(i = 0; i < fairness.length; i++) {
		var thing = '[id="' + fairness[i] + '"]';
		d3.selectAll(thing).style('fill', '#9DE0AD');
	}

	var sum = parseInt(selectedData.Tpa, 10) + parseInt(selectedData.Fna, 10);
	col1TotA.text(sum);
	var sum = parseInt(selectedData.Fpa, 10) + parseInt(selectedData.Tna, 10);
	col2TotA.text(sum);
	var sum1 = parseInt(selectedData.Tpa, 10) + parseInt(selectedData.Fpa, 10);
	row1TotA.text(sum1);
	var sum2 = parseInt(selectedData.Tna, 10) + parseInt(selectedData.Fna, 10);
	row2TotA.text(sum2);
	var sum = sum1 + sum2;
	totA.text(sum);

	var sum = parseInt(selectedData.Tpb, 10) + parseInt(selectedData.Fnb, 10);
	col1TotB.text(sum);
	var sum = parseInt(selectedData.Fpb, 10) + parseInt(selectedData.Tnb, 10);
	col2TotB.text(sum);
	var sum1 = parseInt(selectedData.Tpb, 10) + parseInt(selectedData.Fpb, 10);
	row1TotB.text(sum1);
	var sum2 = parseInt(selectedData.Tnb, 10) + parseInt(selectedData.Fnb, 10);
	row2TotB.text(sum2);
	var sum = sum1 + sum2;
	totB.text(sum);
	drawGraph();
}

function filterFairness() {
    currentData = categoryData.filter(element => element.Optimized == fairness);
    var len = currentData.length;
    var selectIndex = Math.floor(Math.random() * (len));
    selectedData = currentData[selectIndex];
    populateData();
}

function changeData() {
    categoryData = data.filter(element => element.Group == category);
    filterFairness();
}

function createCountDict() {
	data1 = data.filter(element => element.Group == "Race");
	data2 = data.filter(element => element.Group == "Gender");
	var len = data1.length;
	for(i = 0; i < len; i++) {
		var tuple = "(" + data1[i].ThresholdA + "," + data1[i].ThresholdB + ")";
		// console.log(tuple);
		if(tuple in countRaceDict) {
			countRaceDict[tuple].push(data1[i].Optimized);
		} else {
			countRaceDict[tuple] = [data1[i].Optimized];
		}
	}
	// console.log(countRaceDict);
	var len = data2.length;
	for(i = 0; i < len; i++) {
		var tuple = "(" + data2[i].ThresholdA + "," + data2[i].ThresholdB + ")";
		// console.log(tuple);
		if(tuple in countGenderDict) {
			countGenderDict[tuple].push(data2[i].Optimized);
		} else {
			countGenderDict[tuple] = [data2[i].Optimized];
		}
	}
	// console.log(countGenderDict);
}

d3.csv("results.csv", function(readdata) {
    data = readdata;
    // console.log(data);
	createCountDict();
});

var toggleCatColor = (function() {
	return function() {
		d3.selectAll('.category').style('fill', '#E5FCC2');
		d3.select(this).style('fill', '#9DE0AD');
		category = this.id;
		changeData();
		drawGraph();
	}
})();

var toggleFairColor = (function() {
	return function() {
		d3.selectAll('.fairness').style('fill', '#E5FCC2');
		d3.select(this).style('fill', '#9DE0AD');
		fairness = this.id;
		changeData();
	}
})();

//=============================================================================
//                        SECTION 1
//=============================================================================
var raceButton = g1.append('rect')
	.attrs({x: 350, y: 190, width: 100, height: 40, 'fill': '#9DE0AD', 'class': 'category', 'id': 'Race'})
	.style('stroke', '#594F4F')
	.on('click', toggleCatColor);
var text = g1.append('text').text('RACE')
	.attrs({x: 400, y: 215, 'text-anchor': 'middle', 'font-size': 15})
    .style('fill', '#594F4F');

var genderButton = g1.append('rect')
	.attrs({x: 500, y: 190, width: 100, height: 40, 'fill': '#E5FCC2', 'class': 'category', 'id': 'Gender'})
	.style('stroke', '#594F4F')
	.on('click', toggleCatColor);
var text = g1.append('text').text('GENDER')
	.attrs({x: 550, y: 215, 'text-anchor': 'middle', 'font-size': 15})
    .style('fill', '#594F4F');
//=============================================================================
//                        SECTION 2
//=============================================================================
var f1button = g2.append('rect')
    .attrs({x: 190, y: 330, width: 30, height: 30, 'fill': '#E5FCC2', 'class': 'fairness', 'id': '1'})
	.style('stroke', '#594F4F')
	.on('click', toggleFairColor);

var f2button = g2.append('rect')
    .attrs({x: 190, y: 370, width: 30, height: 30, 'fill': '#E5FCC2', 'class': 'fairness', 'id': '2'})
	.style('stroke', '#594F4F')
	.on('click', toggleFairColor);

var f3button = g2.append('rect')
    .attrs({x: 190, y: 410, width: 30, height: 30, 'fill': '#E5FCC2', 'class': 'fairness', 'id': '3'})
	.style('stroke', '#594F4F')
	.on('click', toggleFairColor);

var f4button = g2.append('rect')
    .attrs({x: 190, y: 450, width: 30, height: 30, 'fill': '#E5FCC2', 'class': 'fairness', 'id': '4'})
	.style('stroke', '#594F4F')
	.on('click', toggleFairColor);

var f5button = g2.append('rect')
    .attrs({x: 190, y: 490, width: 30, height: 30, 'fill': '#E5FCC2', 'class': 'fairness', 'id': '5'})
	.style('stroke', '#594F4F')
	.on('click', toggleFairColor);

var f6button = g2.append('rect')
    .attrs({x: 190, y: 530, width: 30, height: 30, 'fill': '#E5FCC2', 'class': 'fairness', 'id': '6'})
	.style('stroke', '#594F4F')
	.on('click', toggleFairColor);
//=============================================================================
//                        SECTION 3
//=============================================================================
var total_accuracy = g3.append('text').text('')
    .attrs({x: 205, y: 680, 'font-size': 28, 'text-anchor': 'middle'})
    .style('fill', '#547980');

var total_ppv = g3.append('text').text('')
    .attrs({x: 205, y: 730, 'font-size': 28, 'text-anchor': 'middle'})
    .style('fill', '#547980');

var total_fpr = g3.append('text').text('')
    .attrs({x: 205, y: 780, 'font-size': 28, 'text-anchor': 'middle'})
    .style('fill', '#547980');

var total_fnr = g3.append('text').text('')
    .attrs({x: 205, y: 830, 'font-size': 28, 'text-anchor': 'middle'})
    .style('fill', '#547980');
//=============================================================================
//                        SECTION 4
//=============================================================================
var group1 = g4.append('text').text('Caucasian')
    .attrs({x: 295, y: 360, 'font-size': 20})
    .style('fill', '#547980');

var group2 = g4.append('text').text('African-American')
    .attrs({x: 295, y: 630, 'font-size': 20})
    .style('fill', '#547980');

var threshold1 = g4.append('text').text('')
    .attrs({x: 525, y: 360, 'font-size': 30, 'text-anchor': 'middle'})
    .style('fill', '#547980');

var threshold2 = g4.append('text').text('')
    .attrs({x: 525, y: 630, 'font-size': 30, 'text-anchor': 'middle'})
    .style('fill', '#547980');
//=============================================================================
//                        SECTION 5
//=============================================================================
var tpa = g5.append('text').text('TP')
    .attrs({x: 929, y: 453, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var fna = g5.append('text').text('FN')
    .attrs({x: 929, y: 530, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var fpa = g5.append('text').text('FP')
    .attrs({x: 1054, y: 453, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var tna = g5.append('text').text('TN')
    .attrs({x: 1054, y: 530, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var tpb = g5.append('text').text('TP')
    .attrs({x: 929, y: 723, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var fnb = g5.append('text').text('FN')
    .attrs({x: 929, y: 800, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var fpb = g5.append('text').text('FP')
    .attrs({x: 1054, y: 723, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var tnb = g5.append('text').text('TN')
    .attrs({x: 1054, y: 800, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');

var col1TotA = g5.append('text').text('')
    .attrs({x: 929, y: 590, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var col2TotA = g5.append('text').text('')
    .attrs({x: 1054, y: 590, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var col1TotB = g5.append('text').text('')
    .attrs({x: 929, y: 860, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var col2TotB = g5.append('text').text('')
    .attrs({x: 1054, y: 860, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var row1TotA = g5.append('text').text('')
    .attrs({x: 1150, y: 453, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var row2TotA = g5.append('text').text('')
    .attrs({x: 1150, y: 530, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var row1TotB = g5.append('text').text('')
    .attrs({x: 1150, y: 723, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var row2TotB = g5.append('text').text('')
    .attrs({x: 1150, y: 800, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var totA = g5.append('text').text('')
	.attrs({x: 1150, y: 590, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var totB = g5.append('text').text('')
	.attrs({x: 1150, y: 860, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
