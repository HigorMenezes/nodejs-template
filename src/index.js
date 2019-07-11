const appConfig = require('./config/appConfig');
const app = require('./app');

app.listen(appConfig.port, () => {
  console.info(`Server is running on port ${appConfig.port}`);
});
