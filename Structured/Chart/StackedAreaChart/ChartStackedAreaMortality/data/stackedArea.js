// This module implements the stacked area visualization.
//
// Curran Kelleher 2/18/2014
define(['getShortName'], function (getShortName) {
  var width,
      height,
      g,
      data,
      x = d3.time.scale(),
      y = d3.scale.linear(),
      color = d3.scale.ordinal()
        // Colors hand-picked from http://www.w3schools.com/tags/ref_colorpicker.asp
        .range(['#006699','#00CC99','#009933','#CC6699','#99CC00','#CC9900','#CC3300','#FFCC00','#FF0000','#990033','#FF6699','#CC3399','#9900FF','#6666FF','#3333CC','#66CCFF','#0000FF','#00FFFF','#99FFCC','#CCFF99','#FFCC99','#FF99CC','#CC99FF','#CCCCFF','#333300']),
      xAxis = d3.svg.axis()
        .scale(x)
        .orient('bottom'),
      xAxisG,
      area = d3.svg.area()
        .x(function(d) { return x(d.date); })
        .y0(function(d) { return y(d.y0); })
        .y1(function(d) { return y(d.y0 + d.y); }),
      stack = d3.layout.stack()
        .values(function(d) { return d.values; })
        .offset('expand');

  // This function should be called once to set up the visualization.
  function init(svg, outerWidth, outerHeight, margin, _data){
    data = _data;

    // Parse years into Date objects for use with D3 time scale.
    data.forEach(function(d) {
      d.date = new Date(d.year, 0);
    });

    width = outerWidth - margin.left - margin.right;
    height = outerHeight - margin.top - margin.bottom;
    x.range([0, width]);
    y.range([height, 0]);
    g = svg.append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
    xAxisG = g.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')');
  }

  function update(names){
    var causes,
        namesIndex = {};

    x.domain(d3.extent(data, function(d) { return d.date; }));

    names.forEach(function(name){
      namesIndex[name] = true;
    });

    // Transform the data for D3's stack layout.
    // see https://github.com/mbostock/d3/wiki/Stack-Layout
    causes = names.map(function(name) {
      return {
        name: name,
        values: data.map(function(d) {
          return {date: d.date, y: clean(d[name])};
        })
      };
    })

    // Sort the layers by the most recent value.
    causes = _.sortBy(causes, function(cause) {
      return cause.values[cause.values.length - 1].y;
    });

    // Set the color domain so each color is a cause of death.
    // Use sorted values.
    color.domain(_.pluck(causes, 'name').reverse());

    // Add the stacked areas.
    var cause = g.selectAll('.cause')
      .data(stack(causes));

    cause.enter().append('path')
      .attr('class', 'cause');

    cause
      .attr('d', function(d) { return area(d.values); })
      .style('fill', function(d) { return color(d.name); });

    cause.exit().remove();

    // Add the legend.
    // See http://bl.ocks.org/mbostock/3888852
    // Use sorted causes for legend.
    var legend = g.selectAll('.legend')
      .data(causes.map(function(d){ return d.name; }).reverse());

    var legendEnter = legend.enter().append('g')
      .attr('class', 'legend');

    legend.attr('transform', function(d, i) {
      return 'translate(' + (width + 3) + ',' + i * 20 + ')'; 
    });

    // TODO remove hard code size.
    legendEnter.append('rect')
      .attr('width', 18)
      .attr('height', 18);
    legend.select('rect')
      .style('fill', color);

    legendEnter.append('text')
      .attr('x', 20)
      .attr('y', 10)
      .attr('dy', '.35em');
    legend.select('text')
      .text(getShortName);

    legend.exit().remove();

    // Add the X axis (years).
    xAxisG.call(xAxis);
  }

  // Replace missing data with 0 and parse strings into numbers.
  function clean(value){
    return value === '~' ? 0 : parseFloat(value);
  }

  return {
    init: init,
    update: update
  };
});