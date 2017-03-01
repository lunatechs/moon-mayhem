'use strict';

(function(module) {
  var moonData = {};
  var dataContent;

  // Filter function for matching month and year vars from form
  function filterFormData(value) {
    if (value.date.slice(0, 2) === moonController.month) {
      if(value.date.slice(6, 10) === moonController.year) {
        return value;
      }
    }
  }

  // Sort function to arrange days in ascending order
  function sortDays(days) {
    days.sort((a,b) => (a) - (b));
  }

  // JSON call to get filtered data
  moonData.getData = function() {
    $.getJSON('../../data/cityData.json')
    .then(jsonData => dataContent = jsonData.filter(filterFormData));
  };

  // Yields an array with a unique date within a month
  moonData.getDays = function() {
    moonData.days = dataContent.map(datum => datum.date.slice(3,5))
      .reduce(function(a,b) {
        if (a.indexOf(b) < 0 ) a.push(b);
        return a;
      },[]);
      sortDays(moonData.days);
  }

  // Yields an array with crime counts for each day
  moonData.getCounts = function() {
    moonData.counts = moonData.days.map(function(day) {
      return dataContent.filter(function(datum) {
        if (datum.date.slice(3,5) === day) {
          return datum;
        }
      }).length;
    });
  };

  module.moonData = moonData;
})(window);
