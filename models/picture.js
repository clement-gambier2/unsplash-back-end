const mongoose = require('mongoose');

const pictureSchema = new mongoose.Schema({
    name: String,
    url: String,
    created:{
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Picture', pictureSchema);