const express = require('express');
const passport = require('passport');
var router = express.Router();
const postAPI = require('../../../controllers/api/v1/posts_api');

router.get('/',postAPI.index);
router.delete('/:id',passport.authenticate('jwt',{session:false}),postAPI.DeletePost);

module.exports = router;