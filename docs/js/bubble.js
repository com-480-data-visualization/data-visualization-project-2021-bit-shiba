(function() {
    
    var width = 600,
        height = 450;

    var svg = d3.select("#chart")
        .append('svg')
        .attr('height', height)
        .attr('width', width)
        .append('g')
        .attr('transform', 'translate(0,0)')

    var defs = svg.append("defs");
    
    var radiusScale = d3.scaleSqrt().domain([1,134]).range([20,60])

    var simulation = d3.forceSimulation()
        .force('x', d3.forceX(width/2-20).strength(0.05))
        .force('y', d3.forceY(height/2+10).strength(0.05))
        .force('collide', d3.forceCollide(function(d){
            return radiusScale(d.radius)+3;
        }))

    d3.queue()
      .defer(d3.csv, 'https://raw.githubusercontent.com/com-480-data-visualization/data-visualization-project-2021-bit-shiba/master/content/type.csv')
      .await(ready)

    function ready (error, datapoints){

        var circle = svg.selectAll('.bubble')
        .data(datapoints)
        .enter().append('circle')
        .attr('class','bubble')
        .attr('fill', function(d){
            return 'url(#'+ d.name+')'
            })
        .attr('r', function(d) {
            return radiusScale(d.radius)
            })
        .on('click', function(d){
            console.log(d)
            })

        defs.selectAll(".bubble-pattern")
            .data(datapoints)
            .enter().append("pattern")
            .attr("class", "bubble-pattern")
            .attr("id", function(d){
                return d.name
            })
            .attr("height", "100%")
            .attr("width", "100%")
            .attr("patternContentUnits", "objectBoundingBox")
            .append("image")
            .attr("height",1)
            .attr("width",1)
            .attr("preserveAspectRatio", "none")
            .attr("xmlns:xlink", "http://www.w3.org/1999/xlink")
            .attr("xlink:href", function(d){
                return d.image_path
            });
        var tooltip = d3.select("#chart")
            .append("div")
              .style("opacity", 0)
              .attr("class", "tooltip")
              .style("background-color", "#FCA673")
              .style("border-radius", "5px")
              .style("padding", "10px")
              .style("width", "300px")
              .style("color", "black")

        
          // -2- Create 3 functions to show / update (when mouse move but stay on same circle) / hide the tooltip
        var showTooltip = function(d) {
            tooltip
              .transition()
              .duration(200)
            tooltip
              .style("opacity", 1)
              .html("<strong>Type: </strong>" + d.type +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Count: </strong>"+ d.count +
                "<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src=\""+ d.pokemon + "\" style=\"width:200px;height:200px;\"/>"
                +"<br/><strong>Personality: </strong>" + d.description)
              .append("image")
              .attr("height",1)
              .attr("width",1)
              .attr("preserveAspectRatio", "none")
              .attr("xmlns:xlink", "http://www.w3.org/1999/xlink")
              .attr("xlink:href", function(d){
                  return d.image_path
              })
              .style("left", (d3.mouse(this)[0]+30) + "px")
              .style("top", (d3.mouse(this)[1]+30) + "px")
          }
        var moveTooltip = function(d) {
            tooltip
              .style("left", (d3.mouse(this)[0]+30) + "px")
              .style("top", (d3.mouse(this)[1]+30) + "px")
          }
        var hideTooltip = function(d) {
            tooltip
              .transition()
              .duration(200)
              .style("opacity", 0)
          }

        simulation.nodes(datapoints)
        .on('tick', ticked);

        
        function ticked() {
        circle
            .attr('cx', function(d) {
            return d.x
            })
            .attr('cy', function(d) {
            return d.y
            })
            .on("mouseover", showTooltip )
            .on("mousemove", moveTooltip )
            .on("mouseleave", hideTooltip )
        }
    }
})();

