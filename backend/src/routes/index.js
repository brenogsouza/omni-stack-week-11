const express = require('express')

const routes = express.Router()

routes.post('/users', (req, res) => {
  return res.json({
    evento: "teste",
    aluno: "Breno GS Lopes"
  })
})

module.exports = routes