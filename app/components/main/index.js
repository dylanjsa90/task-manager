'use strict';

module.exports = function(app) {
  app.controller('MainController', ['listService', 'auth', '$location', function(listService, auth, $location) {
    this.lists = [];
    
    this.token = auth.getToken();
    if (!this.token) $location.path('/signup');
    this.config.headers['Authorization'] = 'Bearer ' + this.token;

    listService.fetchLists().then((lists) => {
      this.lists = lists;
    }).catch(err => {
      alert('error ' + err.status);
    });

    this.createList = function() {
      listService.createList(this.list, this.config).then(() => {
        this.list = {};
        this.lists = listService.lists;
      }).catch(() => {
        this.list = {};
        alert('List creation failed');
      });
    };
    
  }]);
  app.directive('dsMain', function() {
    return {
      restrict: 'E',
      // replace: true,
      template: require('./main.html'),
      controller: 'MainController',
      controllerAs: 'mainCtrl',
      bindToController: true,
      scope: {
        config: '='
      },
    };
  });
};