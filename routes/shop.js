const path = require('path');
const express = require('express');

const shopController = require('../controllers/shop');

const routes = express.Router();

routes.get('/', shopController.getProducts);

routes.get('/products');

routes.get('/cart');

routes.get('/checkout');

module.exports = routes;
