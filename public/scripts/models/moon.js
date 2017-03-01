'use strict';

(function (module) {
  var moonData = {};
  var dataContent;

  // Filter function for matching month and year vars from form
  function filterFormData(value) {
    if (value.date.slice(0, 2) === moonController.month) {
      if (value.date.slice(6, 10) === moonController.year) {
        return value;
      }
    }
  }

  // Sort function to arrange days in ascending order
  function sortDays(days) {
    days.sort((a, b) => (a) - (b));
  }

  // JSON call to get filtered data
  moonData.getData = function (callback) {
    $.getJSON('../../data/cityData.json')
      .then(function (jsonData) {
        dataContent = jsonData.filter(filterFormData);
        console.log('first stage');
        return jsonData.filter(filterFormData);
      })
      .then(function (dataContent) {
        moonData.days = dataContent.map(datum => datum.date.slice(3, 5))
          .reduce(function (a, b) {
            if (a.indexOf(b) < 0) a.push(b);
            return a;
          }, []);
        sortDays(moonData.days);
        console.log('second stage');
        return moonData.days;
      })
      .then(function (days) {
        moonData.getCounts(days);
      })
      .then(callback);
  }
   // Yields an array with crime counts for each day
   moonData.getCounts = function (days) {
     moonData.counts = days.map(function (day) {
       return dataContent.filter(function (datum) {
         if (datum.date.slice(3, 5) === day) {
           return datum;
         }
       }).length;
     });
   }

  module.moonData = moonData;
})(window);
