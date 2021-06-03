anychart.onDocumentReady(function () {
    // our data from bulbapedia
      var data1 = [
        {x: "HP", value: 39},
        {x: "Attack", value: 52},
        {x: "Defense", value: 43},
        {x: "Special Attack", value: 60},
        {x: "Special Defense", value: 50},
        {x: "Speed", value: 65},
      ];

      // create radar chart
      var chart = anychart.radar();
      // set chart yScale settings
      chart.yScale()
        .minimum(35)
        .maximum(65)
        .ticks({'interval':5});

      // create first series
      chart.line(data1)
      // create second series

      // set chart title
      chart.title("Starter Pokemon Comparison Chart");

      // set container id for the chart
      chart.container('container_r');
      // initiate chart drawing
      chart.draw();

    });