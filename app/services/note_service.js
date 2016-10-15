'use strict';

module.exports = function(app) {
  app.factory('noteService', ['$q', '$http', function($q, $http) {
    let service = {};
    let url = `${__API_URL__}/api/note`;
    let config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    };

    service.createNote = function(data) {
      return $q((resolve, reject) => {
        $http.post(url, data, config).then(res => {
          resolve(res.data);
        })
        .catch(err => reject(err));
      });
    };

    service.deleteNote = function(noteId) {
      return $q((resolve, reject) => {
        $http.delete(`${url}/${noteId}`, config)
          .then(res => {
            resolve(res.data);
          })
          .catch(err => {
            reject(err);
          });
      });
    };

    service.updateNote = function(noteId, data) {
      return $q((resolve, reject) => {
        $http.put(`${url}/${noteId}`, data, config).then(res => {
          resolve(res.data);
        }).catch(err => reject(err));
      });
    };
    return service;

  }]);
};