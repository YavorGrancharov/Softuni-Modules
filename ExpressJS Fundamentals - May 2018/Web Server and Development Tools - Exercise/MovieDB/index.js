const http = require('http')
const port = 8080

const handlers = require('./handlers')

console.log(`Listening to port ${port}`)

http.createServer((req, res) => {
    for (let handler of handlers) {
        if (!handler(req, res)) {
            break
        }
    }
}).listen(port)