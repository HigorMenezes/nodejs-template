require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

const app = {
	port: process.env.PORT,
}

module.exports = app
