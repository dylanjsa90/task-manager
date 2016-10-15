'use strict';

module.exports = (app) => {
  app.controller('signOutController', ['auth', function(auth) {
    this.currentUser = auth.getUser();
  }])
  app.component('signOut', {
    controller: 'signOutController',
    template: require('./sign_out_template.html')
  });
};