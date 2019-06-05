import express from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import config from './config'
import route from './routes'

const app = express()

app.use(compression())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

route(app)

app.listen(config.app.port, () => {
	console.log(`Server is listening on port ${config.app.port}`)
})

console.log(`
		db conection: 
			host: ${config.db.host}
			port: ${config.db.port}
			name: ${config.db.name}
`)
