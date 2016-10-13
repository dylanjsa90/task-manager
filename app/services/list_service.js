'use strict';

module.exports = function(app) {
    app.factory('listService', ['$http', '$location', 'auth', function($http, $location, auth) {
        return {
            service: {},
        }
    }]);
}