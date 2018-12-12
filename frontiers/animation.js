

// var svg = d3.select('#graph').html('')
// 	.append('svg')
// 	.attrs({width: width, height: height})

// var circle = svg.append('circle')
// 		.attrs({cx: 0, cy: 0, r: r})

// var table = d3.select('.container-2')

var colors = ['orange', 'purple', 'steelblue', 'pink', 'black']
var gs = d3.graphScroll()
    .container(d3.select('.container-1'))
    .graph(d3.selectAll('container-1 #graph'))
    .eventId('uniqueId1')  // namespace for scroll and resize events
    .sections(d3.selectAll('.container-1 #sections > div'))
    // .offset(innerWidth < 900 ? innerHeight - 30 : 200)
    .on('active', function(i){
})

var gs2 = d3.graphScroll()
  	.container(d3.select('.container-2'))
  	.graph(d3.selectAll('.container-2 #graph'))
  	.eventId('uniqueId2')  // namespace for scroll and resize events
  	.sections(d3.selectAll('.container-2 #sections > div'))
  	.on('active', function(i){
  })

d3.select('#source')
  .styles({'margin-bottom': window.innerHeight - 450 + 'px', padding: '100px'})


render()
d3.select(window).on('resize', render)
