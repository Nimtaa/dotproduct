const express = require('express');
const router = express.Router();
const product = require('../controllers/products');

router.get('/', function(req, res, next){
    console.log(req.query);
    product.show(req, res, next);
});

module.exports = router;