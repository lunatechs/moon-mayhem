'use strict';

function moonChart() {
  moonData.getData(moonStuff);
};

function moonStuff() {
  var myChart = Highcharts.chart('container', {
    chart: {
      type: 'areaspline'
    },
    title: {
      text: moonController.monthName
    },
    xAxis: {
      categories: moonData.days
    },
    yAxis: {
      title: {
        text: 'Reported Crimes'
      }
    },
    series: [{
      name: 'Number of Crimes Reported',
      data: moonData.counts
    }]
  });
}