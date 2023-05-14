const mongoose = require('mongoose');

//connecting to DB
mongoose.connect('mongodb://127.0.0.1/todo_list_db');

const db = mongoose.connection;
// If db is not connected
db.on('error',console.error.bind(console,'error connecting to database'));
// If DB is connected
db.once('open',function(){
    console.log('Database connected successfully');
});