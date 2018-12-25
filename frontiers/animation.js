
var gs = d3.graphScroll()
    .container(d3.select('.container-1'))
    .graph(d3.selectAll('container-1 #graph1'))
    .eventId('uniqueId1')  // namespace for scroll and resize events
    .sections(d3.selectAll('.container-1 #sections > div'))
    // .offset(innerWidth < 900 ? innerHeight - 30 : 200)
    .on('active', function(i){
})


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
    .style('stroke', 'black')
    .style('stroke-width', 2);
    if (i == 0 || j == 0) {
      grid[i][j].attr('fill', '#BDB8B8');
    } else {
      grid[i][j].attr('fill', 'pink');
    }
  }
}

//add class to text for styling
var line = svg.append('line')
  .attrs({x1:20, y1:10, x2:210, y2:90})
  .style('stroke', 'black')
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
  .attrs({x: 220, y: 140, 'class': 'cm-header', 'text-anchor': 'middle'});
var fpText = svg.append('text')
  .attrs({x: 405, y: 140, 'class': 'cm-header', 'text-anchor': 'middle'});
var fnText = svg.append('text')
  .attrs({x: 210, y: 220, 'class': 'cm-header', 'text-anchor': 'middle'});
var tnText = svg.append('text')
  .attrs({x: 402, y: 220, 'class': 'cm-header', 'text-anchor': 'middle'});
var actPosTot = svg.append('text')
  .attrs({x: 305, y: 300, 'class': 'cm-header', 'text-anchor': 'middle'});
var actNegTot = svg.append('text')
  .attrs({x: 490, y: 300, 'class': 'cm-header', 'text-anchor': 'middle'});
var tot = svg.append('text')
  .attrs({x: 680, y: 300, 'class': 'cm-header', 'text-anchor': 'middle'});

var actTots = ["", "", "50", "50"];
var tots = ["", "", "N=100", "N=100"];
var totColor = ['pink', 'pink', '#DD9090', '#DD9090'];
var tp = ["True Positive", "True Positive", "TP", "TP"];
var fp = ["False Positive", "False Positive", "FP", "FP"];
var fn = ["False Negative", "False Negative", "FN", "FN"];
var tn = ["True Negative", "True Negative", "TN", "TN"];
var gs2 = d3.graphScroll()
    .container(d3.select('.container-2'))
    .graph(d3.selectAll('container-2 #graph2'))
    .eventId('uniqueId2')  // namespace for scroll and resize events
    .sections(d3.selectAll('.container-2 #sections > div'))
    // .offset(innerWidth < 900 ? innerHeight - 30 : 200)
    .on('active', function(k){
      tpText.text(tp[k])
        .attrs({x:305, y:140});
      fpText.text(fp[k])
        .attrs({x:495, y:140});
      fnText.text(fn[k])
        .attrs({x:305, y:220});
      tnText.text(tn[k])
        .attrs({x:495, y:220});
      actPosTot.text(actTots[k]);
      actNegTot.text(actTots[k]);
      tot.text(tots[k]);
      grid[3][1].attr('fill', totColor[k])
      grid[3][2].attr('fill', totColor[k])
      grid[3][3].attr('fill', totColor[k])
      grid[1][3].attr('fill', totColor[k])
      grid[2][3].attr('fill', totColor[k]);
})
