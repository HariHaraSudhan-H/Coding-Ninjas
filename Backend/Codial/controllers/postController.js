const Post = require('../models/post');
const Comment = require('../models/comment');
module.exports.CreatePost = function (req, res) {
    Post.create({
        content: req.body.content,
        user: req.user._id
    })
        .then((newPost) => {
            console.log('Post created and published');
            return res.redirect('back');
        })
        .catch((err) => {
            console.log("error in creating the post");
            return;
        })
}

module.exports.DeletePost = function (req, res) {
    console.log(req.params.id);
    Post.findById(req.params.id)
        .then((postRemove) => {
            if (postRemove.user == req.user.id) {
                postRemove.deleteOne();
                Comment.deleteMany({ post: String(req.params.id) })
                    .then((comments) => {
                        console.log('Comments deleted');
                    })
                    .catch((err) => {
                        console.log('error in deleting comments')
                    });

            }
            return res.redirect('back');
        })
}

module.exports.CreateComment = function (req, res) {
    Post.findById(req.body.post)
        .then((post) => {
            Comment.create({
                content: req.body.content,
                user: req.user._id,
                post: req.body.post
            })
                .then((newComment) => {
                    console.log('Comment created and published');
                    post.comments.push(newComment);
                    post.save();
                    console.log(newComment.user);
                    return res.redirect('/');
                })
                .catch((err) => {
                    console.log("error in creating the comment", err);
                    return;
                })
        })
        .catch((err) => {
            console.log('error finding the post');
        })

};

module.exports.DeleteComment = function (req, res) {
    Comment.findById(req.params.id)
        .then((comment) => {
            if (comment.user == req.user.id) {
                const postID = comment.post;
                comment.deleteOne();
                Post.findByIdAndUpdate(postID, {
                    $pull: {
                        comments: req.params.id
                    }
                })
                    // .then((post) => {
                    //     return res.redirect('back');
                    // })
                    // .catch((err) => {
                    //     return res.redirect('back');
                    // })
            }
            return res.redirect('/');
        })
}