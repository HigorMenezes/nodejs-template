import dotenv from 'dotenv'

dotenv.config()

const app = {
	test: {
		port: process.env.TEST_APP_PORT || 3000,
	},
	development: {
		port: process.env.DEVELOPMENT_APP_PORT || 3001,
	},
	production: {
		port: process.env.PRODUCTION_APP_PORT || 3002,
	},
}

export default app[process.env.NODE_ENV || 'test']
