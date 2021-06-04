Highcharts.getJSON(
  "https://raw.githubusercontent.com/com-480-data-visualization/data-visualization-project-2021-bit-shiba/" +
    "master/content/violindata.json",
  function (dataJson) {
    let Grass = [],
      Fire = [],
      Water = [],
      Bug = [],
      Normal = [],
      Dark = [],
      Poison = [],
      Electric = [],
      Ground = [],
      Ice = [],
      Fairy = [],
      Steel = [],
      Fighting = [],
      Psychic = [],
      Rock = [],
      Ghost = [],
      Dragon = [],
      Flying = [];
    dataJson.forEach((elm) => {
      switch (elm.type) {
        case "Grass":
          Grass.push(elm.strength);
          break;
        case "Fire":
          Fire.push(elm.strength);
          break;
        case "Water":
          Water.push(elm.strength);
          break;
        case "Bug":
          Bug.push(elm.strength);
          break;
        case "Normal":
          Normal.push(elm.strength);
          break;
        case "Dark":
          Dark.push(elm.strength);
          break;
        case "Poison":
          Poison.push(elm.strength);
          break;
        case "Electric":
          Electric.push(elm.strength);
          break;
        case "Ground":
          Ground.push(elm.strength);
          break;
        case "Ice":
          Ice.push(elm.strength);
          break;
        case "Fairy":
          Fairy.push(elm.strength);
          break;
        case "Steel":
          Steel.push(elm.strength);
          break;
        case "Fighting":
          Fighting.push(elm.strength);
          break;
        case "Psychic":
          Psychic.push(elm.strength);
          break;
        case "Rock":
          Rock.push(elm.strength);
          break;
        case "Ghost":
          Ghost.push(elm.strength);
          break;
        case "Dragon":
          Dragon.push(elm.strength);
          break;
        case "Flying":
          Flying.push(elm.strength);
          break;
      }
    });

    //Process violin data
    let step = 1,
      precision = 0.00000000001,
      width = 10;
    let data = processViolin(
      step,
      precision,
      width,
      Grass,
      Fire,
      Water,
      Bug,
      Normal,
      Dark,
      Poison,
      Electric,
      Ground,
      Ice,
      Fairy,
      Steel,
      Fighting,
      Psychic,
      Rock,
      Ghost,
      Dragon,
      Flying
    );

    //Structure the data to create the chart
    let xi = data.xiData;
    let stat = data.stat;
    let violin1 = data.results[0],
      violin2 = data.results[1],
      violin3 = data.results[2],
      violin4 = data.results[3],
      violin5 = data.results[4],
      violin6 = data.results[5],
      violin7 = data.results[6],
      violin8 = data.results[7],
      violin9 = data.results[8],
      violin10 = data.results[9],
      violin11 = data.results[10],
      violin12 = data.results[11],
      violin13 = data.results[12],
      violin14 = data.results[13],
      violin15 = data.results[14],
      violin16 = data.results[15],
      violin17 = data.results[16],
      violin18 = data.results[17];

    Highcharts.chart("container", {
      chart: {
        type: "areasplinerange",
        inverted: true
      },
      title: {
        text: "Pokemon's species strength among primary types"
      },
      credits: {
        enabled: false
      },
      xAxis: {
        reversed: false,
        labels: { format: "{value} power" }
      },

      yAxis: {
        title: { text: null },
        categories: [
          "Grass",
          "Fire",
          "Water",
          "Bug",
          "Normal",
          "Dark",
          "Poison",
          "Electric",
          "Ground",
          "Ice",
          "Fairy",
          "Steel",
          "Fighting",
          "Psychic",
          "Rock",
          "Ghost",
          "Dragon",
          "Flying"
        ],
        startOnTick: false,
        endOnTick: false,
        gridLineWidth: 0
      },
      tooltip: {
        useHTML: true,
        valueDecimals: 3,
        formatter: function () {
          return (
            "<b>" +
            this.series.name +
            "</b><table><tr><td>Max:</td><td>" +
            stat[this.series.index][4] +
            " power</td></tr><tr><td>Q 3:</td><td>" +
            stat[this.series.index][3] +
            " power</td></tr><tr><td>Median:</td><td>" +
            stat[this.series.index][2] +
            " power</td></tr><tr><td>Q 1:</td><td>" +
            stat[this.series.index][1] +
            " power</td></tr><tr><td>Min:</td><td>" +
            stat[this.series.index][0] +
            " power</td></tr></table>"
          );
        }
      },
      plotOptions: {
        series: {
          marker: {
            enabled: false
          },
          states: {
            hover: {
              enabled: false
            }
          },
          pointStart: xi[0],
          events: {
            legendItemClick: function (e) {
              e.preventDefault();
            }
          }
        }
      },

      series: [
        {
          name: "Grass",
          color: "#641E16",
          data: violin1
        },
        {
          name: "Fire",
          color: "#7B241C",
          data: violin2
        },
        {
          name: "Water",
          color: "#922B21",
          data: violin3
        },
        {
          name: "Bug",
          color: "#A93226",
          data: violin4
        },
        {
          name: "Normal",
          color: "#C0392B",
          data: violin5
        },
        {
          name: "Dark",
          color: "#CD6155",
          data: violin6
        },
        {
          name: "Poison",
          color: "#D98880",
          data: violin7
        },
        {
          name: "Electric",
          color: "#FAD7A0",
          data: violin8
        },
        {
          name: "Ground",
          color: "#F8C471",
          data: violin9
        },
        {
          name: "Ice",
          color: "#F5B041",
          data: violin10
        },
        {
          name: "Fairy",
          color: "#F39C12",
          data: violin11
        },
        {
          name: "Steel",
          color: "#E67E22",
          data: violin12
        },
        {
          name: "Fighting",
          color: "#CA6F1E",
          data: violin13
        },
        {
          name: "Psychic",
          color: "#DC7633",
          data: violin14
        },
        {
          name: "Rock",
          color: "#D35400",
          data: violin15
        },
        {
          name: "Ghost",
          color: "#BA4A00",
          data: violin16
        },
        {
          name: "Dragon",
          color: "#A04000",
          data: violin17
        },
        {
          name: "Flying",
          color: "#873600",
          data: violin18
        }
      ]
    });
  }
);
