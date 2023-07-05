const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const extractJWT = require('passport-jwt').ExtractJwt;
const env = require('./environment');
const User = require('../models/user');

let opts = {
    // this gives JSON Web Token
    jwtFromRequest : extractJWT.fromAuthHeaderAsBearerToken(),
    // helps in encrpyting and decrpyting
    secretOrKey : env.jwt_secret
}

passport.use(new JWTStrategy(opts,function(jwtPayload,done){
    User.findById(jwtPayload._id)
    .then((user)=>{
        return done(null,user);
    })
    .catch((err)=>{
        return done(null,false);
    })
}));

module.exports = passport;