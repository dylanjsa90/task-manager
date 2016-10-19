'use strict';

module.exports = (app) => {
  // app.controller('signOutController', ['auth', function(auth) {
  //   this.user = auth.getUser();
  //   this.signOut = function() {
  //     auth.signOut();
  //   };
  // }]);

  app.component('signOut', {
    controller: 'AuthController',
    template: require('./sign_out_template.html')
  });
};