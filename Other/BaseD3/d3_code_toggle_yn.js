(function(global) {
    'use strict';

    // convenience variables
    var defaultCol = '#eee',
        activeCol = '#7AC143';

    global.noYesBtns = function(_selection) {

        global.noYesBtns = noYesBtns;

        var instance = {};

        var dispatch = d3.dispatch('_click');

        // some default values
        var nTxt = 'no', // text for NO button
            yTxt = 'yes', // text for YES button
            nBg = defaultCol, // unselected background for NO
            yBg = defaultCol, // unselected bg for YES
            nBgActive = activeCol, // selected bg for NO
            yBgActive = activeCol; // selected bg for YES

        instance.render = function() {

            var container = d3.select(_selection);

            var btn = function(txt, bg, bgActive) {
                container.append('button')
                    .attr({
                        class: 'ny-btn ny-btn-unselected'
                    })
                    .style({
                        background: bg
                    })
                    .text(txt)
                    .on('click', function () {
                        d3.select(_selection).selectAll('.ny-btn')
                            .style({
                                background: bg,
                                opacity: 0.2
                            })
                            .classed('ny-btn-unselected', true)
                            .classed('ny-btn-selected', false);

                        d3.select(this)
                            .style({
                                background: activeCol,
                                opacity: 1
                            })
                            .classed('ny-btn-unselected', false)
                            .classed('ny-btn-selected', true);

                        dispatch._click.apply(this, arguments);
                    });
            };

            var n = btn(nTxt, nBg, nBgActive);
            var y = btn(yTxt, yBg, yBgActive);

            return instance;
        };

        instance.nBg = function(value) {
            if (!arguments.length) return nBg;
            nBg = value;
            return this;
        };
        instance.yBg = function(value) {
            if (!arguments.length) return yBg;
            yBg = value;
            return this;
        };
        instance.nBgActive = function(value) {
            if (!arguments.length) return nBgActive;
            nBgActive = value;
            return this;
        };
        instance.yBgActive = function(value) {
            if (!arguments.length) return yBgActive;
            yBgActive = value;
            return this;
        };
        instance.nTxt = function(value) {
            if (!arguments.length) return nTxt;
            nTxt = value;
            return this;
        };
        instance.yTxt = function(value) {
            if (!arguments.length) return yTxt;
            yTxt = value;
            return this;
        };

        d3.rebind(instance, dispatch, 'on');
        return instance;
    };

}(window));
