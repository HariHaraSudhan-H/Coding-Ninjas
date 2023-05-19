const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/profile',userController.userProfile);

router.use('/signup',require('./signup'));
router.use('/signin',require('./signin'));
router.get('/signout',userController.signout);


module.exports = router;