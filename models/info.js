var  mongoose = require('mongoose');
var  bcrypt = require ('bcryptjs');

mongoose.connect('mongodb://localhost/sparkpkugnow');
var  db = mongoose.connection;

var  infoSchema = mongoose.Schema({
    about: {
        type: String,
        required:true
    },
    stack: {
        type: String,
        index: true,
        required:true
    },
    contact:{
        type: String,
        required:true
    },
   
})

var  Info = module.exports = mongoose.model('Info', infoSchema);
