const User = require('../models/user');
module.exports.createUser = function (req, res) {
    console.log(req.body);
    if(req.body.password!==req.body.confirmPassword){
        return res.redirect('back');
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
        .then((newUser) => {
            return res.redirect('/users/signin');
        })
        .catch((err) => {
            console.log('Error creating the user',err);
            return
        })
}