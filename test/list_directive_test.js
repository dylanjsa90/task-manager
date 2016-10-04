'use strict';

const angular = require('angular');
let testApp = angular.module('testApp', []);
// require('../app/entry.js');
// let testApp = angular.module('testApp', []);
// let listCtrl = require('../app/components/list_directive_ctrl')(testApp);
require('../app/components/list')(testApp);

// (testApp);

describe('List directive', function() {
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($compile, $rootScope, $httpBackend) {
    this.compile = $compile;
    this.$httpBackend = $httpBackend;
    // this.listCtrl = $controller('ListController');
    this.scope = $rootScope.$new();
    this.scope.lists = [{name: 'test 1', notes: [{name:'test note 1', content: 'test'},{name:'test note 2', content: 'test2'}]}, 
    {name: 'test 2', notes: [{name: 'l2t1'}, {name: 'l2t2'}]}];
      // _id: '123',
      // name: 'testList',
      // notes: [] 

  }));

  // it('it should ? a note', function() {
    // this.scope.$digest();
    // let ctrl = listDirective.isolateScope().ctrl
    // let scope = {lists: this.lists};

  // });

  it('should list the lists', function() {
    // let iScope = this.testList.isolateScope();
    let elem = angular.element('<div ds-list data-lists="lists"></div>');
    let noteList = this.compile(elem)(this.scope);
    this.scope.$digest();
    expect(noteList.find('h3').text()).toBe('test 1');
    expect(noteList.find('ul').text()).toBe(this.scope.notes.length);

  });

  it('should remove a list', function() {
    let elem = angular.element('<div ds-list data-lists="lists"></div>');
    // let noteList = this.compile(elem)(this.scope);
    this.scope.$digest();
    // noteList.find('button')[0].click();
    // noteList.triggerHandler('input');
    expect(this.scope.notes.length).toBe(2);
  });

});