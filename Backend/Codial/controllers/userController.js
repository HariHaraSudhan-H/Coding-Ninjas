const User = require('../models/user')

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

module.exports.userProfile = function (req, res) {
    return res.render('user', {
        title: "Codial"
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
    res.redirect('/users/profile');

}

// Controlling the signout option
module.exports.signout = function (req, res) {
    req.logout(function (err) {
        if (err) {
            return;
        }

        return res.redirect('/');
    });
}
