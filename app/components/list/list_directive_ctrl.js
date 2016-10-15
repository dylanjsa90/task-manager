'use strict';

module.exports = (app) => {
  app.controller('ListController', ['$q', 'listService', 'noteService', 'auth', function ($q, listService, noteService, auth) {
    
    this.deleteList = function() {
      listService.deleteList(this.list._id)
      .catch(() => alert('failed to delete'));
    };

    this.createNote = function(data) {
      return $q((resolve, reject) => {
        data.listId = this.list._id;

        noteService.createNote(data)
          .then(note => {
            this.list.notes.push(note);
            this.note = {};
            resolve(note);
          })
          .catch((err) => {
            alert('failed note creation');
            reject(err);
          });
      });
    };

    this.deleteNote = function(noteToDelete) {
      console.log('note to delete: ' + noteToDelete._id)
      noteService.deleteNote(noteToDelete._id)
      .then(() => {
        this.list.notes.forEach((note, index) => {
          if (noteToDelete._id === note._id) this.list.notes.splice(index, 1);
        });
      })
      .catch(() => alert('error on note deletion'));
    };
    

    
    
    
    
    
    
    
    // this.getAllLists = function() {
    //   $log.debug('listCtrl.getAllLists');
    //   $http.get(this.listUrl, this.config)
    //   .then(res => {
    //     this.lists = res.data;
    //   }, err => {
    //     $log.error('error!', err);
    //   });
    // };

    // this.deleteList = function(list) {
    //   $log.debug('listCtrl.deleteList');
    //   $http.delete(this.listUrl + '/' + list._id, this.config)
    //   .then(res => {
    //     this.lists.splice(this.lists.indexOf(list), 1);
    //   }, err => {
    //     $log.error('error!', err);
    //   })
    // };

    // this.updateList = function(list) {
    //   $log.debug('listCtrl.updateList');
    //   $http.put(this.listUrl + '/' + list._id, list, this.config)
    //   .then(res => {
    //     list.editing = false;
    //   }, err => {
    //     $log.error('error!', err);
    //   });
    // };

    // this.createList = function(list) {
    //   $log.debug('listCtrl.createList');
    //   $http.post(this.listUrl , list, this.config)
    //   .then(res => {
    //     $log.log('success!', res.data);
    //     this.lists.push(res.data);
    //   })   
    //   .catch( err => {
    //     $log.error('error!', err);
    //   });
    // };
  }]);
};
