const express = require('express');
const env = require('./config/environment');
const cookieParser = require('cookie-parser');
const app = express();

// require('./config/viewHelper')(app);
const logger = require('morgan');
const path = require('path');
const port = 800; //production level will be 80
const hostname = 'codial'
const expressLayout = require('express-ejs-layouts');

// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const passportJWT = require('./config/passport-jwt'); 
const MongoStore = require('connect-mongo');
const passportGoogle = require('./config/passport-google-oauth2-strategy');
// const sassMiddleware = require('node-scss-middleware');

// Reading the DB & model
const db = require('./config/mongoose');
const User = require('./models/user');
const flash = require('connect-flash');
const customMWare = require('./config/middleware');

const cors = require('cors'); // Added CORS module
const { Logger } = require('sass');

app.use(cors({ // Enable CORS middleware
  origin: 'http://localhost:800',
  credentials: true
}));

app.use(function(req, res, next) {
    console.log('check')
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:800');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
  });

// Chat -- socket.io
const chatServer = require('http').Server(app);
const corsOptions = {
    origin: 'http://localhost:800',
    methods: ['GET', 'POST'],
    credentials: true
  };
const chatSockets = require('./config/chat').chatSockets(chatServer,corsOptions);
chatServer.listen(5000);
console.log('Chat server is listening in port 5000');

app.use(express.urlencoded());
app.use(express.static(env.assetPath));
// make the uploads path available to browser
app.use('/uploads', express.static(__dirname + '/uploads'))
//running the cookie parser
app.use(cookieParser());

// extract style and scripts from subFiles of HTML
app.use(expressLayout);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// set up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// mongo-store is used to store the cookie
app.use(session({
    name: 'User',
    secret: env.sessionCookie,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: MongoStore.create(
        {
            mongoUrl: 'mongodb://127.0.0.1/codial_development',
            autoRemove: 'enabled'
        },
        function (err) {
            console.log(err || 'connection to db is ok');
        }
    )
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.use(flash());
app.use(customMWare.setFlash);

app.use(logger(env.morgan.mode,env.morgan.options));
// using express router

app.use('/', require('./routes/index'));
app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running the server : $err`)
    }
    console.log('Running on the server');
})