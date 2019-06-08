const { User } = require('../models')

const usersController = {
	create: async (req, res) => {
		try {
			await User.create(req.body)
		} catch (err) {
			console.error(err)
			res.status(500).send({ code: 500, message: 'Error during user create' })
		}
		res.status(201).send({ code: 201, message: 'User created with success' })
	},
}
module.exports = usersController
