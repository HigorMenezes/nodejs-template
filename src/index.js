const config = require('./config/appConfig')
const app = require('./app')

app.listen(config.port, () => {
	console.info(`Server is running on port ${config.port}`)
})
