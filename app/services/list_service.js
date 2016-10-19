'use strict';

module.exports = function(app) {
  app.factory('listService', ['$q', '$http', 'auth', '$rootScope', function ($q, $http, auth, $rootScope) {
    let service = {};
    let url = `${__API_URL__}/api/list`;
    service.lists = [];

    service.createList = function(data, config) {
      console.log('creating list...');
      return $q((resolve, reject) => {
        $http.post(url, data, config)
        .then(res => {
          this.lists.push(res.data);
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
      });
    };

    service.fetchLists = function() {
      return $q((resolve, reject) => {
        $http.get(url)
          .then(res => {
            this.lists = res.data;
            resolve(res.data);
          })
          .catch(err => {
            reject(err);
          });
      });
    };

    service.updateList = function(data) {
      return $q((resolve, reject) => {
        $http.put(`${url}/api/${data._id}`, data).then(res => {
          this.lists.forEach((list, index) => {
            if (list._id === res.data._id) this.lists[index] = res.data;
          });
          resolve(res.data);
        })
        .catch(err => reject(err));
      });
    };

    service.deleteList = function(listId) {
      return $q((resolve, reject) => {
        $http.delete(`${url}/${listId}`).then((res) => {
          this.lists.forEach((list, index) => {
            if (list._id === listId) this.lists.splice(index, 1);
          });
          resolve(res.data);
        })
        .catch(err => reject(err));
      });

    };
    return service;
  }]);
};