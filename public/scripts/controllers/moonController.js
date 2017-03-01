'use strict';

(function(module) {
  var moonController = {};
moonController.month;

  $('section').hide();
  $('section#main-moon').show();

  $('#moon-selector').on('submit', function(e) {
    e.preventDefault();
    console.log('hi');
})
  moonController.index = function() {
    console.log('moon contoller cawled');
    $('section').hide();
    $('section#main-moon').show();
  }
  module.moonController = moonController;
})(window);
