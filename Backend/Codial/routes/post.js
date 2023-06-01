const express = require('express');
const router = express.Router();
const passport = require('passport');
const postController = require('../controllers/postController');

router.post('/create',postController.CreatePost);
router.post('/createComment',postController.CreateComment);
router.get('/deletePost/:id',passport.checkAuthenticated,postController.DeletePost);
router.get('/deleteComment/:id',passport.checkAuthenticated,postController.DeleteComment);
module.exports = router;