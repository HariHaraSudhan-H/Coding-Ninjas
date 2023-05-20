const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

// authentication using passport.js
passport.use(new LocalStrategy({
    usernameField: 'email'
},
    function (email, password, done) {
        User.findOne({ email: email })
        .then((user)=>{
            if(!user||user.password!=password){
                console.log('Invalid Username/password');
                return done(null,false);
            }
            return done(null,user);
        })
        .catch(()=>{
            console.log('Error finding the user --> Passport.js');
                return done(err);
        })
    }
));
// property to send to the cookie
passport.serializeUser(function(user, done){
    console.log(user)
    done(null, user.id);
});
// take the cookie data and retrieve from DB
passport.deserializeUser(function(id,done){
    User.findById(id)
    .then((user)=>{
        return done(null,user);
    })
    .catch((err)=>{
        console.log('Error finding the user --> Passport.js');
        return done(err);
    })
})

// To check whether user is authenticated
passport.checkAuthenticated = function(req,res,next){
    // if  user is signed in then pass to next page
    if(req.isAuthenticated()){
        return next();
    }

    // if user is not signed
    return res.redirect('/users/signin');
}

passport.setAuthenticatedUser = function(req,res,next){
    // if  user is signed in then pass to next page
    if(req.isAuthenticated()){
        // req.user contains the current session cookie now transferring it to locals for views
        res.locals.user = req.user;
        return next();
    }
    return next();
}

module.exports = passport;