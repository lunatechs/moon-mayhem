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
      text: 'Crimes'
    },
    xAxis: {
      categories: moonData.days
    },
    yAxis: {
      title: {
        text: 'Fruit eaten'
      }
    },
    series: [{
      name: 'Number of Crimes Reported',
      data: moonData.counts
    }]
  });
}