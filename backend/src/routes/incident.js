const express = require('express')
const IncidentController = require('../controllers/IncidentController')

const routes = express.Router()

routes.get('/incident', IncidentController.index)
routes.post('/incident', IncidentController.create)
routes.delete('/incident/:id', IncidentController.delete)

const incidentRoute = routes

module.exports = incidentRoute
