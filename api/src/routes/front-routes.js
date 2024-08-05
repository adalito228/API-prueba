module.exports = (app) => {
  const router = require('express').Router()
  const controller = require('../controllers/front/routes-controller.js')

  router.get('/', controller.findAll)

  app.use('/api/front/routes', router)
}
