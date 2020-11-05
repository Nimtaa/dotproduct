var MongoClient = require('mongodb').MongoClient;


const User = require('../models/users');

const url = "mongodb://localhost:27017/dotproduct";

exports.list = function(req, res, next){
    MongoClient.connect(url, {useNewUrlParser : true}, function(err, db){
        if(err) throw err;
        User.find({}, function(err, docs){
            if(err) throw err;
            console.log(docs);
        })
    })
}

exports.create = function(req, res){
    var newUser = new User();
    newUser.name = req.body.name;
    newUser.lname = req.body.lname;
    newUser.bio = req.body.bio;
    newUser.created_at = new Date();
    
    var products = new Array();
    newUser.products = products;
    
    newUser.save(function(err){
        if(err){
            console.log(err);
            res.status(400).send('Unable to Save User');
        }
        else{
            console.log("Saved");
            res.status(200).send('User Saved to DB');
            db.close();
        }
    })
}