'use strict';

function moonChart() {
  moonData.getData();

  (() => {
    var myChart = Highcharts.chart('container', {
      chart: {
        type: 'bar'
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
  })();
};