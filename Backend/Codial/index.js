const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

const path = require('path');
const port = 800; //production level will be 80
const expressLayout = require('express-ejs-layouts');

// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo');

// Reading the DB & model
const db = require('./config/mongoose');
const User = require('./models/user');


app.use(express.urlencoded());
app.use(express.static('./assets'));

//running the cookie parser
app.use(cookieParser());

// extract style and scripts from subFiles of HTML
app.use(expressLayout);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// set up view engine
app.set('view engine','ejs');
app.set('views','./views');

// mongo-store is used to store the cookie
app.use(session({
    name:'User',
    secret:'somethingSecret',
    saveUninitialized:false,
    resave: false,
    cookie:{
        maxAge:(1000*60*100)
    },
    store: MongoStore.create(
        {
            mongoUrl : 'mongodb://127.0.0.1/codial_development',
            autoRemove: 'enabled'
        },
        function(err){
            console.log(err||'connection to db is ok');
        }
    )
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);


// using express router

app.use('/',require('./routes/index'));
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server : $err`)
    }
    console.log('Running on the server');
})