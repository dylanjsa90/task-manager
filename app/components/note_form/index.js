'use strict';

module.exports = function(app) {
  app.directive('listNoteForm', function() {
    return {
      restrict: 'E',
      template: require('./note_form_template.html'),
      scope: {
        createNote: '&'
      }
    };
  });
};