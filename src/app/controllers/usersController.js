const { User } = require('../models')

const usersController = {
	listAll: async (req, res) => {
		try {
			const users = await User.findAll({
				attributes: {
					exclude: ['passwordHash'],
				},
			})

			return res.status(200).send({
				code: 200,
				message: 'Users recovered with success',
				content: {
					users,
				},
			})
		} catch (err) {
			console.error(err)
			return res.status(500).send({
				code: 500,
				message: 'Error during user create',
			})
		}
	},
	createGuide: async (req, res) => {
		try {
			const json = {
				endpoint: '/users',
				method: 'POST',
				body: {
					name: {
						type: 'string',
						required: true,
						description: 'user name',
					},
					email: {
						type: 'string',
						required: true,
						description: 'user email',
					},
					password: {
						type: 'string',
						required: true,
						description: 'user password',
					},
				},
			}

			return res.status(200).send({
				code: 200,
				message: 'User creation guide recovered with success',
				content: {
					json,
				},
			})
		} catch (err) {
			console.error(err)
			return res.status(500).send({
				code: 500,
				message: 'Error during user create',
			})
		}
	},
	create: async (req, res) => {
		try {
			if (req.body && req.body.name && req.body.email && req.body.password) {
				await User.create(req.body)
			} else {
				return res.status(400).send({
					code: 400,
					message: 'Some data are missing, use /users/new to more information',
				})
			}

			return res.status(201).send({
				code: 201,
				message: 'User created with success',
			})
		} catch (err) {
			console.error(err)
			return res.status(500).send({
				code: 500,
				message: 'Error during user create',
			})
		}
	},
	listById: async (req, res) => {
		try {
			let user = {}
			if (req.params && req.params.id) {
				const userId = req.params.id
				user = await User.findOne({
					attributes: {
						exclude: ['passwordHash'],
					},
					where: {
						id: userId,
					},
				})
			} else {
				return res.status(400).send({
					code: 400,
					message: 'Some data are missing',
				})
			}

			if (!user) {
				return res.status(404).send({
					code: 404,
					message: 'User not found',
				})
			}

			return res.status(200).send({
				code: 200,
				message: 'User recovered with success',
				content: {
					user,
				},
			})
		} catch (err) {
			console.error(err)
			return res.status(500).send({
				code: 500,
				message: 'Error during user create',
			})
		}
	},
	editGuide: async (req, res) => {
		try {
			const json = {
				endpoint: '/users/:id',
				method: 'PATCH',
				body: {
					name: {
						type: 'string',
						required: false,
						description: 'user name',
					},
					email: {
						type: 'string',
						required: false,
						description: 'user email',
					},
					password: {
						type: 'string',
						required: false,
						description: 'user password',
					},
				},
			}

			return res.status(200).send({
				code: 200,
				message: 'User edition guide recovered with success',
				content: {
					json,
				},
			})
		} catch (err) {
			console.error(err)
			return res.status(500).send({
				code: 500,
				message: 'Error during user create',
			})
		}
	},
	edit: async (req, res) => {
		try {
			if (
				req.params &&
				req.body &&
				(req.body.name || req.body.email || req.body.password)
			) {
				const userId = req.params.id
				const [user] = await User.update(req.body, {
					where: {
						id: userId,
					},
				})
				if (!user) {
					return res.status(404).send({
						code: 404,
						message: 'User not found',
					})
				}
			} else {
				return res.status(400).send({
					code: 400,
					message:
						'Some data are missing, use /users/:id/edit to more information',
				})
			}

			return res.status(200).send({
				code: 200,
				message: 'User edited with success',
			})
		} catch (err) {
			console.error(err)
			return res.status(500).send({
				code: 500,
				message: 'Error during user create',
			})
		}
	},
	delete: async (req, res) => {
		try {
			if (req.params && req.params.id) {
				const userId = req.params.id
				User.destroy({
					where: {
						id: userId,
					},
					raw: true,
				})
			} else {
				return res.status(400).send({
					code: 400,
					message: 'Some data are missing',
				})
			}

			return res.status(200).send({
				code: 200,
				message: 'User deleted with success',
			})
		} catch (err) {
			console.error(err)
			return res.status(500).send({
				code: 500,
				message: 'Error during user create',
			})
		}
	},
}

module.exports = usersController
