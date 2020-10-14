const express = require('express')
const db = require('../controller/dbController')

const app = express.Router()

app.get('/notes', (req, res) => {
    let result = db.getAll()
    res.send(result)
})

module.exports = app