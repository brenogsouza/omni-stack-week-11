const express = require('express')
const cors = require('cors')

const ongRoute = require('./routes/ong')
const incidentRoute = require('./routes/incident')
const profileRoute = require('./routes/profile')
const sessionRoute = require('./routes/session')

const app = express();

app.use(cors())

app.use(express.json())

app.use(ongRoute)
app.use(incidentRoute)
app.use(profileRoute)
app.use(sessionRoute)

app.listen(3333)