require('dotenv').config();
let env = process.env.NODE_ENV || 'development';

let settings = require('./src/config/settings')[env];

const app = require('express')();

require('./src/config/database')(settings);
require('./src/config/express')(app);
require('./src/config/routes')(app);
require('./src/config/passport')();

app.listen(settings.port);
console.log(`Server listening on port ${settings.port}`);