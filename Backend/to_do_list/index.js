const express = require('express');
const path = require('path');
const port = 8000;

//calling the DB
const db = require('./config/mongoose');
const Task = require('./models/task');

//running express
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(express.urlencoded());
app.use(express.static('assets'))

//accessing the router
app.use('/',require('./routes/index'),Task);


app.listen(port, function (err) {
    if (err) {
        console.log('Error in running the server');
    }
    console.log('Server is working in port', port);
});
