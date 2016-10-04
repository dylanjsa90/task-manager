'use strict';

module.exports = (app) => {
  app.controller('ListController', ['$log', '$http', 'auth', function ($log, $http, auth) {
    this.lists = [];
    this.token = auth.getToken();
    this.listUrl = this.baseUrl + '/api/list';
    this.config.headers['Authorization'] = 'Bearer ' + this.token;
    this.getAllLists = function() {
      $log.debug('listCtrl.getAllLists');
      $http.get(this.listUrl, this.config)
      .then(res => {
        this.lists = res.data;
      }, err => {
        $log.error('error!', err);
      });
    };

    this.deleteList = function(list) {
      $log.debug('listCtrl.deleteList');
      $http.delete(this.listUrl + '/' + list._id, this.config)
      .then(res => {
        this.lists.splice(this.lists.indexOf(list), 1);
      }, err => {
        $log.error('error!', err);
      })
    };

    this.updateList = function(list) {
      $log.debug('listCtrl.updateList');
      $http.put(this.listUrl + '/' + list._id, list, this.config)
      .then(res => {
        list.editing = false;
      }, err => {
        $log.error('error!', err);
      });
    };

    this.createList = function(list) {
      $log.debug('listCtrl.createList');
      $http.post(this.listUrl , list, this.config)
      .then(res => {
        $log.log('success!', res.data);
        this.lists.push(res.data);
      })   
      .catch( err => {
        $log.error('error!', err);
      });
    };
  }]);
};
