const authMiddleware = require('../middlewares/authMiddleware')

const sessions = app => {
	app.get('/home', authMiddleware, async (req, res) => {
		return res.status(200).send()
	})
}

module.exports = sessions
