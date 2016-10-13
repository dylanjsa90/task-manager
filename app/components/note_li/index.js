'use strict';

module.exports = function(app) {
    app.directive('dsNoteLi', function() {
        return {
            template: require('note_li_template.html'),
            controller: 'NoteController',
            controllerAs: 'NoteCtrl',
            scope: {}
        }
    })
}