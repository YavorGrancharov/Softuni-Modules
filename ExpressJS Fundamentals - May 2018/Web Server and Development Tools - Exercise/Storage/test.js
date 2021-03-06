const storage = require('./storage.js')

storage.put('first', 'second')
storage.put('second', 'third')
storage.put('fourth', 'fifth')
storage.put('sixt', 'seventh')
console.log(storage.get('first', 'second'))
console.log(storage.get('second', 'third'))
console.log(storage.getAll())
console.log(storage.update('first', 3))
console.log(storage.delete('first'))
console.log(storage.getAll())
storage.save(() => {
    storage.clear()
    storage.getAll()
    storage.load(() => {
        console.log(storage.getAll())
    })
})
//console.log(storage.clear())