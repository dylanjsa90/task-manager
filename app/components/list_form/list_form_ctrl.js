'use strict';

module.exports = (app) => {
  app.controller('ListFormController', ['listService', 'auth', function(listService, auth) {
    this.list = {};
    this.createList = function() {
      listService.createList(this.list, this.config).then(() => {
        this.list = {};
      }).catch(() => {
        this.list = {};
        alert('List creation failed');
      });
    };
  }]);
};