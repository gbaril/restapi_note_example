const express = require('express')
const bodyParser = require('body-parser')
const note = require('./note')
const cors = require("cors")

const app = express()
app.use(cors())

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('hello world !')
})

app.get('/note', async (req, res) => {
    res.send(await note.getNotes())
})

app.post('/note', async (req, res) => {
    const insertedId = await note.insertNote(req.body)
    res.send(insertedId) 
})

app.listen(3001, () => {
    console.log('Api listening on port 3001')
})