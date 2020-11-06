const express = require('express');
const router = express.Router();
const product = require('../controllers/products');

// /products/

router.get('/', function(req, res, next){
    console.log('Req received to the product route!')
    product.list(req, res, next);
});

router.post('/addproduct', function(req, res){
    product.create(req, res);
})

router.post('/:id/upvote', function(req, res, next){
    product.upvote(req, res);
})

module.exports = router;