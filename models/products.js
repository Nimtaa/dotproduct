var mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema ({   
    name: String, 
    description: String,
    logo: String,
    creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    created_at : Date,
    vote: {type: Number, default:0},
});

module.exports = mongoose.model('Product',ProductSchema);
