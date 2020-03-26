const express = require('express')
const ProfileController = require('../controllers/ProfileController')

const routes = express.Router()

routes.get('/profile', ProfileController.index)

const profileRoute = routes

module.exports = profileRoute
