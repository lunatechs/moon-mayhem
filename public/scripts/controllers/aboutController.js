'use strict';

(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    console.log('bout contoller cawled');
    $('section').hide();
    $('section#about-moon').show();
  }
  module.aboutController = aboutController;
})(window);
