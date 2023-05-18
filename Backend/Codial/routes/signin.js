const express = require('express');
const router = express.Router();

router.get('/',require('../controllers/userController').signin)

router.get('/display-user',require('../controllers/userController').displaySignIn);

module.exports = router;

