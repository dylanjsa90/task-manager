'use strict';

module.exports = function(app) {
  app.directive('dsList', function() {
    return {
      controller: 'ListController',
      controllerAs: 'listCtrl',
      template: require('./list_template.html'),
      bindToController: true,
      scope: {
        baseUrl: '@',
        config: '='
      }
    };
  });
};