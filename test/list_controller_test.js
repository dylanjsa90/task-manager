'use strict';

describe('testing list-controller', function(){
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  const baseUrl = 'http://localhost:3000/api/list';
  beforeEach(() => {
    require('../app/components/list')(angular.mock.module('listApp'));
    angular.mock.inject(($controller, $httpBackend) => {
      this.listCtrl = new $controller('ListController');
      this.$httpBackend = $httpBackend;
    });
  });

  it('testing createList', () => {
    let requestData = {name: 'example name'};

    this.$httpBackend.expectPOST(baseUrl, requestData, headers)
    .respond(200, {
      name: 'example name',
      _id: '1234',
      __v: 0,
      notes: [],
    });
    this.listCtrl.createList(requestData);
    this.$httpBackend.flush();
  });

  it('testing get all Lists', () => {
    this.$httpBackend.expectGET(baseUrl, headers)
      .respond(200, {
        name: 'example name',
        _id: '1234',
        __v: 0,
        notes: [],
      });

    this.listCtrl.getLists();
    this.$httpBackend.flush();
  });

  it('testing delete list', () => {
    let requestData = '1234';
    this.$httpBackend.expectDELETE(baseUrl + '/' + requestData, headers)
      .respond(200, {
        msg: 'success'
      });
    this.listCtrl.deleteList({_id: '1234'});
    this.$httpBackend.flush(); 
  });

});
