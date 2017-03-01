'use strict';

(function(module) {
  var moonController = {};
moonController.month;

  $('section').hide();
  $('section#main-moon').show();

  $('#moon-selector').on('submit', function(e) {
    e.preventDefault();
    moonController.month = $('select')[0].value;
    moonController.year = $('select')[1].value;
    moonData.getData(); // may want to move this once view functions are in place
  });

  moonController.index = function() {
    console.log('moon controller called');
    $('section').hide();
    $('section#main-moon').show();
  }
  module.moonController = moonController;
})(window);
