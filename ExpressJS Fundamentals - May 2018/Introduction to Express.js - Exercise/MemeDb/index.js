const http = require('http')
const url = require('url')
const handlers = require('./handlers/handlerBlender')
const db = require('./config/dataBase')

const config = require('./config/dbConfig')
const express = require('express')

const env = process.env.NODE_ENV || 'development'

const port = process.env.port || 2323

let app = express()

db(config[env])

require('./config/express')(app, config[env])
require('./config/routes')(app)

app.listen(port)
