const bcrypt = require('bcryptjs')
const { User } = require('../../src/app/models')
const truncate = require('../utils/truncate')

describe('User', () => {
	beforeEach(async () => {
		await truncate()
	})

	it('should encrypt user password', async () => {
		const user = await User.create({
			name: 'Higor Menezes',
			email: 'higor@1234.com',
			password: '123',
		})

		expect(await bcrypt.compare('123', user.passwordHash)).toBe(true)
	})
})
