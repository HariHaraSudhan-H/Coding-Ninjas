const Post = require('../models/post');
const User = require('../models/user');
module.exports.home = function (req, res) {
    Post.find({}).populate('user')
        .populate({
            path: 'comments',
            populate: {
                path: 'user'
            }
        })
        .then((posts) => {
            User.find({})
                .then((friends) => {
                    return res.render('home', {
                        title: 'Codial | Home',
                        posts: posts,
                        allFriends:friends
                    });
                })
                .catch(()=>{
                    console.log('Users not found')
                    return res.redirect('back');
                })

        })
        .catch((err) => {
            console.log('Error', err);
            return res.redirect('back');
        })

}