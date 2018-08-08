const express = require('express');
const router = express.Router();

const Restaurant = require('../models/restaurant.model');

router.get('/', (req, res, next) => {
    Restaurant.find((err, restaurants) => {
        if (err) {
            res.status(500).json({success: false, error: err});
        } else {
            res.json({success: true, data: restaurants});
        }
    });
});

router.get('/:id', (req, res, next) => {
    let id = req.params.id;
    Restaurant.findById(id, (err, restaurant) => {
        if (err) {
            res.status(500).json({success: false, error: err});
            //return next(err);
        } else {
            res.json({success: true, data: restaurant});
        }
    });
});

router.post('/', (req, res, next) => {
    let newRestaurant = new Restaurant({
        name: req.body.name,
        address: req.body.address,
        description: req.body.description,
        reviews: req.body.reviews,
        imageUrl: req.body.imageUrl
    });
    newRestaurant.save((err, restaurant) => {
        if (err) {
            res.json({success: false, message: 'Failed to create a new restaurant.', err: err});
        } else {
            res.json({success: true, message: 'New restaurant created.', data: restaurant});
        }
    });
});

router.put('/', (req, res, next) => {
    if (!req.body._id) {
        res.status(400).json({success: false, message: '_id must be specified in the request'});
    }
    Restaurant.update({ _id: req.body._id }, req.body, (err) => {
        if (err) {
            res.json({success: false, message: 'Failed to update restaurant.', err: err});
        } else {
            res.json({success: true, message: 'Update restaurant successfully.'});
        }
    });
});

router.delete('/:id', (req, res, next) => {
    let id = req.params.id;
    Restaurant.deleteOne({ _id: id }, (err) => {
        if (err) {
            res.json({success: false, message: 'Failed to delete restaurant.', err: err});
        } else {
            res.json({success: true, message: 'Delete restaurant Successfully.'});
        }
    });
});

module.exports = router;