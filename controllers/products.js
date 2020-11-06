var MongoClient = require('mongodb').MongoClient;

const Product = require('../models/products');
const User = require('../models/users');

const url = "mongodb://localhost:27017/dotproduct";

exports.list = function(req, res, next){
    MongoClient.connect(url, {useNewUrlParser : true}, function(err, db){
        if(err) throw err;
        Product.find({}, function(err, products){
            if(err) throw err;
            console.log("product found");
            res.send(products);
            db.close();
        })
    })
}

exports.create = function(req, res){
    var newProduct = new Product();
    newProduct.name = req.body.name;
    newProduct.description = req.body.description;
    newProduct.logo = req.body.logo;
    newProduct.created_at = new Date();
    newProduct.creator = req.body.userId;
    
    newProduct.save(function(err){
        if(err){
            console.log(err);
            res.status(400).send('Unable to Save Product');
        }
        else{
            res.status(200).send('Product Saaved to DB')
            var query = {'_id' : newProduct.creator};
            User.findOne(query, function(err, user){
                if(err) throw err;
                else{
                    user.products.push(newProduct);
                    user.save(function(err){
                        if(err) throw err;
                        // db.close();
                    })
                }
            })
        }
    })
}

exports.upvote = function(req, res, next){
    const id = req.params.id;   
    console.log('This is id:', id);
    var query = {"_id": id};
    Product.findOne(query, function(err, product){
        if(err) throw err;
        else{
            console.log(product);
            product.vote += 1;
            product.save(function(err){
                if(err) throw err;
            })
        }
    })
}