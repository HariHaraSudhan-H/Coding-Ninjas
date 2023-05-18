const express = require('express');
const homeController = require('../controllers/homeController');
var router = express.Router();

//accessing the router
router.get('/',homeController.home);

//accessing the userController 
router.use('/users',require('./user'));

router.use('/signup',require('./signup'));
router.use('/signin',require('./'));


console.log('Connected to router');
module.exports = router;