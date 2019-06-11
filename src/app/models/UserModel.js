const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const appConfig = require('../../config/appConfig')

module.exports = (sequelize, DataType) => {
  const User = sequelize.define(
    'User',
    {
      name: DataType.STRING,
      email: DataType.STRING,
      password: DataType.VIRTUAL,
      passwordHash: DataType.STRING,
    },
    {
      hooks: {
        beforeSave: async user => {
          if (user.password) {
            user.passwordHash = await bcrypt.hash(user.password, 8)
          }
        },
      },
    },
  )

  User.prototype.checkPassword = function(password) {
    return bcrypt.compare(password, this.passwordHash)
  }

  User.prototype.generateToken = function() {
    return jwt.sign({ id: this.id }, appConfig.secret, { expiresIn: '1d' })
  }

  return User
}
