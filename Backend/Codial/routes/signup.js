const express = require('express');
const router = express.Router();

router.get('/',require('../controllers/userController').signup)

router.post('/new-user',require('../controllers/createUser').createUser);

module.exports = router;

