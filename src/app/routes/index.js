const routes = app => {
  app.get('/', (req, res) => res.status(200).send('Server is running'));
};

module.exports = routes;
