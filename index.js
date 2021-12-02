const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send({ message: 'I\'m express: Hello World!' })
})

app.post('/', (req, res) => {
  res.send({ hola: 'I\'m express: Hello World!' })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})