var mongoose = require('mongoose');

var imageSchema = mongoose.Schema({
    path: {
        type: String,
        required: true,
        trim: true
    },
    originalname: {
        type: String,
        required: true
    }

});

var Image = module.exports = mongoose.model('Image', imageSchema);


Image.getImages = function (callback, limit) {
    
        Image.find(callback).limit(limit);
    }
    
    
Image.getImageById = function (id, callback) {
    
        Image.findById(id, callback);
    
    }
    
Image.addImage = function (image, callback) {
        Image.create(image, callback);
    }
    