const express = require('express')
const bodyParser = require('body-parser')

const addNotes = require('./routes/addNotes')
const deleteNotes = require('./routes/deleteNotes')
const editNotes = require('./routes/editNotes')
const getNotes = require('./routes/getNotes')

const app = express()
app.use(bodyParser.json())
app.use(addNotes)
app.use(deleteNotes)
app.use(editNotes)
app.use(getNotes)

app.get('/', (req, res) => {
  res.send('hello world!')
})

app.listen(3000, () => {
  console.log(`server is listening on http://localhost:3000`);
})