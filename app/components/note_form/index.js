'use strict';

module.exports = function(app) {
  app.controller('noteFormController', ['$scope', function($scope) {
    this.note = $scope.note || {};
    this.createNote = $scope.createNote;
    this.saveNote = () => {
      this.createNote({note: this.note});
      this.note = {};
    };
  }]);
  app.directive('listNoteForm', function() {
    return {
      restrict: 'E',
      template: require('./note_form_template.html'),
      controller: 'noteFormController',
      controllerAs: 'noteFormCtrl',
      scope: {
        createNote: '&'
      }
    };
  });
};