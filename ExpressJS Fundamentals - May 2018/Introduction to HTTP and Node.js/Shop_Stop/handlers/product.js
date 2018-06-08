const url = require('url')
const database = require('../config/database')
const fs = require('fs')
const path = require('path')
const qs = require('querystring')
const multiparty = require('multiparty')
const shortid = require('shortid')

module.exports = (req, res) => {
    req.pathname = req.pathname || url.parse(req.url).pathname

    if (req.pathname === '/products/addProduct' && req.method === 'GET') {
        let filePath = path.normalize(path.join(__dirname, '../views/products/addProduct.html'))

        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err)
                res.writeHead(404, {
                    'Content-type': 'text/plain'
                })

                res.write('404 not found')
                res.end()
                return
            }

            res.writeHead(200, {
                'Content-type': 'text/html'
            })

            res.write(data)
            res.end()
        })
    } else if (req.pathname === '/products/addProduct' && req.method === 'POST') {
        let form = new multiparty.Form()
        let product = {}

        form.on('part', (part) => {
            if (part.filename) {
                let body = ''

                part.setEncoding('binary')
                part.on('data', (data) => {
                    body += data
                })

                part.on('end', () => {
                    console.log(part.filename)
                    let extension = part.filename.split('.').pop()
                    let fileName = shortid.generate()
                    let filePath = `./content/images/${fileName}.${extension}`

                    product.image = filePath
                    fs.writeFile(
                        filePath, body, { endcoding: 'ascii' }, (err) => {
                            if (err) {
                                console.log(err)
                                return
                            }
                        })
                })
            } else {
                part.setEncoding('utf-8')
                let field = ''
                part.on('data', (data) => {
                    field += data
                })

                part.on('end', () => {
                    product[part.name] = field
                })
            }
        })

        form.on('close', () => {
            database.products.addProduct(product)
            res.writeHead(302, {
                'Location': '/'
            })

            res.end()
        })

        form.parse(req)
    } else {
        return true
    }
}