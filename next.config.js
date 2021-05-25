const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'YOUR_DATA',
        mongodb_password: 'YOUR_DATA',
        mongodb_clustername: 'YOUR_DATA',
        mongodb_database: 'YOUR_DATA',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'YOUR_DATA',
      mongodb_password: 'LYOUR_DATA',
      mongodb_clustername: 'YOUR_DATA',
      mongodb_database: 'YOUR_DATA',
    },
  };
};
