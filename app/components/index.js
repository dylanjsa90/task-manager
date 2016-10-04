'use strict';

module.exports = function(app) {
  require('./sign_out')(app);
  require('./sign_up')(app);
  require('./sign_in')(app);
  require('./list_form')(app);
  require('./list')(app);
};