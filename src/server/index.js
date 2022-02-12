const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const keys = require('./keys')

const port = process.env.PORT || 5000
const clientPath = path.join(__dirname, 'assets')

mongoose.connect(keys.mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error(err))

const server = express()
server.use(express.static(clientPath))

server.listen(port, () => {
    console.log(`server start port: ${port}`)
})