const routes = require('express').Router()

const { User } = require('./app/models')

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'bruno',
    email: 'bruno@email.com',
    password_hash: '123412'
  })

  return res.json(user)
})

module.exports = routes
