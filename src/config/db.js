import dotenv from 'dotenv'

dotenv.config()

const db = {
	test: {
		host: process.env.TEST_DB_HOST || 'localhost',
		port: process.env.TEST_DB_PORT || 5432,
		name: process.env.TEST_DB_NAME || 'testdb',
	},
	development: {
		host: process.env.DEVELOPMENT_DB_HOST || 'localhost',
		port: process.env.DEVELOPMENT_DB_PORT || 5432,
		name: process.env.DEVELOPMENT_DB_NAME || 'developmentdb',
	},
	production: {
		host: process.env.PRODUCTION_DB_HOST || 'localhost',
		port: process.env.PRODUCTION_DB_PORT || 5432,
		name: process.env.PRODUCTION_DB_NAME || 'productiondb',
	},
}

export default db[process.env.NODE_ENV || 'test']
