const url = require("url");
const fs = require("fs");
const path = require("path");
//const database = require("../config/database");
const qs = require("querystring");

const Product = require('../models/Product')

module.exports.index = (req, res) => {
    let queryData = req.query;

    Product.find().populate('category').then((products) => {
        if (queryData.query) {
            products = products.filter(
                p => p.name.toLowerCase().includes(queryData.query)
            )
        }

        res.render('home/index', {products: products})
    })
}