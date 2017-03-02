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
        return jsonData.filter(filterFormData);
      })
      .then(function (dataContent) {
        moonData.days = dataContent.map(datum => datum.date.slice(3, 5))
          .reduce(function (a, b) {
            if (a.indexOf(b) < 0) a.push(b);
            return a;
          }, []);
        sortDays(moonData.days);
        return moonData.days;
      })
      .then(function (days) {
        moonData.getCounts(days);
      })
      .then(function() {
        console.log('getMoons being called')
        moonData.getMoons()
      })
      .then(function() {
        console.log('getData callback firing');
        setTimeout(callback, 1000);
      });
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

  moonData.getMoons = function () {
    $.get(`https://api.usno.navy.mil/moon/phase?date=${parseInt(moonController.month)}/1/${moonController.year}&nump=4&tz=-8&dst=true`)
      .then(function (data) {
        console.log('getMoons.then starting');
        data.phasedata.filter(function (datum) {
          if (datum.phase === 'Full Moon') {
            var fullMoon = parseInt(datum.date.slice(-2));
            moonData.fullMoonDate = (fullMoon - 1);
            moonData.fullMoon = [];
            moonData.fullMoon.push((fullMoon - 4) < 0 ? 0 : (fullMoon -4));
            moonData.fullMoon.push(fullMoon + 2);
            moonData.moonFrom = moonData.fullMoon[0];
            moonData.moonTo = moonData.fullMoon[1];
            console.log('moonData.fullMoon is', moonData.fullMoon);
          }
        });
      });
  }

  module.moonData = moonData;
})(window);
