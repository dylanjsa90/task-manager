'use strict';

module.exports = function(app) {
  app.controller('NoteController', ['noteService', function(noteService) {
    this.editNote = function(noteId, content) {
      // noteService.updateNote().then(())
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
        deleteNote: '&'
      }
    };
  });
};