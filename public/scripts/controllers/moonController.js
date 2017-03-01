'use strict';

(function(module) {
  var moonController = {};
  $('section').hide();
  $('section#main-moon').show();

$('#moon-selector').on('submit', function(e) {
  e.preventDefault();
  moonController.month = $('select')[0].value;
  moonController.year = $('select')[1].value;
  moonData.getData(); // once form is submitted, call getData
})
  moonController.index = function() {
    console.log('moon contoller cawled');
    $('section').hide();
    $('section#main-moon').show();
  }
  module.moonController = moonController;
})(window);
