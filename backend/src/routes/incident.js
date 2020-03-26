const express = require('express')
const IncidentController = require('../controllers/IncidentController')

const routes = express.Router()

routes.get('/incident', IncidentController.index)

routes.post('/incident', IncidentController.create)

const incidentRoute = routes

module.exports = incidentRoute
