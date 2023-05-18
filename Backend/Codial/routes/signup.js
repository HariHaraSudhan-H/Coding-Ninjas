const express = require('express');
const router = express.Router();
const signUpController = require('../controllers/signUpController');

router.get('/',signUpController.signup);
router.post('/new-user',require('../controllers/createUser').createUser)


module.exports = router;

