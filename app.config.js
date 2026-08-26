const appJson = require('./app.json');

module.exports = () => {
  const expoConfig = appJson.expo;

  if (process.env.GH_PAGES === 'true') {
    return {
      ...expoConfig,
      experiments: {
        ...expoConfig.experiments,
        baseUrl: '/three-six-eight-app',
      },
    };
  }

  return expoConfig;
};
