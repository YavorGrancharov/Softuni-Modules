const fs = require('fs')

let storage = {}

module.exports = {
    put: (key, value) => {
        if (typeof key !== 'string') {
            throw new TypeError('Key is not a string')
        }
        if (storage.hasOwnProperty(key)) {
            throw new Error('Key already exists')
        }
        storage[key] = value
    },
    get: (key) => {
        if (typeof key !== 'string') {
            throw new TypeError('Invalid key')
        }
        if (!storage.hasOwnProperty(key)) {
            throw new Error('Key does not exists')
        }
        return storage[key]
    },
    getAll: () => {
        if (Object.keys(storage).length === 0) {
            return 'Storage is empty'
        }
        return storage
    },
    update: (key, newValue) => {
        if (typeof key !== 'string') {
            throw new TypeError('Key is not a string')
        }
        if (!storage.hasOwnProperty(key)) {
            throw new Error('Key is not present in the collection')
        }
        return storage[key] = newValue
    },
    delete: (key) => {
        if (!storage.hasOwnProperty(key)) {
            throw new Error('Key is not present in the collection')
        }
        return delete storage[key]
    },
    clear: () => {
        return storage = {}
    },
    save: () => {
        let json = JSON.stringify(storage, null, '\t')
        fs.writeFile('./storage.json', json, 'utf8', function(err) {
            if (err) {
                console.log(err)
                return
            }
            console.log('Saved')
        })
    },
    load: () => {
        if (fs.existsSync('./storage.json')) {
            console.log(true)
            fs.readFile('./storage.json', 'utf8', (err, data) => {
                if (err) {
                    console.log(err)
                    return
                }

                let database = JSON.parse(data)
                if (Object.keys(database).length > 0) {
                    storage = data
                }
            })
        } else {
            fs.writeFile('./storage.json', JSON.stringify({}, null, '\t'), (err) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log('Storage created')
            })
        }
    }
} 