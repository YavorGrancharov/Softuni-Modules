const Order = require('mongoose').model('Order')

async function create(data) {
    const creator = data.creator
    const product = data.product.id
    const toppings = []
    for (let key in data) {
        if (!data.hasOwnProperty(key)) continue
        if (key !== 'creator' && key !== 'product_id') {
            toppings.push(key)
        }
    }
    return await Order.create({
        creator,
        product,
        toppings
    })
}

module.exports = {
    create
}