// A tree visualization of Cause of Death hierarchy from the Centers for Disease Control.
// This module implements the tree visualization.
//
//
// Details of the hierarchy can be found here:
// https://github.com/curran/hierarchy/tree/gh-pages/cdc/mortality
//
// Draws from:
//
// Radial Tree
// http://bl.ocks.org/mbostock/4063550
//
// Linear Tree
// http://bl.ocks.org/mbostock/4063570
//
// Margin Convention
// http://bl.ocks.org/mbostock/3019563
//
// Collapsible Tree Layout
// http://mbostock.github.io/d3/talk/20111018/tree.html
//
// Curran Kelleher 2/18/2014
define(['getShortName'], function (getShortName) {

  // A function called when the user navigates in the tree.
  var onNavigate = function(){},

      // Keeps track of the root of the visible tree.
      root;

  // This function should be called once to set up the visualization.
  function init(svg, outerWidth, outerHeight, margin, hierarchy){

    var nodeRadius = 4,
        labelOffset = 7,
        width = outerWidth - margin.left - margin.right,
        height = outerHeight - margin.top - margin.bottom,

        tree = d3.layout.tree()
          .size([height, width])
          .separation(function(a, b) { return (a.parent == b.parent ? 1 : 2) / a.depth; }),

        diagonal = d3.svg.diagonal()
          .projection(function(d) { return [d.y, d.x]; }),
        
        g = svg.append('g')
          .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

        // Use a separate group for links so they always appear behind nodes.
        linkG = g.append('g');

    // Initialize the visualization to show the top of the tree.
    navigate(hierarchy);

    function navigate(newRoot) {
      root = newRoot;
      onNavigate(root, childNames(root));
      update();
    }

    function update(){

      // Toggles nodes to show direct children only.
      showSubtree(root);

      var nodes = layoutNodes(root);
      var links = tree.links(nodes);

      var link = linkG.selectAll('.link')
          .data(links);
      link.enter().append('path')
          .attr('class', 'link');
      link.attr('d', diagonal);
      link.exit().remove();

      var node = g.selectAll('.node')
          .data(nodes);
      
      var nodeEnter = node.enter().append('g')
          .attr('class', 'node');

      node.attr('transform', function(d) { return 'translate(' + d.y + ',' + d.x + ')'; });

      nodeEnter.append('circle')
        .attr('r', nodeRadius)
        .on('click', handleClick);

      node.select('circle')
        .attr('class', function (d) {
          return hasChildren(d) ? 'with-children' : 'without-children';
        })
        .call(setCursor);

      nodeEnter.append('text')
        .attr('dy', '.35em')
        .attr('dx', labelOffset + 'px')
        .attr('text-anchor', 'start')
        .on('click', handleClick);
      node.select('text')
        .text(function(d) { return getShortName(d.name); })
        .call(setCursor);

      node.exit().remove();
    }

    // Handles the special case of a single child,
    // which is not handled properly by D3's tree layout.
    function layoutNodes(root){
      var nodes = tree.nodes(root);
      if(nodes.length === 2) {
        nodes.forEach(function(node){
          node.x = height / 2;
        });
      }
      return nodes;
    }

    // Handles clicking on a node in the tree (node or text).
    function handleClick(d){
      // If the user clicks on the root node, navigate up the tree.
      if(d.isRoot && d.parent) {
        navigate(d.parent);
      } else if(d._children) {
        // Otherwise navigate down the tree.
        navigate(d);
      }
    }
    
    // Returns whether or not a node has more than one child,
    // regardless of whether it is collapsed or not.
    function hasChildren(d){
      var children = d.children || d._children;
      return (children && children.length > 1)
    }

    // Sets the cursor of the given selection (circle or text)
    // to be a pointer if the node has more than one child,
    // as an affordance that it can be clicked.
    function setCursor(selection){
      selection.style('cursor', function (d) {
        return hasChildren(d) ? 'pointer' : 'auto';
      });
    }
  }

  // Expands and collapses nodes such that:
  // `root` is expanded, and
  // the children of `root` are collapsed.
  function showSubtree(root){
    expand(root);

    // The `isRoot` flag is used in the click event 
    // handler to determine which navigation direction
    // is intended - clicking on the root moves up the tree.
    root.isRoot = true;

    if(root.children){
      root.children.forEach(function(node) {
        collapse(node);
        node.isRoot = false;
      });
    }
  }

  function expand(d){
    if (d._children) {
      d.children = d._children;
      d._children = null;
    }
  }

  function collapse(d) {
    if (d.children) {
      d._children = d.children;
      d.children = null;
    }
  }

  function childNames(d){
    var children = d.children || d._children;
    return _.pluck(children, 'name');
  }

  return {
    init: init,
    onNavigate: function(callback) {
      onNavigate = callback;

      // Call the callback once initially.
      if(root){
        onNavigate(root, childNames(root));
      }
    }
  };
});