var mongoose = require('mongoose');

const UserSchema = new mongoose.Schema ({ 
    id: String, // or an auto increment number,     
    name: String, 
    lname: String,
    bio: String,
    products:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    created_at: Date,
});

module.exports = mongoose.model('User',UserSchema);
