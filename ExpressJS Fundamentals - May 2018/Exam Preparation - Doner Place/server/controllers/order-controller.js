const productApi = require('../api/product')
const orderApi = require('../api/order')

module.exports = {
    placeGet: async (req, res) => {
        const id = req.params.id
        const product = await productApi.getById(id)
        res.render('order/place', product)
    },
    placePost: async (req, res) => {
        const data = req.body
        data.creator = req.user._id
        try {
            await orderApi.create(data)
            return res.redirect('/')
        } catch (err) {
            console.log(err)
            res.render('order/place', {
                error: err.message
            })
        }
    },
    status: async (req, res) => {

    },
    details: (req, res) => {
        
    }
}