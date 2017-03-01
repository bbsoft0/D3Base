
(function() {
  window.onload = function() {
    if (Modernizr.touch) {
      var touchHandle = function(e){ e.preventDefault()}
      window.addEventListener("touchstart", touchHandle)
      window.addEventListener("touchmove", touchHandle)
      window.addEventListener("touchend", touchHandle)
      document.addEventListener("touchstart", touchHandle)
      document.addEventListener("touchmove", touchHandle)
      document.addEventListener("touchend", touchHandle)
      d3.selectAll(".touch_click").text("tap")
    }
    
    var circle, clockArc, color, colorblindInterpolation, colorblindSVG, complementary, counter, cp, degs, disabled, end, exercises, footerEl, getColorblindInterpolationValue, initScreen, innerCircle, isColorblind, isSlow, kickoff, launch, matchArc, max, outerCircle, pad, pi, r, scoreDuration, shElements, shadow, shape, shapeMatch, size, square, stager, stages, start, transition, triangle, underCircle, vis, waitSecs, wh, wheel, ww;
    d3.select("#container").style("display", "block");
    isColorblind = false;
    ww = window.innerWidth;
    wh = window.innerHeight;
    max = Math.min(ww, wh);
    color = [];
    size = max / 1.5;
    r = size / 2;
    initScreen = 0;
    scoreDuration = 1000;
    pi = Math.PI;
    disabled = false;
    exercises = 5;
    waitSecs = 3;
    shape = "";
    shapeMatch = "";
    stager = d3.select("#content").append("svg").attr("id", "stage").attr("pointer-events", "none");
    vis = d3.select("#stage").style("margin-top", "-" + r + "px").style("margin-left", "-" + r + "px").style("width", "" + (r * 2) + "px").style("height", "" + (r * 2) + "px");
    underCircle = vis.append("circle").attr("cx", r).attr("cy", r).attr("r", r / 3).style("fill", "white").attr("stroke-width", 0);
    outerCircle = vis.append("g");
    outerCircle.attr("transform", "translate(" + r + ", " + r + ") scale(-1,1)").attr("id", "match");
    vis.append("g").attr("pointer-events", "visible").attr("transform", "translate(" + r + ", " + r + ") scale(-1,1)").attr("id", "timer");
    var popper_func = function() {
      var popper;
      popper = this.className.split(" ")[0];
      d3.select("body").classed("blurred", true);
      d3.selectAll(".section").style("display", "none");
      return d3.select("." + popper + ".section").style("display", "block");
    }
    var popup_func = function() {
      if (d3.event.target.id === "popup" || d3.event.target.className === "close" || d3.event.target.className === "icon" || d3.event.target.className === "cbbutton") {
        if (typeof cbwheel !== "undefined" && cbwheel !== null) {
          cbwheel.onchange = function(clr) {};
        }
        return d3.select("body").classed("blurred", false);
      }
    }
    var cbbutton_func = function() {
      isColorblind = true;
      shape = colorblindSVG.append('g').attr('transform', "translate(" + 50 + "," + 60 + ")").append('path').attr('d', function(d, i) {
        return square();
      }).attr("stroke", "#666").attr("fill", "transparent").attr("stroke-width", "5px");
      shapeMatch = colorblindSVG.append('g').attr('transform', "translate(" + 50 + "," + 180 + ")").append('path').attr('d', function(d, i) {
        return square();
      }).attr("fill", "transparent").attr("stroke", "#666").attr("stroke-width", "5px");
      colorblindSVG.append('g').attr('transform', "translate(" + 50 + "," + 10 + ")").append('text').text('target').attr('fill', '#999').attr('text-anchor', "middle");
      colorblindSVG.append('g').attr('transform', "translate(" + 50 + "," + 130 + ")").append('text').text('match').attr('fill', '#999').attr('text-anchor', "middle");
      return launch();
    }
    d3.select("#container").style("width", (size + 380) + "px");
    d3.selectAll(".button")
      .on("click", popper_func)
      .on("touchend", popper_func);
    d3.select("#popup")
      .on("click", popup_func)
      .on("touchend", popup_func);
    d3.select(".cbbutton")
      .on("click", cbbutton_func)
      .on("touchend", cbbutton_func);
    square = superformula().type("square").size(3000).segments(50);
    circle = superformula().type("circle").size(3000).segments(50);
    triangle = superformula().type("triangle").size(3000).segments(50);
    colorblindSVG = d3.select("#container").append('svg').attr("class", "colorblind");
    
    getColorblindInterpolationValue = function(degrees) {
      if (degrees <= 120)                   return degrees;
      if (degrees >= 120 && degrees <= 240) return degrees - 120;
      if (degrees >= 240)                   return degrees - 240;
    };
    
    colorblindInterpolation = function(degrees) {
      var morph;
      if (degrees <= 120) {
        morph = {
          "interpolation": d3.interpolate(square(), circle()),
          "degrees": degrees / 120
        };
      }
      if (degrees >= 120 && degrees <= 240) {
        morph = {
          "interpolation": d3.interpolate(circle(), triangle()),
          "degrees": (degrees - 120) / 120
        };
      }
      if (degrees >= 240) {
        morph = {
          "interpolation": d3.interpolate(triangle(), square()),
          "degrees": (degrees - 240) / 120
        };
      }
      return morph;
    };
    stages = [
      {
        name: "hue",
        dimensions: 1,
        duration: 10000,
        selectors: 1,
        separation: 0
      }, {
        name: "saturation",
        dimensions: 2,
        duration: 15000,
        selectors: 1,
        separation: 0
      }, {
        name: "complementary",
        dimensions: 2,
        duration: 15000,
        selectors: 2,
        separation: 3.14
      }, {
        name: "analogous",
        dimensions: 2,
        duration: 15000,
        selectors: 3,
        separation: 0.5
      }, {
        name: "triadic",
        dimensions: 2,
        duration: 15000,
        selectors: 3,
        separation: pi * 2 / 3
      }, {
        name: "tetradic",
        dimensions: 2,
        duration: 15000,
        selectors: 4,
        separation: pi * 2 / 4
      }
    ];
    launch = function() {
      d3.select('aside').style("display", "none");
      d3.selectAll('.title')
        .on('click', null)
        .on('touchend', null);
      d3.selectAll('#footer > div').classed('disabled', true);
      d3.select('body').classed('started', true);
      if (typeof cp !== "undefined" && cp !== null) {
        cp.onchange = function(clr) {};
        d3.selectAll("#shadow div").transition().duration(1000).style('margin-top', "0px").style('margin-left', "0px").style('opacity', "0").call(function() {
          return setTimeout(function() {
            return d3.select("#shadow").remove();
          }, 1000);
        });
        return d3.select("#start").transition().duration(1000).style('opacity', 0).each("end", function() {
          return d3.select("#wheel").transition().duration(500).style('opacity', "0").each("end", function() {
            d3.select("#stage").style("display", "block");
            return transition(stages[initScreen]);
          });
        });
      }
    };
    footerEl = d3.select("#footer").selectAll('div').data(stages).enter().append('div').style("width", 100 / stages.length + "%").attr("class", function(d, i) {
      return d.name;
    });
    var initScreen_func = function() {
      initScreen = d3.select(this).attr("data-screen");
      return launch();
    }
    footerEl.append('div').attr('class', 'title').attr('data-screen', function(d, i) {
      return i;
    }).text(function(d, i) {
      return d.name;
    }).on('click', initScreen_func).on('touchend', initScreen_func);
    footerEl.append('div').attr('class', 'grades');
    wheel = d3.select("#wheel").style("margin-top", "-" + r + "px").style("margin-left", "-" + r + "px").style("width", "" + size + "px").style("height", "" + size + "px");
    d3.select("#start")
      .on("click", launch)
      .on("touchend", launch);
    start = d3.select("#start h1").style("font-size", size / 4 + "px").style("margin-top", size / 4 + "px").style("margin-bottom", 0 + "px").style("line-height", 100 + "%");
    d3.select("#start h4").style("font-size", size / 20 + "px");
    pad = 2 * r / 200;
    innerCircle = r - pad * 20;
    shadow = d3.select("#shadow").style("margin-top", "-" + (r - pad / 2) + "px").style("margin-left", "-" + (r - pad / 2) + "px").style("width", "" + (size - pad) + "px").style("height", "" + (size - pad) + "px");
    d3.select("#start").style("margin-top", "-" + innerCircle + "px").style("margin-left", "-" + innerCircle + "px").style("margin-right", "" + (r + pad - innerCircle) + "px").style("width", "" + (innerCircle * 2 + 1) + "px").style("height", "" + (innerCircle * 2 + 1) + "px");
    degs = 0;
    complementary = 180;
    shElements = d3.range(4).map(function(d, i) {
      d3.select("#s" + (i + 1)).style("width", size - pad + "px").style("height", size - pad + "px").style("margin-top", Math.sin(degs * (3.14 / 180)) * size / 15 + "px").style("margin-left", Math.cos(degs * (3.14 / 180)) * -1 * size / 15 + "px").style("background", "hsla(" + complementary + ", 100%, 50%, 0.3)");
      degs -= 90;
      if (degs < 0) {
        degs += 360;
      }
      complementary = degs - 180;
      if (complementary < 0) {
        complementary = degs + 180;
      }
      return d3.select("#s" + (i + 1)).node();
    });
    clockArc = d3.svg.arc().innerRadius(0).outerRadius(r / 3 - r / 30 + 1).startAngle(function(d) {
      return (d.startAngle - pi * 2) * -1;
    }).endAngle(function(d) {
      return (d.endAngle - pi * 2) * -1;
    });
    matchArc = d3.svg.arc().innerRadius(0).outerRadius(r / 3 + r / 30).startAngle(function(d) {
      return d.startAngle;
    }).endAngle(function(d) {
      return d.endAngle;
    });
    var twitter_func = function() {
      var finaltotalscore, height, left, opts, string, top, url, width;
      d3.event.preventDefault();
      finaltotalscore = d3.select(".closed h1").text();
      string = "text=I got a " + finaltotalscore + "/10 in Color, a color matching game";
      width = 575;
      height = 400;
      left = (ww - width) / 2;
      top = (wh - height) / 2;
      url = "http://color.method.ac";
      opts = 'status=1' + ',width=' + width + ',height=' + height + ',top=' + top + ',left=' + left;
      return window.open("http://twitter.com/share?" + string + "&url=" + url, 'twitter', opts);
    }
    d3.select("#twitter")
      .on("click", twitter_func)
      .on("touchend", twitter_func);
      
    shadow = d3.select("#shadow");
    
    cp = Raphael.colorpicker(0, 0, size, "#fff", "wheel", 1, 1, 0, isColorblind);
    var cbwheel_func = function() {
      var cbmatch, cbwheel;
      if (!d3.select(".cbmatch").node()) {
        cbwheel = Raphael.colorpicker(0, 0, 300, "#fff", "cbwheel", 1, 1, 0, true);
        cbmatch = d3.select("#demo").append("svg").classed("cbmatch", true).append("g").attr("transform", "translate(100,170) scale(2,2)").append("path").attr("id", "cbmatch").attr("d", square()).attr("fill", "transparent").attr("stroke", "#ccc").attr("stroke-width", 5).attr("stroke-linejoin", "round");
      }
      return cbwheel.onchange = function(clr) {
        var morph, rotation;
        color = d3.hsl(clr);
        rotation = color.h;
        morph = colorblindInterpolation(rotation);
        return cbmatch.attr('d', function(d, i) {
          return morph.interpolation(morph.degrees);
        });
      };
    }
    d3.select(".cb.button")
      .on("click.cb", cbwheel_func)
      .on("touchend.cb", cbwheel_func);
    if (Modernizr.testProp("MozTransform") || Modernizr.testProp("msTransform") || Modernizr.touch) isSlow = true;
    
    cp.onchange = function(clr) {
      var Rd, i, _results;
      color = Raphael.rgb2hsl(Raphael.getRGB(clr));
      degs = color.h * 360;
      complementary = degs - 180;
      if (complementary < 0) {
        complementary = degs + 180;
      }
      shadow.style('-webkit-transform', "rotate3d(0, 0, 1, " + degs + "deg)");
      shadow.style('-o-transform', "rotate(" + degs + "deg)");
      shadow.style('-ms-transform', "rotate(" + degs + "deg)");
      shadow.style('transform', "rotate(" + degs + "deg)");
      _results = [];
      for (i = 0; i < 4; i++) {
        Rd = degs * (pi / 180);
        d3.select(shElements[i]).style("background", "hsla(" + complementary + ", 100%, 50%, 0.3)");
        if (isSlow) {
          d3.select(shElements[i]).style("margin", (Math.sin(Rd) * (180 / pi)) / (r / 150) + "px 0 0 " + (Math.cos(Rd) * (180 / pi)) / (r / 150) + "px");
        }
        degs -= 90;
        if (degs < 0) {
          degs += 360;
        }
        complementary = degs - 180;
        _results.push(complementary < 0 ? complementary = degs + 180 : void 0);
      }
      return _results;
    };
    transition = function(stage) {
      d3.select("body").classed('welcome', false);
      start = d3.select("#start");
      wheel = d3.select("#wheel");
      start.on("click", null);
      wheel.on("click", null);
      start.on("touchend", null);
      wheel.on("touchend", null);
      start.style("opacity", "1").select("h1").text(stage.name).style("font-size", Math.max((size / 4) - stage.name.length * size / 90, 15) + "px").style("margin-top", Math.max((size / 4) + stage.name.length * size / 200, 15) + "px");
      d3.select("#wheel").html(" ").style("opacity", 1);
      cp = Raphael.colorpicker(0, 0, size, "#fff", "wheel", stage.selectors, 1, stage.separation, isColorblind);
      start.style("display", "block").classed("pev", true);
      d3.selectAll("#footer > div").classed("current", false);
      d3.select("#footer ." + stage.name).classed("current", true);
      if (stage.name !== "hue") {
        start.select("h4").html("Click to continue");
        start.on("click", function() {
          return counter(stage);
        });
        start.on("touchend", function() {
          return counter(stage);
        });
        wheel.on("click", function() {
          return counter(stage);
        });
        wheel.on("touchend", function() {
          return counter(stage);
        });
        return null;
      } else {
        return counter(stage);
      }
    };
    counter = function(stage) {
      var countdown, wait;
      wait = waitSecs;
      start = d3.select("#start");
      wheel = d3.select("#wheel");
      start.on("click", null);
      wheel.on("click", null);
      start.on("touchend", null);
      wheel.on("touchend", null);
      start = d3.select("#start").style("cursor", "default");
      start.select("h4").html("will start in <span id='countdown'>3<span>");
      return countdown = setInterval(function() {
        wait--;
        if (wait < 0) {
          clearInterval(countdown);
          start.style("display", "none");
          kickoff(stage);
        }
        return d3.select("#countdown").text(wait);
      }, 1000);
    };
    kickoff = function(stage) {
      var again, dataColors, grade, randomColor, randomColors, setTimer, tweenPie;
      grade = function() {
        var distance, score, selectedColor, targetColor;
        clearTimeout(t);
        disabled = true;
        randomColors.shift();
        selectedColor = d3.lab(d3.select("#matchcolor").style("fill"));
        targetColor = d3.lab(d3.select("#clockcolor").style("fill"));
        distance = targetColor.de00(selectedColor);
        if (stage.dimensions === 1) {
          if (distance <= 1) {
            score = "perfect";
          }
          if (distance <= 4 && distance >= 1) {
            score = "very good";
          }
          if (distance <= 8 && distance >= 4) {
            score = "good";
          }
          if (distance <= 15 && distance >= 8) {
            score = "average";
          }
          if (distance >= 15) {
            score = "poor";
          }
        } else {
          if (distance <= 2) {
            score = "perfect";
          }
          if (distance <= 6 && distance >= 2) {
            score = "very good";
          }
          if (distance <= 12 && distance >= 6) {
            score = "good";
          }
          if (distance <= 18 && distance >= 12) {
            score = "average";
          }
          if (distance >= 18) {
            score = "poor";
          }
        }
        setTimer();
        d3.select("body").append('div').attr('class', 'textscore').append('span').text(score).transition().delay(scoreDuration).duration(scoreDuration / 4).style('opacity', '0').remove();
        d3.select('#footer .current .grades').append('div').attr("class", "grade").style("background", d3.hsl((Math.abs(Math.min(15, distance) - 15) * 10) / 1.1, 1, 0.4).toString());
        wheel.on("click", null);
        wheel.on("touchend", null);
        return setTimeout(function() {
          again();
          return wheel.on("click", grade);
        }, scoreDuration + scoreDuration / 4);
      };
      start.style("cursor", "pointer").on("click", null);
      waitSecs = 3;
      wheel.on("click", grade).on("touchend", grade);
      stager.on("click", grade).on("touchend", grade);
      cp.remove();
      d3.select("#wheel").html(" ");
      cp = Raphael.colorpicker(0, 0, size, "#fff", "wheel", stage.selectors, stage.dimensions, stage.separation, isColorblind);
      switch (stage.dimensions) {
        case 1:
          randomColor = function() {
            return Raphael.hsl(Math.random(), 1, 0.5).toString();
          };
          break;
        case 2:
          randomColor = function() {
            return Raphael.hsl(Math.random(), Math.random() * .7 + .3, 0.5).toString();
          };
          break;
        case 3:
          randomColor = function() {
            return Raphael.hsl(Math.random(), Math.random() * .7 + .3, Math.random() * .4 + .1).toString();
          };
      }
      randomColors = d3.range(exercises).map(function(d, i) {
        return randomColor();
      });
      setTimer = function() {
        var dataColors, full, paths;
        dataColors = d3.range(stage.selectors).map(function(d, i) {
          if ((pi * 2) / (i * stage.selectors) === Infinity) {
            start = 0;
          } else {
            start = (pi * 2) / stage.selectors * i;
          }
          return {
            startAngle: start,
            endAngle: (pi * 2) / stage.selectors * (i + 1),
            separation: stage.separation
          };
        });
        full = dataColors;
        d3.select("#match").selectAll("path").data(full).attr("d", function(d, i) {
          return matchArc(d);
        }).enter().append("path").style("fill", d3.hsl(Math.random(), 1, 0.5).toString()).attr("d", function(d, i) {
          return matchArc(d);
        }).attr("stroke-width", 0);
        d3.selectAll("#timer path").data(full).transition().attr("d", function(d, i) {
          return clockArc(d);
        }).duration(1).remove();
        return paths = d3.select("#timer").selectAll("path").data(full).enter().append("path").attr('id', function(d, i) {
          if (i === 0) {
            return 'clockcolor';
          }
        }).style("fill", function(d, i) {
          color = d3.hsl(randomColors[0]);
          color.h += (d.separation * i) * (180 / 3.14);
          if (color.h > 1) {
            color.h -= 1;
          }
          return color.toString();
        }).attr("d", function(d, i) {
          return clockArc(d);
        });
      };
      dataColors = d3.range(stage.selectors).map(function(d, i) {
        if ((pi * 2) / (i * stage.selectors) === Infinity) {
          start = 0;
        } else {
          start = (pi * 2) / (i * stage.selectors);
        }
        return {
          startAngle: (pi * 2) / (i * stage.selectors),
          endAngle: (pi * 2) / (stage.selectors - i),
          separation: stage.separation
        };
      });
      again = function() {
        var average, degrees, hsl, morph, next, stageScore;
        dataColors = d3.range(stage.selectors).map(function(d, i) {
          if ((pi * 2) / (i * stage.selectors) === Infinity) {
            start = 0;
          } else {
            start = (pi * 2) / stage.selectors * i;
          }
          return {
            startAngle: start,
            endAngle: (pi * 2) / stage.selectors * (i + 1),
            separation: stage.separation
          };
        });
        disabled = false;
        if (randomColors[0]) {
          setTimer();
          d3.selectAll("#timer path").style("fill", function(d, i) {
            color = d3.hsl(randomColors[0]);
            color.h += (d.separation * i) * (180 / 3.14);
            if (color.h > 1) {
              color.h -= 1;
            }
            return color.toString();
          }).transition().ease("linear").duration(stage.duration).attrTween("d", tweenPie);
          if (isColorblind) {
            d3.select(".colorblind").style("display", "block");
            hsl = d3.hsl(d3.select("#clockcolor").style('fill'));
            degrees = hsl.h;
            if (stage.selectors === 3) {
              degrees += stage.separation * (180 / 3.1416);
            }
            if (stage.selectors > 3) {
              degrees += (stage.separation * 2) * (180 / 3.1416);
            }
            if (degrees > 360) {
              degrees -= 360;
            }
            if (degrees < 0) {
              degrees += 360;
            }
            morph = colorblindInterpolation(degrees);
            shape.attr('d', function() {
              return morph.interpolation(morph.degrees);
            }).attr("stroke-width", hsl.s * 10);
          }
          return window.t = setTimeout(grade, stage.duration);
        } else {
          stageScore = 0;
          d3.selectAll("#footer .current .grade").map(function(d, i) {
            return stageScore += d3.hsl(d3.select(this).style('background-color')).h;
          });
          average = stageScore / exercises;
          d3.select("#footer .current").transition().duration(1000).style("border-top-color", d3.hsl(average, 1, 0.4).toString());
          d3.select("#footer .current .title").transition().duration(1000).style("color", d3.hsl(average, 1, 0.4).darker().toString());
          next = stages.indexOf(stage) + 1;
          if (stages[next]) {
            return transition(stages[next]);
          } else {
            return end();
          }
        }
      };
      tweenPie = function(b) {
        var i;
        if (b.startAngle === Infinity) {
          b.startAngle = 0;
        }
        i = d3.interpolate(b, {
          startAngle: b.startAngle,
          endAngle: b.startAngle
        });
        return function(t) {
          return clockArc(i(t));
        };
      };
      again(10000);
      return cp.onchange = function(clr) {
        var morph, rotation;
        if (!disabled) {
          color = d3.hsl(clr);
          rotation = color.h;
          if (isColorblind) {
            morph = colorblindInterpolation(rotation);
            shapeMatch.attr('d', function(d, i) {
              return morph.interpolation(morph.degrees);
            }).attr("stroke-width", color.s * 10);
          }
          return outerCircle.selectAll("path").attr('id', function(d, i) {
            if (i === stage.selectors - 1) {
              return "matchcolor";
            }
          }).style("fill", function(d, i) {
            if (i === 0) {
              color.h += (d.separation * 1) * (180 / 3.1416);
            }
            if (i > 0) {
              color.h -= (d.separation * 1) * (180 / 3.1416);
            }
            if (color.h > 360) {
              color.h -= 360;
            }
            if (color.h < 0) {
              color.h += 360;
            }
            return color.toString();
          });
        }
      };
    };
    return end = function() {
      cp.onchange = function(clr) {};
      d3.select("#wheel").on("click", null).on("touchstart", null);
      d3.select(".closed").transition().delay(2000).duration(1000).style("height", wh - 245 + "px").each("end", function() {
        var average, closed, count;
        average = 0;
        d3.selectAll(".score").each(function() {
          return average += parseInt(d3.select(this).attr("data-score"));
        });
        average = average / (d3.selectAll(".score")[0].length || 1);
        closed = d3.select(this).select("h1");
        count = 0;
        return d3.timer(function() {
          count++;
          if (count < average * 20) {
            closed.text((count / 20).toFixed(1));
            return false;
          } else {
            return true;
          }
        });
      });
      d3.select("#stage").transition().duration(500).style("opacity", "0");
      d3.select("#wheel svg:nth-of-type(2)").transition(500).style("opacity", "0");
      d3.selectAll("#footer > div").classed("current", false);
      return d3.selectAll("#footer .disabled").transition().delay(function(d, i) {
        return i * 200;
      }).duration(1000).style("height", 200 + "px").each("end", function() {
        var t, tc;
        t = d3.select(this);
        t.selectAll(".grade").style("display", "none");
        tc = d3.select(this).style("border-top-color");
        return t.transition().duration(500).style('background-color', tc).each("end", function() {
          t.style("outline", "solid rgba(0,0,0,0.1) 1px");
          return t.append("div").attr("class", "score").attr("data-score", ~~(Math.abs(d3.hsl(tc).h) / 12)).text(~~(Math.abs(d3.hsl(tc).h) / 12));
        });
      });
    };
  };
}).call(this);
