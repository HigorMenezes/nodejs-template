const HomeController = {
	hello: async (req, res) => {
		res.send(`${req.middleware || ''} Hello Home`)
	},
}

export default HomeController
