const port = 3000
const config = require('./config/config')
const database = require('./config/database.config')
const express = require('express')

let app = express()
let enviroment = process.env.NODE_enviroment || 'development'


database(config[enviroment])
require('./config/express')(app, config[enviroment])
require('./config/routes')(app)

app.listen(port)