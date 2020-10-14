const express = require('express')
const db = require('../controller/dbController')

const app = express.Router()

app.post('/notes', (req, res) => {
    const body = req.body
    const id = body.id
    const isIdAvailable = db.get(id)
    if (isIdAvailable) {
        res.status(409).send('ID Exists')
    } else {
        db.add(body)
        res.send(body)
    }
})

module.exports = app