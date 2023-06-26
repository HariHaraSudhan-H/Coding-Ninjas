const Friendship = require('../models/friendships');
const Post = require('../models/post');
const User = require('../models/user');
module.exports.home = async function (req, res) {
    try {
        let posts = await Post.find({})
            .sort('-createdAt')
            .populate('user')
            .populate({
                path: 'comments',
                populate: {
                    path: 'user'
                }
            })
            .populate('likes')
            .populate({
                path: 'comments',
                populate: {
                    path: 'likes'
                }
            })

        let users = await User.find({});
        let friends;
        if (req.user) {
            friends = await Friendship.find({
                from_user: req.user._id
            }).populate({
                path: 'to_user',
                populate: {
                    path: 'avatar'
                }
            });
        }
        return res.render('home', {
            title: 'Codial | Home',
            posts: posts,
            allFriends: users,
            friends: friends
        });
    } catch (error) {
        req.flash('error', 'error')

        return;
    }


}