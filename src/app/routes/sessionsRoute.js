const sessionsController = require('../controllers/sessionsController')

const sessions = app => {
  app.post('/sessions', sessionsController.store)
}

module.exports = sessions
