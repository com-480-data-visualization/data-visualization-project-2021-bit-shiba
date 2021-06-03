Highcharts.chart('container', {

  credits:{
    enabled:false
  },
  title: {
    text: 'Mix-type pokemon'
  },

  accessibility: {
    point: {
      valueDescriptionFormat: '{index}. From {point.from} to {point.to}: {point.weight}.'
    }
  },

  series: [{
    keys: ['from', 'to', 'weight'],
    data:
      [['Bug', 'Bug', 19], ['Bug', 'Electric', 4], ['Bug', 'Fairy', 2], ['Bug', 'Fighting', 4], ['Bug', 'Fire', 2], ['Bug', 'Flying', 14], ['Bug', 'Ghost', 1], ['Bug', 'Grass', 6], ['Bug', 'Ground', 2], ['Bug', 'Poison', 12], ['Bug', 'Psychic', 2], ['Bug', 'Rock', 3], ['Bug', 'Steel', 7], ['Bug', 'Water', 3], ['Dark', 'Dark', 14], ['Dark', 'Dragon', 4], ['Dark', 'Fairy', 3], ['Dark', 'Fighting', 2], ['Dark', 'Fire', 3], ['Dark', 'Flying', 5], ['Dark', 'Ghost', 2], ['Dark', 'Ice', 2], ['Dark', 'Normal', 5], ['Dark', 'Psychic', 2], ['Dark', 'Steel', 2], ['Dragon', 'Dragon', 12], ['Dragon', 'Electric', 1], ['Dragon', 'Fairy', 1], ['Dragon', 'Fighting', 2], ['Dragon', 'Fire', 1], ['Dragon', 'Flying', 6], ['Dragon', 'Ghost', 3], ['Dragon', 'Ground', 7], ['Dragon', 'Ice', 3], ['Dragon', 'Psychic', 4], ['Electric', 'Dark', 2], ['Electric', 'Dragon', 2], ['Electric', 'Electric', 33], ['Electric', 'Fairy', 2], ['Electric', 'Fire', 1], ['Electric', 'Flying', 6], ['Electric', 'Ghost', 1], ['Electric', 'Grass', 1], ['Electric', 'Ice', 2], ['Electric', 'Normal', 2], ['Electric', 'Poison', 3], ['Electric', 'Psychic', 1], ['Electric', 'Steel', 4], ['Electric', 'Water', 1], ['Fairy', 'Fairy', 19], ['Fairy', 'Flying', 2], ['Fairy', 'Steel', 1], ['Fighting', 'Dark', 1], ['Fighting', 'Fighting', 28], ['Fighting', 'Flying', 1], ['Fighting', 'Ghost', 1], ['Fighting', 'Ice', 1], ['Fighting', 'Psychic', 3], ['Fighting', 'Steel', 3], ['Fire', 'Bug', 2], ['Fire', 'Dark', 1], ['Fire', 'Dragon', 2], ['Fire', 'Fighting', 7], ['Fire', 'Fire', 34], ['Fire', 'Flying', 7], ['Fire', 'Ghost', 2], ['Fire', 'Ground', 3], ['Fire', 'Normal', 2], ['Fire', 'Psychic', 2], ['Fire', 'Rock', 1], ['Fire', 'Steel', 1], ['Fire', 'Water', 1], ['Flying', 'Dragon', 2], ['Flying', 'Flying', 4], ['Flying', 'Steel', 1], ['Flying', 'Water', 1], ['Ghost', 'Dark', 1], ['Ghost', 'Dragon', 2], ['Ghost', 'Fairy', 1], ['Ghost', 'Fire', 3], ['Ghost', 'Flying', 3], ['Ghost', 'Ghost', 14], ['Ghost', 'Grass', 11], ['Ghost', 'Ground', 2], ['Ghost', 'Poison', 4], ['Grass', 'Dark', 3], ['Grass', 'Dragon', 5], ['Grass', 'Fairy', 5], ['Grass', 'Fighting', 3], ['Grass', 'Flying', 7], ['Grass', 'Ghost', 1], ['Grass', 'Grass', 43], ['Grass', 'Ground', 1], ['Grass', 'Ice', 3], ['Grass', 'Poison', 15], ['Grass', 'Psychic', 2], ['Grass', 'Steel', 3], ['Ground', 'Dark', 3], ['Ground', 'Dragon', 2], ['Ground', 'Electric', 1], ['Ground', 'Fire', 1], ['Ground', 'Flying', 4], ['Ground', 'Ghost', 4], ['Ground', 'Ground', 17], ['Ground', 'Psychic', 2], ['Ground', 'Rock', 3], ['Ground', 'Steel', 4], ['Ice', 'Bug', 2], ['Ice', 'Fairy', 1], ['Ice', 'Fire', 1], ['Ice', 'Flying', 2], ['Ice', 'Ghost', 1], ['Ice', 'Ground', 3], ['Ice', 'Ice', 19], ['Ice', 'Psychic', 2], ['Ice', 'Steel', 2], ['Ice', 'Water', 3], ['Normal', 'Dragon', 1], ['Normal', 'Fairy', 5], ['Normal', 'Fighting', 4], ['Normal', 'Flying', 27], ['Normal', 'Grass', 2], ['Normal', 'Ground', 1], ['Normal', 'Normal', 71], ['Normal', 'Psychic', 3], ['Normal', 'Water', 1], ['Poison', 'Bug', 1], ['Poison', 'Dark', 5], ['Poison', 'Dragon', 4], ['Poison', 'Fairy', 1], ['Poison', 'Fighting', 2], ['Poison', 'Fire', 2], ['Poison', 'Flying', 3], ['Poison', 'Ground', 2], ['Poison', 'Poison', 16], ['Poison', 'Water', 3], ['Psychic', 'Dark', 1], ['Psychic', 'Dragon', 1], ['Psychic', 'Fairy', 9], ['Psychic', 'Fighting', 3], ['Psychic', 'Fire', 1], ['Psychic', 'Flying', 7], ['Psychic', 'Ghost', 3], ['Psychic', 'Grass', 1], ['Psychic', 'Ice', 2], ['Psychic', 'Normal', 2], ['Psychic', 'Psychic', 44], ['Psychic', 'Steel', 2], ['Rock', 'Bug', 2], ['Rock', 'Dark', 2], ['Rock', 'Dragon', 2], ['Rock', 'Electric', 3], ['Rock', 'Fairy', 3], ['Rock', 'Fighting', 1], ['Rock', 'Fire', 2], ['Rock', 'Flying', 6], ['Rock', 'Grass', 2], ['Rock', 'Ground', 6], ['Rock', 'Ice', 2], ['Rock', 'Poison', 1], ['Rock', 'Psychic', 2], ['Rock', 'Rock', 16], ['Rock', 'Steel', 4], ['Rock', 'Water', 6], ['Steel', 'Dragon', 2], ['Steel', 'Fairy', 4], ['Steel', 'Fighting', 1], ['Steel', 'Flying', 2], ['Steel', 'Ghost', 4], ['Steel', 'Ground', 2], ['Steel', 'Psychic', 7], ['Steel', 'Rock', 3], ['Steel', 'Steel', 11], ['Water', 'Bug', 2], ['Water', 'Dark', 7], ['Water', 'Dragon', 3], ['Water', 'Electric', 2], ['Water', 'Fairy', 4], ['Water', 'Fighting', 3], ['Water', 'Flying', 7], ['Water', 'Ghost', 2], ['Water', 'Grass', 3], ['Water', 'Ground', 10], ['Water', 'Ice', 4], ['Water', 'Poison', 3], ['Water', 'Psychic', 6], ['Water', 'Rock', 5], ['Water', 'Steel', 1], ['Water', 'Water', 72]]
    ,
    type: 'dependencywheel',
    name: 'mix-type:',
    dataLabels: {
      color: '#333',
      textPath: {
        enabled: true,
        attributes: {
          dy: 5
        }
      },
      distance: 10
    },
    size: '95%'
  }]

});
