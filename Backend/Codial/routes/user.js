const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const passport = require('passport');

router.get('/profile/:id',passport.checkAuthenticated,userController.userProfile);
// router.get('/profile',userController.userProfile);

router.use('/signup',require('./signup'));
router.use('/signin',require('./signin'));
router.get('/signout',userController.signout);
router.post('/display-user',passport.authenticate('local',{failureRedirect:'/users/signin'}),userController.displaySignIn);
router.post('/update/:id',passport.checkAuthenticated,userController.update);

module.exports = router;