const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'DATABASE_CREDENTIALS',
        mongodb_password: 'DATABASE_CREDENTIALS',
        mongodb_clustername: 'DATABASE_CREDENTIALS',
        mongodb_database: 'DATABASE_CREDENTIALS',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'DATABASE_CREDENTIALS',
      mongodb_password: 'DATABASE_CREDENTIALS',
      mongodb_clustername: 'DATABASE_CREDENTIALS',
      mongodb_database: 'DATABASE_CREDENTIALS',
    },
  };
};
