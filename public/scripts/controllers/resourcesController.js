'use strict';

(function(module) {
  var resourcesController = {};

  resourcesController.index = function() {
    console.log('resources contoller cawled');
    $('section').hide();
    $('section#resources').show();
  }
  module.resourcesController = resourcesController;
})(window);
