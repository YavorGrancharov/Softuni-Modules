const homeHandler = require('./home')
const filesHandler = require('./static')
const movieHandler = require('./movie')
const statusHandler = require('./status')

module.exports = [homeHandler, filesHandler, movieHandler, statusHandler]