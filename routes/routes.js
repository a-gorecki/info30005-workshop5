var express = require('express');
var router = express.Router();

var controller = require('../controllers/controller.js');

// Create new cafe
router.post('/api/new', controller.createUser);
router.get('/api/new', controller.createUser);
// Find all cafes
router.get('/api/allusers', controller.findAllUsers);

// Find one cafe by id
router.get('/api/id/:id',controller.findOneUser);

//
// //Find one cafe by name
// router.get('/api/name/:name',controller.findCafeByName);


module.exports = router;