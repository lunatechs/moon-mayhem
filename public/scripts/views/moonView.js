'use strict';

function moonChart() {
  moonData.getData(moonStuff);
};

function moonStuff() {
  console.log('moonData.moonFrom:', moonData.moonFrom);
  console.log('moonData.moonTo:', moonData.moonTo);
  var myChart = Highcharts.chart('container', {
    chart: {
      type: 'areaspline'
    },
    title: {
      text: moonController.monthName
    },
    xAxis: {
      categories: moonData.days,
      plotBands: [{ // add plotBands label
        from: moonData.moonFrom,
        to: moonData.moonTo,
        color: 'rgba(68, 170, 213, .2)',
        label: {
          text: 'Full Moon Phase',
          align: 'center',
          style: {
            color: 'lightgray',
            fontWeight: 'bold'
          }
        }
      }]

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