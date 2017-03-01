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
  $.getJSON('../../data/fakeData.json') // switch to real json at some point!
  .then(function(jsonData) {
    moonData.dataContent = jsonData.filter(moonData.filterData);
    moonData.dayCounts = moonData.dataContent.map(function(datum) {
      //console.log(datum);
      return datum.date.slice(3,5);
    });
  });
}
