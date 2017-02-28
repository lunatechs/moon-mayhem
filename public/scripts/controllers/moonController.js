'use strict';

(function(module) {
  var moonController = {};
  $('section').hide();
  $('section#main-moon').show();


  moonController.index = function() {
    console.log('moon contoller cawled');
    $('section').hide();
    $('section#main-moon').show();
  }
  module.moonController = moonController;
})(window);
