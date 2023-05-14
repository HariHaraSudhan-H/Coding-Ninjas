const express = require('express');
const path = require('path');
const app = express();
const port = 800; //production level will be 80
const expressLayout = require('express-ejs-layouts');
app.use(express.static('assets'));
app.use(expressLayout);
app.set('view engine','ejs');
app.set('views','./views')

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
// using express router

app.use('/',require('./routes/index'));
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server : $err`)
    }
    console.log('Running on the server');
})