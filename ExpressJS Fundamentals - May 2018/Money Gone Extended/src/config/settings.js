const path = require('path');
const MONGODB_URI =
  process.env.MONGODB_URL ||
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  "mongodb://localhost:27017/money-gone";

let rootPath = path.normalize(path.join(__dirname, '/../../'));

module.exports = {
  development: {
    rootPath: rootPath,
    db: MONGODB_URI,
    port: process.env.PORT || 3000,
  },
  staging: {},
  production: {
    port: process.env.PORT,
  },
};
