'use strict';


module.exports = function(app) {
  require('./list_form_ctrl')(app);
  require('./list_form_directive')(app);
};