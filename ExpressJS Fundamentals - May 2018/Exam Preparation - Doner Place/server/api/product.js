const Product = require('mongoose').model('Product')

const availableToppings = ["pickle", "tomato", "onion", "lettuce", "hot sauce", "extra sauce"]

const categoryLabels = {
    "chicken": "Chicken doner", 
    "beef": "Beef doner",
    "lamb": "Lamb doner"
}

async function create(data) {
    const {
        category,
        size,
        imageUrl,
    } = data

    const toppings = data.toppings
        .split(',')
        .map(el => el.trim())
        .filter(el => el.length > 0 && availableToppings.includes(el))
        
    return await Product.create({
        category,
        size: Number(size),
        imageUrl,
        toppings
    })
}

async function getAll() {
    const products = await Product.find({})
    const chicken = products.filter(pr => pr.category === 'chicken')
    const beef = products.filter(pr => pr.category === 'beef')
    const lamb = products.filter(pr => pr.category === 'lamb')
    return {
        chicken,
        beef, 
        lamb
    }
}

async function getById(id) {
    const product = await Product.findById(id)
    if (!product) {
        throw new Error(`Product not found: ${id}`)
    }

    product.productName = `${categoryLabels[product.category]}, ${product.size}cm`
    
    return product
}

module.exports = {
    create,
    getAll, 
    getById
}