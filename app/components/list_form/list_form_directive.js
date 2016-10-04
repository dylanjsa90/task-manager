'use strict';

module.exports = (app) => {
  app.directive('dsListForm', function() {
    return {
      controller: 'ListFormController',
      controllerAs: 'listFormCtrl',
      template: require('./list_form_template.html'),
      transclude: true,
      scope: {
        buttonText: '@',
        list: '=',
        save: '&'
      }
    };
  });
};