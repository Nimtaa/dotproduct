var mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema ({ 
    id: String, // or an auto increment number,     
    name: String, 
    description: String,
    logo: String,
    creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
});

module.exports = mongoose.model('Product',ProductSchema);
