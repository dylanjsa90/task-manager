'use strict';

module.exports = function(app) {
  app.factory('auth', ['$window', 'jwtHelper', '$location', function($window, jwtHelper, $location) {
    return {
      currentUser: {},
      getToken: function(options) {
        options = options || {};
        if (this.token) return this.token; 
        if ($window.localStorage.token) return this.setToken($window.localStorage.token);
        if (!options.noRedirect) $location.path('/signup');
      },
      setToken: function(token) {
        $window.localStorage.token = token;  
        this.token = token;
        this.getUser();
        return token;
      },
      getUser: function() {
        let token = this.getToken({noRedirect: true});
        if (!token) return;
        let decoded = jwtHelper.decodeToken(token);
        console.log(decoded);
        this.currentUser.username = decoded.idd;
        return this.currentUser.username;
      },
      logOut: function() {
        $window.localStorage.token = '';
        this.currentUser = '';
        this.token = '';
        $location.path('signin');
      }
    };
  }]);
};