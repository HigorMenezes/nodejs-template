import HomeController from '../controllers/HomeController'
import Middleware from '../middlewares/Middleware'

const home = app => {
	app.get('/home', Middleware, HomeController.hello)
}

export default home
