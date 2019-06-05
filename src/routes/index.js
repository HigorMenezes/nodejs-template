import HomeRoute from './HomeRoute'

const route = app => {
	app.get('/', (req, res) => {
		res.send('Server is running')
	})
	HomeRoute(app)
}

export default route
