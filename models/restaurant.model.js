const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate')

var restaurantSchema = new mongoose.Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    description: {type: String},
    reviews: {type: String},
    imageUrl: {type: String}
});

restaurantSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Restaurant', restaurantSchema);