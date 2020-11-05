var mongoose = require('mongoose');

const UserSchema = new mongoose.Schema ({ 
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
