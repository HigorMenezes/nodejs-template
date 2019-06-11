const usersRoute = require('./usersRoute')
const sessionsRoute = require('./sessionsRoute')

const routes = app => {
  app.get('/', (req, res) => res.status(200).send('Server is running'))

  usersRoute(app)
  sessionsRoute(app)
}

module.exports = routes
