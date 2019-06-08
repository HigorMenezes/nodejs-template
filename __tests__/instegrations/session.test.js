const request = require('supertest')
const factory = require('../factories')
const app = require('../../src/app')
const truncate = require('../utils/truncate')

describe('Authentication - Login', () => {
	beforeEach(async () => {
		await truncate()
	})

	it('should authenticate with valid credentials', async () => {
		const user = await factory.create('User', {
			password: '123',
		})

		const response = await request(app)
			.post('/sessions')
			.send({ email: user.email, password: '123' })
		expect(response.status).toBe(200)
	})

	it('should not authenticate with invalid (password) credentials', async () => {
		const user = await factory.create('User', {
			password: '123',
		})

		const response = await request(app)
			.post('/sessions')
			.send({ email: user.email, password: '123456' })

		expect(response.status).toBe(401)
	})

	it('should not authenticate with invalid (e-mail) credentials', async () => {
		const user = await factory.create('User', {
			password: '123',
		})

		const response = await request(app)
			.post('/sessions')
			.send({ email: 'test@test.com', password: user.password })

		expect(response.status).toBe(404)
	})

	it('should return jwt token when authenticated', async () => {
		const user = await factory.create('User', {
			password: '123',
		})

		const response = await request(app)
			.post('/sessions')
			.send({ email: user.email, password: '123' })

		expect(response.body).toHaveProperty('token')
	})
})

describe('Authentication - Access', () => {
	beforeEach(async () => {
		await truncate()
	})

	it('should not be able to access private routes with jwt', async () => {
		const user = await factory.create('User', {
			password: '123',
		})

		const response = await request(app)
			.get('/home')
			.set('Authorization', `Bearer ${user.generateToken()}`)

		expect(response.status).toBe(200)
	})

	it('should not be able to access private routes without jwt', async () => {
		const response = await request(app).get('/home')

		expect(response.status).toBe(401)
	})

	it('should not be able to access private routes with invalid jwt', async () => {
		const response = await request(app)
			.get('/home')
			.set('Authorization', 'Bearer 123123')

		expect(response.status).toBe(401)
	})
})
