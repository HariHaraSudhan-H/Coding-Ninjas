const Post = require('../../../models/post');
const Comment = require('../../../models/comment');
module.exports.index = async function (req, res) {

    let posts = await Post.find({})
        .sort('-createdAt')
        .populate('user')
        .populate({
            path: 'comments',
            populate: {
                path: 'user'
            }
        })

    return res.json(200, {
        message: "List of posts",
        posts: posts
    })
}

module.exports.DeletePost = async function (req, res) {
    try {
        let postRemove = await Post.findById(req.params.id);
        if (postRemove.user._id == req.user.id) {
            postRemove.deleteOne();
            let comments = await Comment.deleteMany({ post: String(req.params.id) });
            return res.json(200, {
                message: "Post and its comments are deleted"
            });
        }else{
            return res.json(401,{
                message: "You cannot delete this post"
            })
        }

    } catch (error) {
        // console.log('error in deleting', error)
        return res.json(500, {
            message: "Internal Server Error"
        })
    }

}