var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

//user schema
var UserSchema = mongoose.Schema({
    username: {
        type: String,
        index: true
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    password2: {
        type: String
    },
    about: {
        type: String,
        index: true
    },
    skills: {
        type: String
    },
    contact: {
        type: Array
    },
    food:{
        type:String
    },
    role:{
        type:mongoose.Schema.Types.ObjectId
    },
    picture:{originalname: String }

})


var User = module.exports = mongoose.model('User', UserSchema);


//hash password 
module.exports.createUser = function (newUser, callback) {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(newUser.password, salt, function (err, hash) {
            // Store hash in your password DB. 
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.getUserByUsername = function (username, callback) {
    var query = { username: username };
    User.findOne(query, callback);
}
module.exports.comparePassword = function (password, hash, callback) {
    bcrypt.compare(password, hash, function (err, isMatch) {
        if (err) throw err;
        callback(null, isMatch);
    });
}
module.exports.getUserById = function (id, callback) {
    User.findById(id, callback);
}
module.exports.getAllUsers = function (callback) {
    User.find({}, callback);
}
module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
        if (err) throw err;
        callback(null, isMatch);
    });
}


    