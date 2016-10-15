'use strict';

module.exports = (app) => {
  app.directive('dsListForm', function() {
    return {
      restrict: 'E',
      // replace: true,
      controller: 'ListFormController',
      controllerAs: 'listFormCtrl',
      template: require('./list_form_template.html'),
      bindToController: true,
      transclude: true,
      scope: {
        config: '='
      }
    };
  });
};