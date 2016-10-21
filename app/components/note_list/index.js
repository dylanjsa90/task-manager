'use strict';

module.exports = function(app) {
  app.controller('NoteController', ['noteService', '$scope', function(noteService, $scope) {
    // this.remove = $scope.remove;
    // this.note = $scope.note;
    this.removeNote = () => {
      this.remove({note: this.note});
    };
  }]);

  app.directive('dsNoteLi', function() {
    return {
      restrict: 'E',
      // replace: true,
      template: require('./note_list_template.html'),
      controller: 'NoteController',
      controllerAs: 'noteCtrl',
      bindToController: true,
      scope: {
        note: '=',
        remove: '&'
      },
    };
  });
};