const express = require('express')
const db = require('../controller/dbController')

const app = express.Router()

// Updating data with 404 reponse
app.patch('/notes', (req, res) => {
    const body = req.body
    // const id = body.id
    const id = req.query.id
    const isIdAvailable = db.get(id)
    if (isIdAvailable) {
        db.edit(id, body)
        res.send(body)
    } else {
        res.status(404).send("Not found")
    }
})

module.exports = app