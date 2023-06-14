const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crpyto = require('crypto');
const User = require('../models/user');

// passport use the google login
passport.use(new googleStrategy({
    clientID: '883660824406-nqhd0vr2s5hdg8og54see8g3ekjab6si.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:800/users/auth/google/callback'
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