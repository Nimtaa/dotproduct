const express = require('express');
const router = express.Router();
const user = require('../controllers/users');

router.get('/', function(req, res, next){
    console.log(req.query);
    console.log('Req received to the user route!')
    user.list(req, res, next);
});

router.post('/adduser', function(req, res){
    console.log('Req received to the adduser route!')
    user.create(req, res);
})

module.exports = router;
