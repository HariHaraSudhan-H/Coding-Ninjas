const Post = require('../models/post');
const Comment = require('../models/comment');
const commentsMailer = require('../mailers/comments_mailer');
const commentEmailWorker = require('../worker/comment_email_worker');
const queue = require('../config/kue');
const Like = require('../models/like');

module.exports.CreatePost = async function (req, res) {
    try {
        let newPost = await Post.create({
            content: req.body.content,
            user: req.user._id
        });
        if (req.xhr) {
            console.log('inside xhr');
            newPost = await newPost.populate({
                path: 'user',
                select: 'name avatar',
            })
            console.log(newPost);
            return res.status(200).json({
                data: {
                    post: newPost
                },
                message: "Post Created"
            });
        }
        req.flash('success', 'Post created and published')
        console.log('Post created and published');
        return res.redirect('back');
    } catch (error) {
        req.flash('error', 'Error in Post creation')
        return;
    }
}

module.exports.DeletePost = async function (req, res) {
    try {
        let postRemove = await Post.findById(req.params.id);

        // for deleting associated likes of post and comments
        await Like.deleteMany({ likeable: postRemove, onModel: 'Post' });
        await Like.deleteMany({likeable: {$in: postRemove.comments}});
        postRemove.deleteOne();

        let comments = await Comment.deleteMany({ post: String(req.params.id) });
        if (req.xhr) {
            console.log('inside xhr for deleting post')
            return res.status(200).json({
                data: {
                    post_id: req.params.id
                },
                message: "Post deleted"
            })
        }
        req.flash('success', 'Post deleted')
        return res.redirect('back');
    } catch (error) {
        console.log('error in deleting', error)
    }

}

module.exports.CreateComment = async function (req, res) {
    try {
        let post = await Post.findById(req.body.post);
        let newComment = await Comment.create({
            content: req.body.content,
            user: req.user._id,
            post: req.body.post
        });

        post.comments.push(newComment);
        post.save();
        newComment = await newComment.populate({
            path: 'user',
            select: 'name email avatar',
            // populate:{
            //     path:'post',
            //     populate:{
            //         path:'user',
            //         select:'name email'
            //     }
            // }
        })
        newComment = await newComment.populate({
            path: 'post',
            populate: {
                path: 'user',
                select: 'name email content likes'
            }
        })
        // commentsMailer.newComment(newComment);
        let job = queue.create('emails', newComment).save(function (err) {
            if (err) {
                console.log('error in creating a queue');
                return;
            }
            console.log('job enqueued', job.id);
        })
        if (req.xhr) {
            console.log('inside xhr for comment');

            return res.status(200).json({
                data: {
                    comment: newComment
                },
                message: "Comment Created"
            });
        }
        req.flash('success', 'Comment created and published')
        console.log(newComment.user);
        return res.redirect('/');
    } catch (error) {
        req.flash('error', 'Error in Post creation');
        console.log('error in comment creation', error);
        return;
    }
};

module.exports.DeleteComment = async function (req, res) {
    try {
        let comment = await Comment.findById(req.params.id);
        if (comment.user == req.user.id) {
            let postID = comment.post;
            // deleting the associated likes of comment
            await Like.deleteMany({ likeable: comment._id, onModel: 'Comment' })
            comment.deleteOne();
            let post = Post.findByIdAndUpdate(postID, {
                $pull: {
                    comments: req.params.id
                }
            })
            if (req.xhr) {
                console.log('inside xhr for deleting comment')
                return res.status(200).json({
                    data: {
                        comment_id: req.params.id
                    },
                    message: "comment deleted"
                })
            }
            req.flash('success', 'Comment deleted')
            return res.redirect('/');
        }
    } catch (error) {
        console.log('Error in deleting comment', error);
    }
}