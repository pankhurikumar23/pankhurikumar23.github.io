// #E5FCC2 #9DE0AD #45ADA8 #547980 #594F4F
// #A8A7A7 #CC527A #E8175D #474747 #363636
// #ebf4f6 #bdeaee #76b4bd #58668b #5e5656
//=============================================================================
//=============================================================================
//=============================================================================
//                       STATIC
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
var category1 = "Race";
var fairness1 = 0;

function populateData1() {
	// console.log(selectedData);
	if(category1 == "Gender") {
    	group11.text("Male");
    	group12.text("Female");
	} else {
    	group11.text("Caucasian");
    	group12.text("African-American");
	}

	total_accuracy1.text(selectedData.Accuracy);
	total_ppv1.text(selectedData.PPV);
	total_fpr1.text(selectedData.FPR);
	total_fnr1.text(selectedData.FNR);

	tpa1.text(selectedData.Tpa);
	fna1.text(selectedData.Fna);
	fpa1.text(selectedData.Fpa);
	tna1.text(selectedData.Tna);
	tpb1.text(selectedData.Tpb);
	fnb1.text(selectedData.Fnb);
	fpb1.text(selectedData.Fpb);
	tnb1.text(selectedData.Tnb);

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

	threshold11.text(selectedData.ThresholdA);
	threshold12.text(selectedData.ThresholdB);
	var tuple = "(" + selectedData.ThresholdA + "," + selectedData.ThresholdB + ")";
	if(category1 == "Race") {
		fairness1 = countRaceDict[tuple];
	} else {
		fairness1 = countGenderDict[tuple];
	}
	// console.log(fairness);
	for(i = 0; i < fairness1.length; i++) {
		var thing = '[id="' + fairness1[i] + '"]';
		d3.selectAll(thing).style('fill', '#9DE0AD');
	}

	var sum = parseInt(selectedData.Tpa, 10) + parseInt(selectedData.Fna, 10);
	col1TotA1.text(sum);
	var sum = parseInt(selectedData.Fpa, 10) + parseInt(selectedData.Tna, 10);
	col2TotA1.text(sum);
	var sum1 = parseInt(selectedData.Tpa, 10) + parseInt(selectedData.Fpa, 10);
	row1TotA1.text(sum1);
	var sum2 = parseInt(selectedData.Tna, 10) + parseInt(selectedData.Fna, 10);
	row2TotA1.text(sum2);
	var sum = sum1 + sum2;
	totA1.text(sum);

	var sum = parseInt(selectedData.Tpb, 10) + parseInt(selectedData.Fnb, 10);
	col1TotB1.text(sum);
	var sum = parseInt(selectedData.Fpb, 10) + parseInt(selectedData.Tnb, 10);
	col2TotB1.text(sum);
	var sum1 = parseInt(selectedData.Tpb, 10) + parseInt(selectedData.Fpb, 10);
	row1TotB1.text(sum1);
	var sum2 = parseInt(selectedData.Tnb, 10) + parseInt(selectedData.Fnb, 10);
	row2TotB1.text(sum2);
	var sum = sum1 + sum2;
	totB1.text(sum);
}

function filterFairness1() {
    currentData = categoryData.filter(element => element.Optimized == fairness1);
    var len = currentData.length;
    var selectIndex = Math.floor(Math.random() * (len));
    selectedData = currentData[selectIndex];
    populateData1();
}

function changeData1() {
    categoryData = data.filter(element => element.Group == category1);
    filterFairness1();
}

function createCountDict1() {
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
	createCountDict1();
});

var toggleCatColor1 = (function() {
	return function() {
		d3.selectAll('.category1').style('fill', '#E5FCC2');
		d3.select(this).style('fill', '#9DE0AD');
		category1 = this.id;
		changeData1();
	}
})();

var toggleFairColor1 = (function() {
	return function() {
		d3.selectAll('.fairness1').style('fill', '#E5FCC2');
		d3.select(this).style('fill', '#9DE0AD');
		fairness1 = this.id;
		changeData1();
	}
})();

//=============================================================================
//                        SECTION 1
//=============================================================================
var raceButton = svg.append('rect')
	.attrs({x: 350, y: 190, width: 100, height: 40, 'fill': '#9DE0AD', 'class': 'category1', 'id': 'Race'})
	.style('stroke', '#594F4F')
	.on('click', toggleCatColor1);
var text = svg.append('text').text('RACE')
	.attrs({x: 400, y: 215, 'text-anchor': 'middle', 'font-size': 15})
    .style('fill', '#594F4F');

var genderButton = svg.append('rect')
	.attrs({x: 500, y: 190, width: 100, height: 40, 'fill': '#E5FCC2', 'class': 'category1', 'id': 'Gender'})
	.style('stroke', '#594F4F')
	.on('click', toggleCatColor1);
var text = svg.append('text').text('GENDER')
	.attrs({x: 550, y: 215, 'text-anchor': 'middle', 'font-size': 15})
    .style('fill', '#594F4F');
//=============================================================================
//                        SECTION 2
//=============================================================================
var f1button1 = svg.append('rect')
    .attrs({x: 190, y: 330, width: 30, height: 30, 'fill': '#E5FCC2', 'class': 'fairness1', 'id': '1'})
	.style('stroke', '#594F4F')
	.on('click', toggleFairColor1);

var f2button1 = svg.append('rect')
    .attrs({x: 190, y: 370, width: 30, height: 30, 'fill': '#E5FCC2', 'class': 'fairness1', 'id': '2'})
	.style('stroke', '#594F4F')
	.on('click', toggleFairColor1);

var f3button1 = svg.append('rect')
    .attrs({x: 190, y: 410, width: 30, height: 30, 'fill': '#E5FCC2', 'class': 'fairness1', 'id': '3'})
	.style('stroke', '#594F4F')
	.on('click', toggleFairColor1);

var f4button1 = svg.append('rect')
    .attrs({x: 190, y: 450, width: 30, height: 30, 'fill': '#E5FCC2', 'class': 'fairness1', 'id': '4'})
	.style('stroke', '#594F4F')
	.on('click', toggleFairColor1);

var f5button1 = svg.append('rect')
    .attrs({x: 190, y: 490, width: 30, height: 30, 'fill': '#E5FCC2', 'class': 'fairness1', 'id': '5'})
	.style('stroke', '#594F4F')
	.on('click', toggleFairColor1);

var f6button1 = svg.append('rect')
    .attrs({x: 190, y: 530, width: 30, height: 30, 'fill': '#E5FCC2', 'class': 'fairness1', 'id': '6'})
	.style('stroke', '#594F4F')
	.on('click', toggleFairColor1);
//=============================================================================
//                        SECTION 3
//=============================================================================
var total_accuracy1 = svg.append('text').text('')
    .attrs({x: 205, y: 680, 'font-size': 28, 'text-anchor': 'middle'})
    .style('fill', '#547980');

var total_ppv1 = svg.append('text').text('')
    .attrs({x: 205, y: 730, 'font-size': 28, 'text-anchor': 'middle'})
    .style('fill', '#547980');

var total_fpr1 = svg.append('text').text('')
    .attrs({x: 205, y: 780, 'font-size': 28, 'text-anchor': 'middle'})
    .style('fill', '#547980');

var total_fnr1 = svg.append('text').text('')
    .attrs({x: 205, y: 830, 'font-size': 28, 'text-anchor': 'middle'})
    .style('fill', '#547980');
//=============================================================================
//                        SECTION 4
//=============================================================================
var group11 = svg.append('text').text('Caucasian')
    .attrs({x: 305, y: 360, 'font-size': 20})
    .style('fill', '#547980');

var group12 = svg.append('text').text('African-American')
    .attrs({x: 305, y: 630, 'font-size': 20})
    .style('fill', '#547980');

var tpa1 = svg.append('text').text('TP')
    .attrs({x: 429, y: 453, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var fna1 = svg.append('text').text('FN')
    .attrs({x: 429, y: 530, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var fpa1 = svg.append('text').text('FP')
    .attrs({x: 554, y: 453, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var tna1 = svg.append('text').text('TN')
    .attrs({x: 554, y: 530, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var tpb1 = svg.append('text').text('TP')
    .attrs({x: 429, y: 723, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var fnb1 = svg.append('text').text('FN')
    .attrs({x: 429, y: 800, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var fpb1 = svg.append('text').text('FP')
    .attrs({x: 554, y: 723, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var tnb1 = svg.append('text').text('TN')
    .attrs({x: 554, y: 800, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');

var col1TotA1 = svg.append('text').text('')
    .attrs({x: 429, y: 590, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var col2TotA1 = svg.append('text').text('')
    .attrs({x: 554, y: 590, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var col1TotB1 = svg.append('text').text('')
    .attrs({x: 429, y: 860, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var col2TotB1 = svg.append('text').text('')
    .attrs({x: 554, y: 860, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var row1TotA1 = svg.append('text').text('')
    .attrs({x: 650, y: 453, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var row2TotA1 = svg.append('text').text('')
    .attrs({x: 650, y: 530, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var row1TotB1 = svg.append('text').text('')
    .attrs({x: 650, y: 723, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var row2TotB1 = svg.append('text').text('')
    .attrs({x: 650, y: 800, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var totA1 = svg.append('text').text('')
	.attrs({x: 650, y: 590, 'font-size': 20, 'text-anchor': 'middle'})
    .style('fill', '#547980');
var totB1 = svg.append('text').text('')
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

var threshold11 = svg.append('text').text('')
    .attrs({x: 1050, y: 565, 'font-size': 30, 'text-anchor': 'middle'})
    .style('fill', '#547980');

var threshold12 = svg.append('text').text('')
    .attrs({x: 1050, y: 605, 'font-size': 30, 'text-anchor': 'middle'})
    .style('fill', '#547980');

