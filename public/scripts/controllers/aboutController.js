'use strict';

(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    console.log('about contoller cawled');
    $('section').hide();
    $('#about-moon').show();
  }
  module.aboutController = aboutController;
})(window);
