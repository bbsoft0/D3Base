'use strict';

var w = window.innerWidth;
var h = window.innerHeight;

// store generated data
var data = [];

var svg = d3.select('body').append('svg').attr('width', w).attr('height', h);

var circle = svg.selectAll('circle');

var force = d3.layout.force().size([w, h]).on('tick', function () {
    circle.attr('cx', function (d) {
        return d.x;
    }).attr('cy', function (d) {
        return d.y;
    });
});

var render = function render(data) {
    circle = circle.data(data, function (d) {
        return d.id;
    });

    circle.enter().append('circle').attr('fill', function (d) {
        return d.color;
    }).attr('r', 12).call(force.drag);

    circle.exit().transition().attr('r', 0).remove();

    force.nodes(data).start();
};

// generate some data
function update() {
    var n = 0;
    var c = ['red', 'green', 'blue'];
    return function () {
        data.push({
            id: n,
            color: c[n % 3]
        });
        console.log(data);
        render(data);
        n++;
    };
}
// update every second
// note: calling as update()(); (higher order function)
setInterval(update(), 1000);
