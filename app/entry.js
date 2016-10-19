'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
let listApp = angular.module('listApp', [require('angular-route'), require('angular-jwt')]);

require('./services')(listApp);
require('./controller')(listApp);
require('./components')(listApp);

listApp.run(['$rootScope', ($rs) => {
  $rs.baseUrl = `${__API_URL__}`;
  $rs.noteHttpConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Accept-Content': 'application/json'
    }
  };
}]);

listApp.config(['$routeProvider', '$httpProvider', ($rp, $httpProvider) => {
  $httpProvider.defaults.headers.post = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };
  $rp
    .when('/notes', {
      template: require('./html/notes.html')
    })
    .when('/signup', {
      template: require('./html/sign_up.html')
    })
    .when('/signin', {
      template: require('./html/sign_in.html')
    })
    .when('/home', {
      template: require('./html/notes.html'),
    })
    .otherwise({
      redirectTo: '/notes'
    });
}]);


