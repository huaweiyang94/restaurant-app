const Restaurant = require('../models/restaurant.model');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/restaurantApp', { useNewUrlParser: true })
.then(() => console.log('Successfully connect to MongoDB'))
.catch((err) => console.error(err));

var restaurants = [
    new Restaurant({
        name: 'West Oak',
        address: '1035 Mainland St, Vancouver, BC V6B 5P9',

    }),
    new Restaurant({
        name: 'Black Rice Izakaya',
        address: '782 Cambie St, Vancouver, BC V6B 2R5'
    }),
    new Restaurant({
        name: 'Kuma Izakaya',
        address: '1233 Hamilton St, Vancouver, BC V6B 6K3'
    })
];

var done = 0;
for (var i = 0; i < restaurants.length; i++) {
    restaurants[i].save((err, result) => {
        done++;
        if (done == restaurants.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}