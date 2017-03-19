// demo.js
//
// Adapted by Kai Chang and Rich Morin from http://bl.ocks.org/1653763


window.onload = function() {

  // Set up some objects for the session.

  proj = {
    'albers':     d3.geo.albers()  .scale( 50).translate([180, 220]),
    'mercator':   d3.geo.mercator().scale(280).translate([180, 140]),

    'ortho':
      d3.geo.azimuthal()
        .scale(140)
        .origin([-71.03, 0])
        .mode('orthographic')
        .translate([600, 160]),

    'stereo':
      d3.geo.azimuthal()
        .scale(80)
        .origin([-71.03, 0])
        .mode('stereographic')
        .translate([200, 180])
  };

  function pf(key) { return function() { return key; }; }

  attrs = {};
  for (var key in proj) {
    attrs[key] = { r: 1,  transform: pf(key) };
  }

  var connections,
      delay   = 1500,
      drawn   = {},
      h       = 320,
      w       = 780;

  var svg = d3.select('#chart').append('svg:svg')
    .attr('width',  w)
    .attr('height', h);

  var points = [];
  for (var lon = -180; lon < 180; lon += 10) {
    for (var lat = -90; lat < 90; lat += 10) { points.push([lon, lat]); }
  }

  todo = { 'left': 'albers',  'right': 'ortho' };

  // Set up some functions.

  var line = function(d) {
    return  'M' + proj[ todo['left' ] ](d).join(' ') +
            'L' + proj[ todo['right'] ](d).join(' ') +  'z';
  };


  var set_attrs = function(object, hash) {
    for (var key in hash) { object.attr(key, hash[key]); }
  };


  var setup = function() {

    attrs_connect = { 'class': 'connect',  'd': line };

    for (var side in todo) {
      item          = todo[side];
      circle_patt   = 'circle.' + side;

      drawn[side]   = svg.selectAll(circle_patt)
                        .data(points).enter()
                        .append('svg:circle')
                        .call(set_attrs, attrs[item]);
    }

    connections = svg.selectAll('path.connect')
      .data(points).enter()
      .append('svg:path')
      .call(set_attrs, attrs_connect);


    var do_dots = function() {
      for (var side in todo) {
        item  = todo[side];

        var transform = function(d) {
          return 'translate(' + proj[item](d).join(',') + ')';
        };

        drawn[side].attr('transform', transform);
      }
    };


    var mouse_move = function() {
      var x = ((d3.event.pageX / w) * 360) - 180;
      var y = ((d3.event.pageY / h) * 360) - 180;

      proj[ todo['right'] ].origin([x, y]);
      do_dots();
      connections.attr('d', line);
    };

    svg.on('mousemove', mouse_move);

    proj[ todo['right'] ].origin([0, 0]);
    do_dots();
  };


  var transition_left = function() {
    var item = todo['left'];

    var transform = function(d) {
      return 'translate(' + proj[item](d).join(',') + ')';
    };

    drawn['left']
      .transition().duration(delay)
      .attr('transform', transform);

    connections
      .transition().duration(delay)
      .attr('d', line);
  };


  var change = function() {
    todo['left'] = this.value;
    transition_left();
  };

  $('select').bind('change', change);

  setup();
};