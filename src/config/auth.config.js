const { SECRET } = require('./variables.config');

module.exports = {
  secret: SECRET,
  // 1 hour
  // jwtExpiration: 3600,
  // 24 hours
  // jwtRefreshExpiration: 86400,

  /* test */
  // 1 minute
  jwtExpiration: 60,
  // 2 minutes
  jwtRefreshExpiration: 120,
};
