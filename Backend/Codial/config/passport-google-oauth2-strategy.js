const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crpyto = require('crypto');
const User = require('../models/user');
const env = require('./environment');

// passport use the google login
passport.use(new googleStrategy({
    clientID: env.google_clientID,
    clientSecret: env.google_clientSecret,
    callbackURL: env.google_callbackURL
},function(accessToken,refreshToken,profile,done){
    User.findOne({email:profile.emails[0].value})
    .then((user)=>{
        console.log(profile);
        if(!user){
            // user not found so creating new user
            User.create({
                name:profile.displayName,
                email:profile.emails[0].value,
                password:crpyto.randomBytes(20).toString('hex')
                // avatar: profile._json.picture
            })
        
        .then((user)=>{
            return done(null,user)
        })
        .catch((err)=>{
            console.log('error in creating user using passport-google-oauth');
            return done(null,false);
        })
        }else{
            // user found so signing in
            return done(null,user);
        }

        
    })
    .catch((err)=>{
        console.log('error in passport-google-oauth2-Strategy',err);
        return;
    })
}))

module.exports = passport;