const path = require('path');
const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const routes = express.Router();

routes.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', { prods: products, pageTitle: 'The Shop', path: '/' });
});

module.exports = routes;
