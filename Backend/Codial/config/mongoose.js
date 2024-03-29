const mongoose = require('mongoose');
const env = require('./environment');
mongoose.connect(`mongodb://127.0.0.1/${env.db}`);

const db = mongoose.connection;

db.on('error',console.error.bind(console,'Error connecting to DB'));

db.once('open',function(){
    console.log('Connected successfully to DB');
})

module.exports = db;