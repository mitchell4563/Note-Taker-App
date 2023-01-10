
const express = require('express')
const app = express()
const port = 3001
const noteData = require('./db/db.json')

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})