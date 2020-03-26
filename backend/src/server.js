const express = require('express')
const ongRoute = require('./routes/ong')
const incidentRoute = require('./routes/incident')

const app = express();

app.use(express.json())
app.use(ongRoute)
app.use(incidentRoute)

app.listen(3333)