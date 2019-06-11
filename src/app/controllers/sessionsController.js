const { User } = require('../models')

const sessionController = {
  store: async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ where: { email } })

    if (!user) {
      return res.status(404).send({ code: 404, message: 'User not found' })
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).send({ code: 401, message: 'Invalid password' })
    }

    return res.status(200).send({
      code: 200,
      message: 'Session validate with success',
      token: user.generateToken(),
    })
  },
}
module.exports = sessionController
