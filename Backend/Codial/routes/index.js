const express = require('express');
const homeController = require('../controllers/homeController');
var router = express.Router();
const passport = require('passport');

//accessing the router
router.get('/',homeController.home);

//accessing the userController 
router.use('/users',require('./user'));
router.use('/post',passport.checkAuthenticated,require('./post'));

console.log('Connected to router');
module.exports = router;