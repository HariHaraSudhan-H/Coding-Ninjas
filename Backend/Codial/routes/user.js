const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/profile',userController.userProfile);
// router.post('/profile/new-post',userController.newPost);
module.exports = router;