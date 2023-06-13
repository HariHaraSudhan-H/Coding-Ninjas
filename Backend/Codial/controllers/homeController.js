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
            // populate:{
            //     path:'likes'
            // }
        })
        .populate('likes')
        .populate({
            path: 'comments',
            // populate: {
            //     path: 'user'
            // }
            populate:{
                path:'likes'
            }
        })
    let friends = await User.find({});
    return res.render('home', {
                        title: 'Codial | Home',
                        posts: posts,
                        allFriends:friends
                    });
    } catch (error) {
        req.flash('error','error')

        return;
    }
    

}