const usersController = require('../controllers/usersController')

const users = app => {
  app.get('/users', usersController.listAll)

  app.get('/users/new', usersController.createGuide)
  app.post('/users', usersController.create)

  app.get('/users/:id', usersController.listById)

  app.get('/users/:id/edit', usersController.editGuide)
  app.patch('/users/:id', usersController.edit)

  app.delete('/users/:id', usersController.delete)
}

module.exports = users
