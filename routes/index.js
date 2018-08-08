var express = require('express');
var router = express.Router();

const Restaurant = require('../models/restaurant.model'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  Restaurant.find((err, restaurants) => {
    res.json({restaurants: restaurants});
    //res.send(restaurants);
  });
  // res.render('index', { title: 'Express' });
  // res.status(200);
});

module.exports = router;
