'use strict';

module.exports = function(app) {
  require('./auth_service')(app);
  require('./list_service')(app);
  require('./note_service')(app);
};