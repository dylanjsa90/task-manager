'use strict';

module.exports = (app) => {
  app.component('signIn', {
    controller: 'AuthController',
    template: require('./sign_in_template.html'),
    bindings: {
      baseUrl: '<'
    }
  });
};