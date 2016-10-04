'use strict';

module.exports = (app) => {
  app.component('signUp', {
    controller: 'AuthController',
    template: require('./sign_up_template.html'),
    bindings: {
      baseUrl: '<'
    }
  });
};