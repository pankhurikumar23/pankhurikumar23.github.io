// #A8A7A7 #CC527A #E8175D #474747 #363636
// #DAB239 #54BD9F #22949F #2E4B77 #2D3258 #080E28
//=============================================================================
//                        STICKY 1
//=============================================================================
var gs = d3.graphScroll()
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
	.attrs({width: 800, height: 340})

var grid = []
x_base = 20;
y_base = 10;
for(i = 0; i < 4; i++) {
  grid[i] = []
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

var actTots = ["", "", "", "", "", "", "50", "50"];
var predTots = ["", "", "", "", "", "", "?", "?"];
var tots = ["", "", "", "", "", "", "N=100", "N=100"];
var actTotColor = ["#22949F", '#DAB239', "#22949F", '#22949F', '#22949F', '#22949F', '#22949F', '#22949F']
var predTotColor = ["#22949F", "#22949F", '#DAB239', "#22949F", "#22949F", "#22949F", "#22949F", "#22949F"]
var tp = ["True Positive", "True Positive", "True Positive", "TP", "TP", "TP", "TP", "TP"];
var fp = ["False Positive", "False Positive", "False Positive", "FP", "FP", "FP", "FP", "FP"];
var fn = ["False Negative", "False Negative", "False Negative", "FN", "FN", "FN", "FN", "FN"];
var tn = ["True Negative", "True Negative", "True Negative", "TN", "TN", "TN", "TN", "TN"];
var gs2 = d3.graphScroll()
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
  .attrs({width: 800, height: 340})

var grid2 = []
x_base = 20;
y_base = 10;
for(i = 0; i < 4; i++) {
  grid2[i] = []
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
var tot2 = svg2.append('text').text('N=100')
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