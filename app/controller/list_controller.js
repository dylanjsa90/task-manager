'use strict';

module.exports = function(app) {
  app.controller('ListController', ['$log', '$http', 'auth', ListController]);
};

function ListController($log, $http, auth) {
  this.token = auth.getToken();
  this.user = auth.user;
  this.config.headers['Authorization'] = 'Bearer ' + this.token;
  this.lists = [];
  this.noteUrl = `${this.baseUrl}/api/note`;
  this.listUrl = `${this.baseUrl}/api/list`;
  this.currentNote;
  this.notes = []; // Unnecessary but since I added the get method for the implemented route I figured I should add this as well
  

  // List CRUD methods
  this.getLists = function() {
    $log.debug('listCtrl : getLists()');
    $http.get(`${this.listUrl}/user/${this.user}`, this.config)
      .then( res => {
        $log.log('succes', res.data);
        this.lists = res.data;
      }, err => {
        $log.error('error', err);
      });

  };

  this.removeList = function(list) {
    list.user = this.user;
    $log.debug('listCtrl : removeList()');
    $http.delete(`${this.listUrl}/${list._id}`, this.config)
      .then(res => {
        $log.log('success', res.data);
        this.lists.splice(this.lists.indexOf(list), 1);
      }, err => {
        $log.error('error', err);
      });
  };

  this.updateList = function(list) {
    list.user = this.user;
    $log.debug('listCtrl : updateList()');
    $http.put(`${this.listUrl}/${list._id}`, list, this.config)
      .then(res => {
        $log.log('success', res.data);
        list.editing = false;

      }, err => {
        $log.error('error', err);
      });
  };

  this.addList = function(list) {
    $log.debug('listCtrl : addlist()');
    list.user = this.user;
    $http.post(`${this.listUrl}`, list, this.config)
      .then(res => {
        $log.log('success', res.data);
        this.lists.push(res.data);
      }, err => {
        $log.error('error', err);
      });
  };

  this.addNote = function(note) {
    $log.debug('listItemCtrl : addNote()');
    // let newNote = note;
    // newNote.listId = this.listId;
    $http.post(`${this.noteUrl}`, note, this.config)
      .then(res => {
        $log.log('success', res.data);
        this.list.notes.push(res.data);
      }, err => {
        $log.error('error', err);
      });
  };

  this.removeNote = (note) => {
    $log.debug('listItemCtrl : removeNote()');
    $http.delete(`${this.noteUrl}/${note._id}`, this.config)
      .then(res => {
        $log.log('success', res.data);
        this.list.notes.splice(this.notes.indexOf(note), 1);
      }, err => {
        $log.error('error', err);
      }); 
  };

  // Useless for this application but I figured why not since the routes already there
  this.getNotes = () => {
    $log.debug('listItemCtrl : getNotes()');
    $http.get(`${this.noteUrl}`, this.config)
      .then(res => {
        $log.log('success', res.data);
        this.list.notes = res.data;
      }, err => {
        $log.error('error', err);
      });
  };

  this.updateNote = (note) => {
    $log.debug('listItemCtrl : updateNote()');
    let newNote = note;
    newNote.listId = this.listId;
    $http.put(`${this.noteUrl}/${note._id}`, newNote, this.config)
      .then(res => {
        $log.log('success', res.data);
        this.list.notes.splice(this.notes.indexOf(note), 1);
      }, err => {
        $log.error('error', err);
      });
  };
}