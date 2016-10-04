'use strict';

module.exports = function(app) {
  require('./list_directive_ctrl')(app);
  require('./list_directive')(app);
};