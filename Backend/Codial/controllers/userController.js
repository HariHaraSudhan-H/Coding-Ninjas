const User = require('../models/user')
const fs = require('fs');
const path = require('path');
const Friendship = require('../models/friendships');
// controlling the user page for manual Authentication
// module.exports.userProfile = function (req, res) {
//     if(req.cookies.user_id){
//         User.findById(req.cookies.user_id)
//         .then((user)=>{
//             return res.render('user', {
//             title: 'Codial',
//             user: user
//         });
//         })
//         .catch((err)=>{
//             return res.redirect('/users/signin');
//         })

//     }else{
//         return res.redirect('/users/signin');
//     }   
// }

module.exports.userProfile = async function (req, res) {
    console.log(req.params.id,req.user.id);
    let isFriend;
    let friend = await Friendship.findOne({
        from_user:req.user.id,
        to_user:req.params.id
    });
    console.log(friend);
    if(friend){
        isFriend=true;
    }else{
        isFriend=false;
    }
    console.log(isFriend);

    User.findById(req.params.id)
        .then((user) => {
            return res.render('user', {
                title: "Codial",
                profileUser: user,
                isFriend:isFriend
            })
        })

}

// Controlling the signup page
module.exports.signup = function (req, res) {
    if (req.isAuthenticated()) {
        return res.redirect('/users/profile')
    }
    return res.render('signup', {
        title: 'Codial'
    });
}

// Controlling the signin page
module.exports.signin = function (req, res) {
    if (req.isAuthenticated()) {
        return res.redirect('/users/profile')
    }
    return res.render('signin', {
        title: 'Codial'
    });
}

// Controlling the page after signin for manual authentication
// module.exports.displaySignIn = function (req, res) {
//     console.log(req.body);
//     User.findOne({ email: req.body.email })
//         .then((userDisplay) => {
//             // If user is found
//             console.log(userDisplay);
//             // if password is wrong for found user
//             if (req.body.password !== userDisplay.password) {
//                 console.log('Incorrect Password')
//                 return res.redirect('back');
//             }
//             // if password is right
//             res.cookie ('user_id',userDisplay.id);
//             return res.redirect('/users/profile');
//         })
//         // if user is not found
//         .catch((err) => {
//             console.log('Account not found',err)
//             return res.redirect('back');
//         })

// }

// Controlling the page after signin for passport.js authentication
module.exports.displaySignIn = function (req, res) {
    console.log(req.cookies)
    req.flash('success', 'Logged in successfully');
    res.redirect('/');

}

// Controlling the signout option
module.exports.signout = function (req, res) {
    req.logout(function (err) {
        if (err) {
            return;
        }
        req.flash('success', 'Logged out successfully');
        return res.redirect('/');
    });
}

// updating user content 
module.exports.update = async function (req, res) {
    // console.log(req.body.name,String(req.params.id));
    // const userID = req.params.id;
    // if (req.user.id == req.params.id) {
    //     User.findByIdAndUpdate(userID, req.body)
    //     .then((user)=>{
    //         req.flash('success',`User details updated for ${req.body.name}`);
    //         return res.redirect('back');
    //     })

    // }
    // else {
    //     return res.status(401).send('Unauthorized');
    // }

    if (req.user.id == req.params.id) {
        try {
            const userID = req.params.id;
            let user = await User.findByIdAndUpdate(userID, req.body);
            User.uploadedAvatar(req, res, function (err) {
                if (err) { console.log('error', err) };
                user.name = req.body.name;
                user.email = req.body.email;
                if (req.file) {
                    if(user.avatar){
                        fs.unlinkSync(path.join(__dirname+'/..',user.avatar))
                    }
                    user.avatar = User.avatarPath + "/" + req.file.filename;
                }
                user.save();
                return res.redirect('back');
            });
        } catch (error) {
            req.flash('error', error);
            console.log('error', error);
            return res.redirect('back');
        }
    } else {
        req.flash('error', 'Unauthorized');
        return res.status(401).send('Unauthorized');
    }

}
