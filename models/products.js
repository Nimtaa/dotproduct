var mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema ({   
    name: String, 
    description: String,
    logo: String,
    creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    created_at : Date,
});

module.exports = mongoose.model('Product',ProductSchema);
