const users = require('./usersRoute')

const routes = app => {
	app.get('/', (req, res) => res.status(200).send('Server is running'))

	users(app)
}

module.exports = routes
