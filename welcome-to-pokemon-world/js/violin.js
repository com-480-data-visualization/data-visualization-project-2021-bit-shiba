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
      Ghost =[],
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
      width = 5;
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
        text: "Pokemon's species strength among different primary types"
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
        categories: ['Grass', 'Fire', 'Water', 'Bug', 'Normal', 'Dark', 'Poison', 'Electric', 'Ground', 'Ice', 'Fairy',
          'Steel', 'Fighting', 'Psychic', 'Rock', 'Ghost', 'Dragon', 'Flying'],
        startOnTick:false,
        endOnTick:false,
        gridLineWidth: 0
      },
      tooltip: {
        useHTML: true,
        valueDecimals: 3,
        formatter: function () {
          return (
            "<b>" +
            this.series.name +
            "</b><table><tr><td>Max Species :</td><td>" +
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
          color: "#ffa8d4",
          data: violin1
        },
        {
          name: "Fire",
          color: "#a8d4ff",
          data: violin2
        },
        {
          name: "Water",
          color: "#ffa956",
          data: violin3
        },
        {
          name: "Bug",
          color: "#46f15f",
          data: violin4
        },
        {
          name: "Normal",
          color: "#ffa8d4",
          data: violin5
        },
        {
          name: "Dark",
          color: "#a8d4ff",
          data: violin6
        },
        {
          name: "Poison",
          color: "#ffa956",
          data: violin7
        },
        {
          name: "Electric",
          color: "#46f15f",
          data: violin8
        },
        {
          name: "Ground",
          color: "#ffa8d4",
          data: violin9
        },
        {
          name: "Ice",
          color: "#a8d4ff",
          data: violin10
        },
        {
          name: "Fairy",
          color: "#ffa956",
          data: violin11
        },
        {
          name: "Steel",
          color: "#46f15f",
          data: violin12
        },
        {
          name: "Fighting",
          color: "#ffa8d4",
          data: violin13
        },
        {
          name: "Psychic",
          color: "#a8d4ff",
          data: violin14
        },
        {
          name: "Rock",
          color: "#ffa956",
          data: violin15
        },
        {
          name: "Ghost",
          color: "#46f15f",
          data: violin16
        },
        {
          name: "Dragon",
          color: "#ffa956",
          data: violin17
        },
        {
          name: "Flying",
          color: "#46f15f",
          data: violin18
        }
      ]
    });
  }
);