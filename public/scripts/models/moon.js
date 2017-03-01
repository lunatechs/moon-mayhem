'use strict';

var moonData = {};

moonData.filterData = function(value) {
  console.log('form inputs in filter data',moonController.month, moonController.year);
  if (value.date.slice(0, 2) === moonController.month) {
    if(value.date.slice(6, 10) === moonController.year) {
      return value;
    }
  }
}

moonData.getData = function() {
  $.getJSON('../../data/fakeData.json')
  .then(function(jsonData) {
    moonData.dataContent = jsonData.filter(moonData.filterData);
  });
}
