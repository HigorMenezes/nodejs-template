const jwt = require('jsonwebtoken')
const { promisify } = require('util')
const appConfig = require('../../config/appConfig')

module.exports = async (req, res, next) => {
	const authHeader = req.headers.authorization
	if (!authHeader) {
		return res.status(401).send({ code: 401, message: 'Token not provided' })
	}

	const [, token] = authHeader.split(' ')

	try {
		const decoded = await promisify(jwt.verify)(token, appConfig.secret)
		req.userId = decoded.id
	} catch (err) {
		return res.status(401).send({ code: 401, message: 'Invalid token' })
	}

	return next()
}
