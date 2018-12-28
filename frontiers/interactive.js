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
var svg = d3.select('#interactive').html('')
	.append('svg')
	.attrs({width: 1200, height: 900})
	.style('background', '#E5FCC2');

//=============================================================================
//                        HEADING
//=============================================================================
var text = svg.append('text').text('FAIRNESS IN MACHINE LEARNING')
    .attrs({x: 20, y: 53, 'font-size': 33})
    .style('fill', '#594F4F');
var text = svg.append('text').text("You're an algorithm designer with a quest:")
    .attrs({x: 20, y: 85, 'font-size': 14})
    .style('fill', '#594F4F');
var text = svg.append('text').text("Testing an algorithm to find what definitions of fairness")
    .attrs({x: 320, y: 85, 'font-size': 14, 'font-weight': 'bold'})
    .style('fill', '#594F4F');
var text = svg.append('text').text("you can satisfy simultaneously.")
    .attrs({x: 20, y: 105, 'font-size': 14, 'font-weight': 'bold'})
    .style('fill', '#594F4F');
var text = svg.append('text').text("Try to optimize fairness, using real crime-risk assessment data from the")
    .attrs({x: 270, y: 105, 'font-size': 14})
    .style('fill', '#594F4F');
var text = svg.append('text').text("ProPublica investigation 'Machine Bias.' Some thresholds may satisfy other kinds of fairness, while others")
    .attrs({x: 20, y: 125, 'font-size': 14})
    .style('fill', '#594F4F');
var text = svg.append('text').text("won't. Some kinds of fairness may not be achievable in certain protected groups.")
    .attrs({x: 20, y: 145, 'font-size': 14})
    .style('fill', '#594F4F');
var line = svg.append('line')
    .attrs({x1: 20, y1: 170, x2: 1180, y2: 170})
    .style('stroke', '#594F4F')
    .style('stroke-width', 2);
var line = svg.append('line')
    .attrs({x1: 20, y1: 250, x2: 1180, y2: 250})
    .style('stroke', '#594F4F')
    .style('stroke-width', 2);
//=============================================================================
//                        SECTION 1
//=============================================================================
var text = svg.append('text').text('1.')
    .attrs({x: 40, y: 215, 'font-size': 25})
    .style('fill', '#594F4F');
var text = svg.append('text').text('CHOOSE A')
    .attrs({x: 70, y: 205, 'font-size': 15})
    .style('fill', '#594F4F');
var text = svg.append('text').text('PROTECTED CATEGORY')
    .attrs({x: 70, y: 225, 'font-size': 15})
    .style('fill', '#594F4F');
//=============================================================================
//                        SECTION 2
//=============================================================================
var text = svg.append('text').text('2.')
    .attrs({x: 35, y: 295, 'font-size': 25})
    .style('fill', '#594F4F');
var text = svg.append('text').text('SELECT A FAIRNESS')
    .attrs({x: 70, y: 280, 'font-size': 15})
    .style('fill', '#594F4F');
var text = svg.append('text').text('TO OPTIMIZE')
    .attrs({x: 70, y: 300, 'font-size': 15})
    .style('fill', '#594F4F');
var line = svg.append('line')
    .attrs({x1: 20, y1: 315, x2: 250, y2: 315})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);

var text = svg.append('text').text('Overall Accuracy')
    .attrs({x: 20, y: 345, 'font-size': 14})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Equality')
    .attrs({x: 20, y: 360, 'font-size': 14})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Statistical Parity')
    .attrs({x: 20, y: 390, 'font-size': 14})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Conditional Procedure')
    .attrs({x: 20, y: 425, 'font-size': 14})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Accuracy Equality')
    .attrs({x: 20, y: 440, 'font-size': 14})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Conditional Use')
    .attrs({x: 20, y: 465, 'font-size': 14})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Accuracy Equality')
    .attrs({x: 20, y: 480, 'font-size': 14})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Treatment Equality')
    .attrs({x: 20, y: 510, 'font-size': 14})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Total Fairness')
    .attrs({x: 20, y: 550, 'font-size': 14})
    .style('fill', '#594F4F');
var line = svg.append('line')
    .attrs({x1: 20, y1: 575, x2: 250, y2: 575})
    .style('stroke', '#594F4F')
    .style('stroke-width', 2);
//=============================================================================
//                        SECTION 3
//=============================================================================
var text = svg.append('text').text('3.')
    .attrs({x: 35, y: 615, 'font-size': 25})
    .style('fill', '#594F4F');
var text = svg.append('text').text('CHECK OVERALL')
    .attrs({x: 70, y: 600, 'font-size': 15})
    .style('fill', '#594F4F');
var text = svg.append('text').text('STATISTICS')
    .attrs({x: 70, y: 620, 'font-size': 15})
    .style('fill', '#594F4F');
var line = svg.append('line')
    .attrs({x1: 20, y1: 635, x2: 250, y2: 635})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);

var text = svg.append('text').text('Overall Accuracy: ')
    .attrs({x: 20, y: 675, 'font-size': 14})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Overall Positive')
    .attrs({x: 20, y: 715, 'font-size': 14})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Predictive Power:')
    .attrs({x: 20, y: 730, 'font-size': 14})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Overall False')
    .attrs({x: 20, y: 765, 'font-size': 14})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Positive Rate:')
    .attrs({x: 20, y: 780, 'font-size': 14})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Overall False')
    .attrs({x: 20, y: 815, 'font-size': 14})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Negative Rate:')
    .attrs({x: 20, y: 830, 'font-size': 14})
    .style('fill', '#594F4F');
//=============================================================================
//                        SECTION 4
//=============================================================================
var text = svg.append('text').text('4.')
    .attrs({x: 305, y: 295, 'font-size': 25})
    .style('fill', '#594F4F');
var text = svg.append('text').text("CHECK THE MATH")
    .attrs({x: 340, y: 290, 'font-size': 15})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Here are the confusion matrices for your choice')
    .attrs({x: 305, y: 315, 'font-size': 14})
    .style('fill', '#594F4F');
var text = svg.append('text').text('of optimized fairness, where difference < 0.01.')
    .attrs({x: 305, y: 332, 'font-size': 14})
    .style('fill', '#594F4F');

var rect = svg.append('rect')
    .attrs({x: 305, y: 370, width: 375, height: 230, 'fill': '#E5FCC2'})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);
var rect = svg.append('rect')
    .attrs({x: 305, y: 640, width: 375, height: 230, 'fill': '#E5FCC2'})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);

var line = svg.append('line')
    .attrs({x1: 367, y1: 370, x2: 367, y2: 600})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);
var line = svg.append('line')
    .attrs({x1: 367, y1: 640, x2: 367, y2: 870})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);
var line = svg.append('line')
    .attrs({x1: 492, y1: 370, x2: 492, y2: 600})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);
var line = svg.append('line')
    .attrs({x1: 492, y1: 640, x2: 492, y2: 870})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);
var line = svg.append('line')
    .attrs({x1: 617, y1: 370, x2: 617, y2: 600})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);
var line = svg.append('line')
    .attrs({x1: 617, y1: 640, x2: 617, y2: 870})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);
var line = svg.append('line')
    .attrs({x1: 305, y1: 408, x2: 680, y2: 408})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);
var line = svg.append('line')
    .attrs({x1: 305, y1: 678, x2: 680, y2: 678})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);
var line = svg.append('line')
    .attrs({x1: 305, y1: 485, x2: 680, y2: 485})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);
var line = svg.append('line')
    .attrs({x1: 305, y1: 755, x2: 680, y2: 755})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);
var line = svg.append('line')
    .attrs({x1: 305, y1: 562, x2: 680, y2: 562})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);
var line = svg.append('line')
    .attrs({x1: 305, y1: 832, x2: 680, y2: 832})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);

var text = svg.append('text').text('Actual')
    .attrs({x: 430, y: 385, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Positives')
    .attrs({x: 430, y: 403, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Actual')
    .attrs({x: 555, y: 385, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Negatives')
    .attrs({x: 555, y: 403, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Pred.')
    .attrs({x: 336, y: 433, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Posi-')
    .attrs({x: 336, y: 453, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = svg.append('text').text('tive')
    .attrs({x: 336, y: 469, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Pred.')
    .attrs({x: 336, y: 510, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Nega-')
    .attrs({x: 336, y: 530, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = svg.append('text').text('tive')
    .attrs({x: 336, y: 546, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Actual')
    .attrs({x: 430, y: 655, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Positives')
    .attrs({x: 430, y: 673, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Actual')
    .attrs({x: 555, y: 655, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Negatives')
    .attrs({x: 555, y: 673, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Pred.')
    .attrs({x: 336, y: 703, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Posi-')
    .attrs({x: 336, y: 723, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = svg.append('text').text('tive')
    .attrs({x: 336, y: 739, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Pred.')
    .attrs({x: 336, y: 780, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Nega-')
    .attrs({x: 336, y: 800, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = svg.append('text').text('tive')
    .attrs({x: 336, y: 816, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
//=============================================================================
//                        SECTION 5
//=============================================================================
var text = svg.append('text').text('5.')
    .attrs({x: 735, y: 295, 'font-size': 25})
    .style('fill', '#594F4F');
var text = svg.append('text').text('CHECK FAIRNESS VALUES AND')
    .attrs({x: 770, y: 280, 'font-size': 15})
    .style('fill', '#594F4F');
var text = svg.append('text').text('THRESHOLDS FOR BOTH GROUPS')
    .attrs({x: 770, y: 300, 'font-size': 15})
    .style('fill', '#594F4F');
var line = svg.append('line')
    .attrs({x1: 720, y1: 315, x2: 1180, y2: 315})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);

var text = svg.append('text').text('Overall Accuracy')
    .attrs({x: 720, y: 345, 'font-size': 14})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Equality')
    .attrs({x: 720, y: 360, 'font-size': 14})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Statistical Parity')
    .attrs({x: 720, y: 390, 'font-size': 14})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Conditional Procedure')
    .attrs({x: 720, y: 425, 'font-size': 14})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Accuracy Equality')
    .attrs({x: 720, y: 440, 'font-size': 14})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Conditional Use')
    .attrs({x: 720, y: 465, 'font-size': 14})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Accuracy Equality')
    .attrs({x: 720, y: 480, 'font-size': 14})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Treatment Equality')
    .attrs({x: 720, y: 510, 'font-size': 14})
    .style('fill', '#594F4F');

var text = svg.append('text').text('Threshold for first group: ')
    .attrs({x: 1003, y: 560, 'font-size': 20, 'text-anchor': 'end'})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Threshold for second group: ')
    .attrs({x: 720, y: 600, 'font-size': 20})
    .style('fill', '#594F4F');
var line = svg.append('line')
    .attrs({x1: 720, y1: 620, x2: 1180, y2: 620})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);

var text = svg.append('text').text('Overall Accuracy Equality')
    .attrs({x: 720, y: 660, 'font-size': 14})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Statistical Parity')
    .attrs({x: 720, y: 710, 'font-size': 14})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Conditional Procedure')
    .attrs({x: 720, y: 750, 'font-size': 14})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Accuracy Equality')
    .attrs({x: 720, y: 765, 'font-size': 14})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Conditional Use Accuracy')
    .attrs({x: 720, y: 800, 'font-size': 14})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Equality')
    .attrs({x: 720, y: 815, 'font-size': 14})
    .style('fill', '#594F4F');
var text = svg.append('text').text('Treatment Equality')
    .attrs({x: 720, y: 860, 'font-size': 14})
    .style('fill', '#594F4F');

var text = svg.append('text').text('TP + TN')
    .attrs({x: 1030, y: 650, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = svg.append('text').text('TP + FN + FP + TN')
    .attrs({x: 1030, y: 670, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = svg.append('text').text('TP + FP')
    .attrs({x: 1030, y: 700, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = svg.append('text').text('TP + FN + FP + TN')
    .attrs({x: 1030, y: 720, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = svg.append('text').text('TP')
    .attrs({x: 1030, y: 750, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = svg.append('text').text('TP + FN')
    .attrs({x: 1030, y: 770, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = svg.append('text').text('TP')
    .attrs({x: 1030, y: 800, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = svg.append('text').text('TP + FP')
    .attrs({x: 1030, y: 820, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = svg.append('text').text('FP')
    .attrs({x: 1030, y: 850, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var text = svg.append('text').text('FN')
    .attrs({x: 1030, y: 870, 'font-size': 14, 'text-anchor': 'middle'})
    .style('fill', '#594F4F');
var line = svg.append('line')
    .attrs({x1: 960, y1: 654, x2: 1100, y2: 654})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);
var line = svg.append('line')
    .attrs({x1: 960, y1: 704, x2: 1100, y2: 704})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);
var line = svg.append('line')
    .attrs({x1: 995, y1: 754, x2: 1065, y2: 754})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);
var line = svg.append('line')
    .attrs({x1: 995, y1: 804, x2: 1065, y2: 804})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);
var line = svg.append('line')
    .attrs({x1: 1010, y1: 854, x2: 1050, y2: 854})
    .style('stroke', '#594F4F')
    .style('stroke-width', 1);
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

function populateData() {
	// console.log(selectedData);
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

	f1atext.text(selectedData.F1a);
	f1btext.text(selectedData.F1b);
	f2atext.text(selectedData.F2a);
	f2btext.text(selectedData.F2b);
	f3atext.text(selectedData.F3a);
	f3btext.text(selectedData.F3b);
	f4atext.text(selectedData.F4a);
	f4btext.text(selectedData.F4b);
	f5atext.text(selectedData.F5a);
	f5btext.text(selectedData.F5b);

	threshold1.text(selectedData.ThresholdA);
	threshold2.text(selectedData.ThresholdB);
	var tuple = "(" + selectedData.ThresholdA + "," + selectedData.ThresholdB + ")";
	if(category == "Race") {
		var fairness = countRaceDict[tuple];
	} else {
		var fairness = countGenderDict[tuple];
	}
	// console.log(fairness);
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
var raceButton = svg.append('rect')
	.attrs({x: 350, y: 190, width: 100, height: 40, 'fill': '#9DE0AD', 'class': 'category', 'id': 'Race'})
	.style('stroke', '#594F4F')
	.on('click', toggleCatColor);
var text = svg.append('text').text('RACE')
	.attrs({x: 400, y: 215, 'text-anchor': 'middle', 'font-size': 15})
    .style('fill', '#594F4F');

var genderButton = svg.append('rect')
	.attrs({x: 500, y: 190, width: 100, height: 40, 'fill': '#E5FCC2', 'class': 'category', 'id': 'Gender'})
	.style('stroke', '#594F4F')
	.on('click', toggleCatColor);
var text = svg.append('text').text('GENDER')
	.attrs({x: 550, y: 215, 'text-anchor': 'middle', 'font-size': 15})
    .style('fill', '#594F4F');
//=============================================================================
//                        SECTION 2
//=============================================================================
var f1button = svg.append('rect')
    .attrs({x: 190, y: 330, width: 30, height: 30, 'fill': '#E5FCC2', 'class': 'fairness', 'id': '1'})
	.style('stroke', '#594F4F')
	.on('click', toggleFairColor);

var f2button = svg.append('rect')
    .attrs({x: 190, y: 370, width: 30, height: 30, 'fill': '#E5FCC2', 'class': 'fairness', 'id': '2'})
	.style('stroke', '#594F4F')
	.on('click', toggleFairColor);

var f3button = svg.append('rect')
    .attrs({x: 190, y: 410, width: 30, height: 30, 'fill': '#E5FCC2', 'class': 'fairness', 'id': '3'})
	.style('stroke', '#594F4F')
	.on('click', toggleFairColor);

var f4button = svg.append('rect')
    .attrs({x: 190, y: 450, width: 30, height: 30, 'fill': '#E5FCC2', 'class': 'fairness', 'id': '4'})
	.style('stroke', '#594F4F')
	.on('click', toggleFairColor);

var f5button = svg.append('rect')
    .attrs({x: 190, y: 490, width: 30, height: 30, 'fill': '#E5FCC2', 'class': 'fairness', 'id': '5'})
	.style('stroke', '#594F4F')
	.on('click', toggleFairColor);

var f6button = svg.append('rect')
    .attrs({x: 190, y: 530, width: 30, height: 30, 'fill': '#E5FCC2', 'class': 'fairness', 'id': '6'})
	.style('stroke', '#594F4F')
	.on('click', toggleFairColor);
//=============================================================================
//                        SECTION 3
//=============================================================================
var total_accuracy = svg.append('text').text('')
    .attrs({x: 205, y: 680, 'font-size': 28, 'text-anchor': 'middle'})
    .style('fill', '#547980');

var total_ppv = svg.append('text').text('')
    .attrs({x: 205, y: 730, 'font-size': 28, 'text-anchor': 'middle'})
    .style('fill', '#547980');

var total_fpr = svg.append('text').text('')
    .attrs({x: 205, y: 780, 'font-size': 28, 'text-anchor': 'middle'})
    .style('fill', '#547980');

var total_fnr = svg.append('text').text('')
    .attrs({x: 205, y: 830, 'font-size': 28, 'text-anchor': 'middle'})
    .style('fill', '#547980');
//=============================================================================
//                        SECTION 4
//=============================================================================
var group1 = svg.append('text').text('Caucasian')
    .attrs({x: 305, y: 360, 'font-size': 20})
    .style('fill', '#547980');

var group2 = svg.append('text').text('African-American')
    .attrs({x: 305, y: 630, 'font-size': 20})
    .style('fill', '#547980');

var tpa = svg.append('text').text('TP')
    .attrs({x: 429, y: 453, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var fna = svg.append('text').text('FN')
    .attrs({x: 429, y: 530, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var fpa = svg.append('text').text('FP')
    .attrs({x: 554, y: 453, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var tna = svg.append('text').text('TN')
    .attrs({x: 554, y: 530, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var tpb = svg.append('text').text('TP')
    .attrs({x: 429, y: 723, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var fnb = svg.append('text').text('FN')
    .attrs({x: 429, y: 800, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var fpb = svg.append('text').text('FP')
    .attrs({x: 554, y: 723, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var tnb = svg.append('text').text('TN')
    .attrs({x: 554, y: 800, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');

var col1TotA = svg.append('text').text('')
    .attrs({x: 429, y: 590, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var col2TotA = svg.append('text').text('')
    .attrs({x: 554, y: 590, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var col1TotB = svg.append('text').text('')
    .attrs({x: 429, y: 860, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var col2TotB = svg.append('text').text('')
    .attrs({x: 554, y: 860, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var row1TotA = svg.append('text').text('')
    .attrs({x: 650, y: 453, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var row2TotA = svg.append('text').text('')
    .attrs({x: 650, y: 530, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var row1TotB = svg.append('text').text('')
    .attrs({x: 650, y: 723, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var row2TotB = svg.append('text').text('')
    .attrs({x: 650, y: 800, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var totA = svg.append('text').text('')
	.attrs({x: 650, y: 590, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var totB = svg.append('text').text('')
	.attrs({x: 650, y: 860, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
//=============================================================================
//                        SECTION 5
//=============================================================================
var f1atext = svg.append('text').text('')
    .attrs({x: 962, y: 352, 'font-size': 20, 'text-anchor': 'middle'})
	.style('fill', '#547980');

var f1btext = svg.append('text').text('')
    .attrs({x: 1107, y: 352, 'font-size': 20, 'text-anchor': 'middle'})
	.style('fill', '#547980');

var f2atext = svg.append('text').text('')
    .attrs({x: 962, y: 392, 'font-size': 20, 'text-anchor': 'middle'})
	.style('fill', '#547980');

var f2btext = svg.append('text').text('')
    .attrs({x: 1107, y: 392, 'font-size': 20, 'text-anchor': 'middle'})
	.style('fill', '#547980');

var f3atext = svg.append('text').text('')
    .attrs({x: 962, y: 432, 'font-size': 20, 'text-anchor': 'middle'})
	.style('fill', '#547980');

var f3btext = svg.append('text').text('')
    .attrs({x: 1107, y: 432, 'font-size': 20, 'text-anchor': 'middle'})
	.style('fill', '#547980');

var f4atext = svg.append('text').text('')
    .attrs({x: 962, y: 472, 'font-size': 20, 'text-anchor': 'middle'})
	.style('fill', '#547980');

var f4btext = svg.append('text').text('')
    .attrs({x: 1107, y: 472, 'font-size': 20, 'text-anchor': 'middle'})
	.style('fill', '#547980');

var f5atext = svg.append('text').text('')
    .attrs({x: 962, y: 512, 'font-size': 20, 'text-anchor': 'middle'})
	.style('fill', '#547980');

var f5btext = svg.append('text').text('')
    .attrs({x: 1107, y: 512, 'font-size': 20, 'text-anchor': 'middle'})
	.style('fill', '#547980');

var threshold1 = svg.append('text').text('')
    .attrs({x: 1050, y: 565, 'font-size': 30, 'text-anchor': 'middle'})
    .style('fill', '#547980');

var threshold2 = svg.append('text').text('')
    .attrs({x: 1050, y: 605, 'font-size': 30, 'text-anchor': 'middle'})
    .style('fill', '#547980');
