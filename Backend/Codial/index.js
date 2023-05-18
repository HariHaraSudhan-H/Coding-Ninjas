const express = require('express');
const cookie_parser = require('cookie-parser');
const path = require('path');
const port = 800; //production level will be 80


const app = express();
// Reading the DB & model
const db = require('./config/mongoose');
const User = require('./models/user');

const expressLayout = require('express-ejs-layouts');

app.use(express.urlencoded());
app.use(express.static('./assets'));

//running the cookie parser
app.use(cookie_parser());

app.use(expressLayout);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.set('view engine','ejs');
app.set('views','./views')


// using express router

app.use('/',require('./routes/index'));
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server : $err`)
    }
    console.log('Running on the server');
})