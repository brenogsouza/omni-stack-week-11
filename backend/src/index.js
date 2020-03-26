const express = require('express')

const app = express();
app.use(express.json())

app.post('/users', (req, res) => {
  return res.json({
    evento: "teste",
    aluno: "Breno"
  })
})

app.listen(3333)