const usersController = require('../controllers/usersController')

const users = app => {
	app.post('/users/', usersController.create)
}

module.exports = users
