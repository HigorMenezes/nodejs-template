const request = require('supertest')
// const factory = require('../factories')
const faker = require('faker')
const app = require('../../src/app')
const truncate = require('../utils/truncate')

describe('Users - create', () => {
	beforeEach(async () => {
		await truncate()
	})

	it('should create user with a valid request', async () => {
		const response = await request(app)
			.post('/users')
			.send({
				name: faker.name.findName(),
				email: faker.internet.email(),
				password: faker.internet.password(),
			})
		console.info(response.body)
		expect(response.status).toBe(201)
	})

	it('should not create user without body', async () => {
		const response = await request(app).post('/users')

		console.info(response.body)
		expect(response.status).toBe(400)
	})

	it('should not create user without name', async () => {
		const response = await request(app)
			.post('/users')
			.send({
				email: faker.internet.email(),
				password: faker.internet.password(),
			})
		console.info(response.body)
		expect(response.status).toBe(400)
	})

	it('should not create user without email', async () => {
		const response = await request(app)
			.post('/users')
			.send({
				name: faker.name.findName(),
				password: faker.internet.password(),
			})
		console.info(response.body)
		expect(response.status).toBe(400)
	})

	it('should not create user without password', async () => {
		const response = await request(app)
			.post('/users')
			.send({
				name: faker.name.findName(),
				email: faker.internet.email(),
			})
		console.info(response.body)
		expect(response.status).toBe(400)
	})
})

describe('Users - createGuide', () => {
	it('should recover a user create guide', async () => {
		const response = await request(app)
			.post('/users')
			.send({
				name: faker.name.findName(),
				email: faker.internet.email(),
				password: faker.internet.password(),
			})
		console.info(response.body)
		expect(response.status).toBe(201)
	})
})
