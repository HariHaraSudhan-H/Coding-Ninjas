// requiring the library
const mongoose = require('mongoose');
// connecting to DB
mongoose.connect('mongodb://127.0.0.1/contacts_List_db');
// To check whether connection is successful
const db = mongoose.connection;
// error
db.on('error',console.error.bind(console,'error connecting to database'));
// up and running then print the below message
db.once('open',function(){
    console.log('Database connected successfully');
});