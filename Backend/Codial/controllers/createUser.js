const User = require('../models/user');
module.exports.createUser = function (req, res) {
    console.log(req.body);
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
        .then((newUser) => {
            return res.redirect('back');
        })
        .catch((err) => {
            console.log('Error creating the user');
            return
        })
}