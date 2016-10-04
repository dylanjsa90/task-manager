'use strict';

module.exports = (app) => {
  app.controller('ListFormController', ['$scope', function($scope) {
    this.list = $scope.list || {};
    this.buttonText = $scope.buttonText;
    this.save = $scope.save;
    this.saveAndClear = () => {
      this.save({list: this.list});
      if (!$scope.list) this.list = null;
    };
  }]);
};