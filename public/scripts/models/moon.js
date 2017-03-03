'use strict';

(function (module) {
  var moonData = {};
  var dataContent;

  // JSON call to get filtered data
  moonData.getData = function (callback) {
    daysCountsData.forEach(function(dataSet) {
      if (moonController.monthYear === dataSet.key) {
        moonData.days = dataSet.days;
        moonData.counts = dataSet.counts;
        console.log('days', moonData.days, 'counts',moonData.counts);
      }
    });
    moonData.getMoons(callback)
  }

  // Calls Navy Moon API, then calls the chart-making callback
  moonData.getMoons = function (callback) {
    $.get(`https://cors-anywhere.herokuapp.com/http://api.usno.navy.mil/moon/phase?date=${parseInt(moonController.month)}/1/${moonController.year}&nump=4&tz=-8&dst=true`)
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
            console.log('full moon date:', moonData.fullMoonDate, 'moonData.fullMoon is', moonData.fullMoon);
          }
        });
      })
      .then(callback);
  }

  module.moonData = moonData;
})(window);
