'use strict';

module.exports = function(app) {
  app.directive('dsList', function() {
    return {
      restrict: 'E',
      controller: 'ListController',
      controllerAs: 'listCtrl',
      template: require('./list_template.html'),
      bindToController: true,
      scope: {
        list: '='
      }
    };
  });
};