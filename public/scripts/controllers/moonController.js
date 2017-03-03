'use strict';

(function (module) {
  var moonController = {};

  $('section').hide();
  $('section#main-moon').show();

  $('#moon-selector').on('submit', function (e) {
    e.preventDefault();
    moonController.month = $('select')[0].value;
    moonController.monthName = $('select option:selected').text();
    moonController.year = $('select')[1].value;
    moonController.monthYear = `${moonController.month}/${moonController.year}`;
    $('section#main-moon p.intro').slideUp();
    moonChart();
  });

  moonController.index = function () {
    console.log('moon controller called');
    $('section').hide();
    $('section#main-moon').show();
  };
  module.moonController = moonController;
})(window);
