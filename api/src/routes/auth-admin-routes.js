module.exports = (app) => {
  const router = require('express').Router()
  const controller = require('../controllers/admin/weather-controller')

  router.post('/', controller.create)

  app.use('/api/auth/admin/routes', router)
}
