'use strict';

(function(module) {
  var moonData = {};

  function filterFormData(value) {
    if (value.date.slice(0, 2) === moonController.month) {
      if(value.date.slice(6, 10) === moonController.year) {
        return value;
      }
    }
  }

  moonData.getData = function() {
    console.log('get data called');
    $.getJSON('../../data/fakeData.json') // switch to real json at some point!
    .then(jsonData => moonData.dataContent = jsonData.filter(filterFormData));
  };

  moonData.getDays = function() {
    moonData.days = moonData.dataContent.map(datum => datum.date.slice(3,5))
      .reduce(function(a,b){
        if (a.indexOf(b) < 0 ) a.push(b);
        return a;
      },[]);
  }

  moonData.getCounts = function() {
    moonData.counts = [];
    moonData.days.forEach(function(day) {
      moonData.counts.push(
        moonData.dataContent.filter(function(datum) {
            if (datum.date.slice(3,5) === day) {
              return datum;
            }
          }).length);
    });
  };

  module.moonData = moonData;
})(window);
