const express = require('express');
var router = express.Router();
const userAPI = require('../../../controllers/api/v1/users_api');

router.post('/display-user',userAPI.displaySignIn);
module.exports = router;