const mongoose = require('mongoose');
//const bcrypt = require('bcryptjs');
const config = require('../config/database');

//User schema
const UserSchema = mongoose.Schema({
    uid: {
        type: String,
        required: true
    },
    premium: {
        type: Boolean
    },
    suscription: {
        type: String
    },
    customer: {
        type: String
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}

module.exports.addUser = function(newUser, callback) {
    newUser.save(callback);
}

module.exports.getUser = function(user, callback) {
    const query = { uid: user.params.uid };
    User.findOne(query, callback);
}