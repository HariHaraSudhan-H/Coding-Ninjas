// require('dotenv').config();
// import '../node_modules/dotenv/config';

const fs = require('fs');
const rfs = require('rotating-file-stream');
const path = require('path');

const logDirectory = path.join(__dirname,'../production_logs');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const accessLogStream = rfs.createStream('access.log',{
    interval: '1d',
    path: logDirectory,

})
const development = {
    name: 'development',
    assetPath: './assets',
    sessionCookie: 'somethingSecret',
    db: 'codial_development',
    smtp:{
        service:'gmail',
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        auth:{
            user:'hari.sudhan612@gmail.com',
            pass:'dtjzmfvngqbfirjd'
        }
    },
    google_clientID: '883660824406-nqhd0vr2s5hdg8og54see8g3ekjab6si.apps.googleusercontent.com',
    google_clientSecret: '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',
    google_callbackURL: 'http://localhost:800/users/auth/google/callback',
    jwt_secret: 'codial',
    morgan:{
        mode:'dev',
        options: {stream: accessLogStream}
    }
}

const production = {
    name:process.env.CODIAL_ENVIRONMENT,
    assetPath: process.env.CODIAL_ASSET_PATH,
    sessionCookie: process.env.CODIAL_SESSION_COOKIE_KEY,
    db: process.env.CODIAL_DB,
    smtp:{
        service:'gmail',
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        auth:{
            user: process.env.CODIAL_GOOGLE_USER,
            pass: process.env.CODIAL_GOOGLE_PASSWORD
        }
    },
    google_clientID: process.env.CODIAL_GOOGLE_CLIENT_ID,
    google_clientSecret: process.env.CODIAL_GOOGLE_CLIENT_SECRET,
    google_callbackURL: process.env.CODIAL_GOOGLE_CALLBACK_URL,
    jwt_secret: process.env.CODIAL_JWT_SECRET,
    morgan:{
        mode:'combined',
        options: {stream: accessLogStream}
    }
}

module.exports = development;
// console.log(eval(process.env.CODIAL_ENVIRONMENT))
// module.exports = eval(process.env.CODIAL_ENVIRONMENT)==undefined ? development : eval(process.env.CODIAL_ENVIRONMENT);