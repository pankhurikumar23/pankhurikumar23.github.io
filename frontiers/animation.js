// #A8A7A7 #CC527A #E8175D #474747 #363636
// #DAB239 #54BD9F #22949F #2E4B77 #2D3258 #080E28
//=============================================================================
//                        STICKY 1
//=============================================================================
var gs0 = d3.graphScroll()
    .container(d3.select('.container-1'))
    .graph(d3.selectAll('container-1 #graph1'))
    .eventId('uniqueId1')  // namespace for scroll and resize events
    .sections(d3.selectAll('.container-1 #sections > div'))
    .on('active', function(i){
})
//=============================================================================
//                        STICKY 2
//=============================================================================
var svg = d3.select('#graph2').html('')
	.append('svg')
	.attrs({width: 800, height: 340});

var grid = [];
x_base = 20;
y_base = 10;
for(i = 0; i < 4; i++) {
  grid[i] = [];
  for(j = 0; j < 4; j++) {
    grid[i][j] = svg.append('rect')
      .attrs({x: x_base+(i*190), y: y_base+(j*80), width: 190, height: 80})
      .style('stroke', '#080E28')
      .style('stroke-width', 2);
    if (i == 0 || j == 0) {
      grid[i][j].attr('fill', '#2E4B77');
    } else if (i == 3 && j == 3) {
      grid[i][j].attr('fill', '#22949F');
    } else {
      grid[i][j].attr('fill', '#54BD9F');
    }
  }
}

//add class to text for styling
var line = svg.append('line')
  .attrs({x1:20, y1:10, x2:210, y2:90})
  .style('stroke', '#080E28')
  .style('stroke-width', 2);
var text = svg.append('text').text('Actual')
  .attrs({x: 122, y: 42, 'class': 'cm-header'});
var text = svg.append('text').text('Predicted')
  .attrs({x: 21, y: 85, 'class': 'cm-header'});
var text = svg.append('text').text('Positive')
  .attrs({x: 255, y: 62, 'class': 'cm-header'});
var text = svg.append('text').text('Negative')
  .attrs({x: 435, y: 62, 'class': 'cm-header'});
var text = svg.append('text').text('Positive')
  .attrs({x: 60, y: 140, 'class': 'cm-header'});
var text = svg.append('text').text('Negative')
  .attrs({x: 50, y: 220, 'class': 'cm-header'});
var tpText = svg.append('text')
  .attrs({x: 305, y: 140, 'class': 'cm-header', 'text-anchor': 'middle'});
var fpText = svg.append('text')
  .attrs({x: 495, y: 140, 'class': 'cm-header', 'text-anchor': 'middle'});
var fnText = svg.append('text')
  .attrs({x: 305, y: 220, 'class': 'cm-header', 'text-anchor': 'middle'});
var tnText = svg.append('text')
  .attrs({x: 495, y: 220, 'class': 'cm-header', 'text-anchor': 'middle'});
var actPosTot = svg.append('text')
  .attrs({x: 305, y: 300, 'class': 'cm-header', 'text-anchor': 'middle'});
var actNegTot = svg.append('text')
  .attrs({x: 490, y: 300, 'class': 'cm-header', 'text-anchor': 'middle'});
var predPosTot = svg.append('text')
  .attrs({x: 680, y: 140, 'class': 'cm-header', 'text-anchor': 'middle'});
var predNegTot = svg.append('text')
  .attrs({x: 680, y: 220, 'class': 'cm-header', 'text-anchor': 'middle'});
var tot = svg.append('text')
  .attrs({x: 680, y: 300, 'class': 'cm-header', 'text-anchor': 'middle'});

var actTots = ["", "", "", "", "", "", "500", "500"];
var predTots = ["", "", "", "", "", "", "?", "?"];
var tots = ["", "", "", "", "", "", "N=1000", "N=1000"];
var actTotColor = ["#22949F", '#DAB239', "#22949F", '#22949F', '#22949F', '#22949F', '#22949F', '#22949F'];
var predTotColor = ["#22949F", "#22949F", '#DAB239', "#22949F", "#22949F", "#22949F", "#22949F", "#22949F"];
var tp = ["True Positive", "True Positive", "True Positive", "TP", "TP", "TP", "TP", "TP"];
var fp = ["False Positive", "False Positive", "False Positive", "FP", "FP", "FP", "FP", "FP"];
var fn = ["False Negative", "False Negative", "False Negative", "FN", "FN", "FN", "FN", "FN"];
var tn = ["True Negative", "True Negative", "True Negative", "TN", "TN", "TN", "TN", "TN"];
var gs = d3.graphScroll()
    .container(d3.select('.container-2'))
    .graph(d3.selectAll('container-2 #graph2'))
    .eventId('uniqueId2')  // namespace for scroll and resize events
    .sections(d3.selectAll('.container-2 #sections > div'))
    // .offset(innerWidth < 900 ? innerHeight - 30 : 200)
    .on('active', function(k){
      tpText.text(tp[k]);
      fpText.text(fp[k]);
      fnText.text(fn[k]);
      tnText.text(tn[k]);
      actPosTot.text(actTots[k]);
      actNegTot.text(actTots[k]);
      predPosTot.text(predTots[k]);
      predNegTot.text(predTots[k]);
      tot.text(tots[k]);
      grid[3][1].attr('fill', predTotColor[k]);
      grid[3][2].attr('fill', predTotColor[k]);
      grid[1][3].attr('fill', actTotColor[k]);
      grid[2][3].attr('fill', actTotColor[k]);
});
//=============================================================================
//                        STICKY 3
//=============================================================================
var svg2 = d3.select('#graph3').html('')
  .append('svg')
  .attrs({width: 800, height: 340});

var grid2 = [];
x_base = 20;
y_base = 10;
for(i = 0; i < 4; i++) {
  grid2[i] = [];
  for(j = 0; j < 4; j++) {
    grid2[i][j] = svg2.append('rect')
      .attrs({x: x_base+(i*190), y: y_base+(j*80), width: 190, height: 80})
      .style('stroke', '#080E28')
      .style('stroke-width', 2);
    if (i == 0 || j == 0) {
      grid2[i][j].attr('fill', '#2E4B77');
    } else if (i == 3 || j == 3) {
      grid2[i][j].attr('fill', '#22949F');
    } else {
      grid2[i][j].attr('fill', '#54BD9F');
    }
  }
}

var line = svg2.append('line')
  .attrs({x1:20, y1:10, x2:210, y2:90})
  .style('stroke', '#080E28')
  .style('stroke-width', 2);
var text = svg2.append('text').text('Actual')
  .attrs({x: 122, y: 42, 'class': 'cm-header'});
var text = svg2.append('text').text('Predicted')
  .attrs({x: 21, y: 85, 'class': 'cm-header'});
var text = svg2.append('text').text('Positive')
  .attrs({x: 255, y: 62, 'class': 'cm-header'});
var text = svg2.append('text').text('Negative')
  .attrs({x: 435, y: 62, 'class': 'cm-header'});
var text = svg2.append('text').text('Positive')
  .attrs({x: 60, y: 140, 'class': 'cm-header'});
var text = svg2.append('text').text('Negative')
  .attrs({x: 50, y: 220, 'class': 'cm-header'});
var tpText2 = svg2.append('text').text('TP')
  .attrs({x: 305, y: 140, 'class': 'cm-header', 'text-anchor': 'middle'});
var fpText2 = svg2.append('text').text('FP')
  .attrs({x: 495, y: 140, 'class': 'cm-header', 'text-anchor': 'middle'});
var fnText2 = svg2.append('text').text('FN')
  .attrs({x: 305, y: 220, 'class': 'cm-header', 'text-anchor': 'middle'});
var tnText2 = svg2.append('text').text('TN')
  .attrs({x: 495, y: 220, 'class': 'cm-header', 'text-anchor': 'middle'});
var actPosTot2 = svg2.append('text').text('Actual Pos.')
  .attrs({x: 305, y: 300, 'class': 'cm-header', 'text-anchor': 'middle'});
var actNegTot2 = svg2.append('text').text('Actual Neg.')
  .attrs({x: 490, y: 300, 'class': 'cm-header', 'text-anchor': 'middle'});
var predPosTot2 = svg2.append('text').text('Pred. Pos.')
  .attrs({x: 680, y: 140, 'class': 'cm-header', 'text-anchor': 'middle'});
var predNegTot2 = svg2.append('text').text('Pred. Neg.')
  .attrs({x: 680, y: 220, 'class': 'cm-header', 'text-anchor': 'middle'});
var tot2 = svg2.append('text').text('Total')
  .attrs({x: 680, y: 300, 'class': 'cm-header', 'text-anchor': 'middle'});


var tpColor = ['#DAB239', '#54BD9F', '#DAB239', '#DAB239', '#54BD9F', '#54BD9F', '#54BD9F'];
var fnColor = ['#54BD9F', '#54BD9F', '#54BD9F', '#54BD9F', '#DAB239', '#54BD9F', '#54BD9F'];
var fpColor = ['#54BD9F', '#54BD9F', '#54BD9F', '#54BD9F', '#2D3258', '#54BD9F', '#54BD9F'];
var tnColor = ['#DAB239', '#54BD9F', '#54BD9F', '#54BD9F', '#54BD9F', '#54BD9F', '#54BD9F'];
var actPosColor = ['#22949F', '#22949F', '#2D3258', '#22949F', '#22949F', '#22949F', '#22949F'];
var predPosColor = ['#22949F', '#DAB239', '#22949F', '#2D3258', '#22949F', '#22949F', '#22949F'];
var totColor = ['#2D3258', '#2D3258', '#22949F', '#22949F', '#22949F', '#22949F', '#22949F'];
var gs2 = d3.graphScroll()
    .container(d3.select('.container-3'))
    .graph(d3.selectAll('container-3 #graph3'))
    .eventId('uniqueId3')  // namespace for scroll and resize events
    .sections(d3.selectAll('.container-3 #sections > div'))
    // .offset(innerWidth < 900 ? innerHeight - 30 : 200)
    .on('active', function(k) {
      grid2[1][1].attr('fill', tpColor[k]);
      grid2[1][2].attr('fill', fnColor[k]);
      grid2[2][1].attr('fill', fpColor[k]);
      grid2[2][2].attr('fill', tnColor[k]);
      grid2[3][1].attr('fill', predPosColor[k]);
      grid2[1][3].attr('fill', actPosColor[k]);
      grid2[3][3].attr('fill', totColor[k]);
});
//=============================================================================
//                        STICKY 4
//=============================================================================
var svg3 = d3.select('#graph4').html('')
  .append('svg')
  .attrs({width: 800, height: 700});

var grid3 = [];
x_base = 20;
y_base = 20;
for(i = 0; i < 4; i++) {
  grid3[i] = [];
  for(j = 0; j < 4; j++) {
    grid3[i][j] = svg3.append('rect')
      .attrs({x: x_base+(i*190), y: y_base+(j*80), width: 190, height: 80})
      .style('stroke', '#080E28')
      .style('stroke-width', 2);
    if (i == 0 || j == 0) {
      grid3[i][j].attr('fill', '#2E4B77');
    } else if (i == 3 || j == 3) {
      grid3[i][j].attr('fill', '#22949F');
    } else {
      grid3[i][j].attr('fill', '#54BD9F');
    }
  }
}
var text = svg3.append('text').text('Shoe Brand: Nike')
    .attrs({x:20, y:15, 'font-size':20});
var text = svg3.append('text').text('Shoe Brand: Adidas')
    .attrs({x:20, y:365, 'font-size':20});

var grid4 = [];
x_base = 20;
y_base = 370;
for(i = 0; i < 4; i++) {
  grid4[i] = [];
  for(j = 0; j < 4; j++) {
    grid4[i][j] = svg3.append('rect')
      .attrs({x: x_base+(i*190), y: y_base+(j*80), width: 190, height: 80})
      .style('stroke', '#080E28')
      .style('stroke-width', 2);
    if (i == 0 || j == 0) {
      grid4[i][j].attr('fill', '#2E4B77');
    } else if (i == 3 || j == 3) {
      grid4[i][j].attr('fill', '#22949F');
    } else {
      grid4[i][j].attr('fill', '#54BD9F');
    }
  }
}

var line = svg3.append('line')
  .attrs({x1:20, y1:20, x2:210, y2:100})
  .style('stroke', '#080E28')
  .style('stroke-width', 2);
var text = svg3.append('text').text('Actual')
  .attrs({x: 122, y: 52, 'class': 'cm-header'});
var text = svg3.append('text').text('Predicted')
  .attrs({x: 21, y: 95, 'class': 'cm-header'});
var text = svg3.append('text').text('Positive')
  .attrs({x: 255, y: 72, 'class': 'cm-header'});
var text = svg3.append('text').text('Negative')
  .attrs({x: 435, y: 72, 'class': 'cm-header'});
var text = svg3.append('text').text('Positive')
  .attrs({x: 60, y: 150, 'class': 'cm-header'});
var text = svg3.append('text').text('Negative')
  .attrs({x: 50, y: 230, 'class': 'cm-header'});
var tpText31 = svg3.append('text')
  .attrs({x: 305, y: 150, 'class': 'cm-header', 'text-anchor': 'middle'});
var fpText31 = svg3.append('text')
  .attrs({x: 495, y: 150, 'class': 'cm-header', 'text-anchor': 'middle'});
var fnText31 = svg3.append('text')
  .attrs({x: 305, y: 230, 'class': 'cm-header', 'text-anchor': 'middle'});
var tnText31 = svg3.append('text')
  .attrs({x: 495, y: 230, 'class': 'cm-header', 'text-anchor': 'middle'});
var actPosTot31 = svg3.append('text')
  .attrs({x: 305, y: 310, 'class': 'cm-header', 'text-anchor': 'middle'});
var actNegTot31 = svg3.append('text')
  .attrs({x: 490, y: 310, 'class': 'cm-header', 'text-anchor': 'middle'});
var predPosTot31 = svg3.append('text')
  .attrs({x: 680, y: 150, 'class': 'cm-header', 'text-anchor': 'middle'});
var predNegTot31 = svg3.append('text')
  .attrs({x: 680, y: 230, 'class': 'cm-header', 'text-anchor': 'middle'});
var tot31 = svg3.append('text').text('N=500')
  .attrs({x: 680, y: 310, 'class': 'cm-header', 'text-anchor': 'middle'});

var line = svg3.append('line')
  .attrs({x1:20, y1:370, x2:210, y2:450})
  .style('stroke', '#080E28')
  .style('stroke-width', 2);
var text = svg3.append('text').text('Actual')
  .attrs({x: 122, y: 402, 'class': 'cm-header'});
var text = svg3.append('text').text('Predicted')
  .attrs({x: 21, y: 445, 'class': 'cm-header'});
var text = svg3.append('text').text('Positive')
  .attrs({x: 255, y: 422, 'class': 'cm-header'});
var text = svg3.append('text').text('Negative')
  .attrs({x: 435, y: 422, 'class': 'cm-header'});
var text = svg3.append('text').text('Positive')
  .attrs({x: 60, y: 500, 'class': 'cm-header'});
var text = svg3.append('text').text('Negative')
  .attrs({x: 50, y: 580, 'class': 'cm-header'});
var tpText32 = svg3.append('text')
  .attrs({x: 305, y: 500, 'class': 'cm-header', 'text-anchor': 'middle'});
var fpText32 = svg3.append('text')
  .attrs({x: 495, y: 500, 'class': 'cm-header', 'text-anchor': 'middle'});
var fnText32 = svg3.append('text')
  .attrs({x: 305, y: 580, 'class': 'cm-header', 'text-anchor': 'middle'});
var tnText32 = svg3.append('text')
  .attrs({x: 495, y: 580, 'class': 'cm-header', 'text-anchor': 'middle'});
var actPosTot32 = svg3.append('text')
  .attrs({x: 305, y: 660, 'class': 'cm-header', 'text-anchor': 'middle'});
var actNegTot32 = svg3.append('text')
  .attrs({x: 490, y: 660, 'class': 'cm-header', 'text-anchor': 'middle'});
var predPosTot32 = svg3.append('text')
  .attrs({x: 680, y: 500, 'class': 'cm-header', 'text-anchor': 'middle'});
var predNegTot32 = svg3.append('text')
  .attrs({x: 680, y: 580, 'class': 'cm-header', 'text-anchor': 'middle'});
var tot32 = svg3.append('text').text('N=200')
  .attrs({x: 680, y: 660, 'class': 'cm-header', 'text-anchor': 'middle'});

var tp31 = ["", "160", "160", "160", "160", "160"];
var fn31 = ["", "240", "240", "240", "240", "240"];
var fp31 = ["", "40", "40", "40", "40", "40"];
var tn31 = ["", "60", "60", "60", "60", "60"];
var actPos31 = ["", "400", "400", "400", "400", "400"];
var actNeg31 = ["", "100", "100", "100", "100", "100"];
var predPos31 = ["", "200", "200", "200", "200", "200"];
var predNeg31 = ["", "300", "300", "300", "300", "300"];

var tp32 = ["", "64", "64", "40", "40", "40"];
var fn32 = ["", "96", "96", "60", "60", "60"];
var fp32 = ["", "16", "16", "40", "40", "40"];
var tn32 = ["", "24", "24", "60", "60", "60"];
var actPos32 = ["", "160", "160", "100", "100", "100"];
var actNeg32 = ["", "40", "40", "100", "100", "100"];
var predPos32 = ["", "80", "80", "80", "80", "80"];
var predNeg32 = ["", "120", "120", "120", "120", "120"];

var tpC3 = ['#54BD9F', '#DAB239', '#DAB239', '#DAB239', '#DAB239', '#54BD9F'];
var aPosC3 = ['#22949F', '#2D3258', '#22949F', '#2D3258', '#22949F', '#22949F'];
var pPosC3 = ['#22949F', '#22949F', '#2D3258', '#22949F', '#2D3258', '#22949F'];

var gs3 = d3.graphScroll()
    .container(d3.select('.container-4'))
    .graph(d3.selectAll('container-4 #graph4'))
    .eventId('uniqueId4')  // namespace for scroll and resize events
    .sections(d3.selectAll('.container-4 #sections > div'))
    // .offset(innerWidth < 900 ? innerHeight - 30 : 200)
    .on('active', function(k) {
      tpText31.text(tp31[k]);
      tnText31.text(tn31[k]);
      fpText31.text(fp31[k]);
      fnText31.text(fn31[k]);
      actPosTot31.text(actPos31[k]);
      actNegTot31.text(actNeg31[k]);
      predPosTot31.text(predPos31[k]);
      predNegTot31.text(predNeg31[k]);

      tpText32.text(tp32[k]);
      tnText32.text(tn32[k]);
      fpText32.text(fp32[k]);
      fnText32.text(fn32[k]);
      actPosTot32.text(actPos32[k]);
      actNegTot32.text(actNeg32[k]);
      predPosTot32.text(predPos32[k]);
      predNegTot32.text(predNeg32[k]);

      grid3[1][1].attr('fill', tpC3[k]);
      grid4[1][1].attr('fill', tpC3[k]);
      grid3[1][3].attr('fill', aPosC3[k]);
      grid4[1][3].attr('fill', aPosC3[k]);
      grid3[3][1].attr('fill', pPosC3[k]);
      grid4[3][1].attr('fill', pPosC3[k]);
});
