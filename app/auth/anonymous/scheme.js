exports = module.exports = function(verify) {
  var Strategy = require('passport-anonymous');
  
  return new Strategy();
};

exports['@implements'] = 'x-http://i.bixbyjs.org/http/auth/Scheme';
exports['@scheme'] = 'anonymous';
exports['@require'] = [];
