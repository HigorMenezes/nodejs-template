const Middleware = async (req, res, next) => {
	req.middleware = 'Passou pelo middleware: '
	next()
}

export default Middleware
