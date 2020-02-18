var mongoose = require('mongoose');

var CropSchema = new mongoose.Schema({  productID:Number,
    title:String,
    picture:String,
    category:String,
    description:String,
    price:Number,
    quantity:Number,
    paymentTerm:String,
    delivery:String
                                        },
                                        { versionKey:false});

module.exports = mongoose.model('Crop', CropSchema);


