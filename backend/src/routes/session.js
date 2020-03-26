const express = require('express')
const SessionController = require('../controllers/SessionController')

const routes = express.Router()

routes.post('/session', SessionController.create)

const sessionRoute = routes

module.exports = sessionRoute
