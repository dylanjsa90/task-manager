'use strict';

module.exports = (app) => {
  app.controller('ListFormController', ['listService', 'auth', function(listService, auth) {
    this.list = {};
    // this.token = auth.getToken();
    // this.config.headers['Authorization'] = this.token;
    this.createList = function() {
      listService.createList(this.list, this.config).then(() => {
        this.list = {};
      }).catch(() => {
        this.list = {};
        alert('List creation failed');
      });
    };

    // this.saveAndClear = () => {
    //   this.save({list: this.list});
    //   if (!$scope.list) this.list = null;
    // };
  }]);
};