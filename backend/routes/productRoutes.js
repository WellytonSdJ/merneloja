const express = require('express');
const router = express.Router();

const { getAllProducts, getProductById } = require('../controller/productControllers')

//@descr  GET all products from db
//@route GET /api/products
//@access Public
// router.get('/', getAllProducts) // esse é o padrão
router.get('/', getAllProducts)

//@descr  GET a product by id from db
//@route GET /api/products/:id
//@access Public
// router.get('/', getProductById) // esse é o padrão
router.get('/:id', getProductById)

module.exports = router;