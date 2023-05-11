const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    }
});

// Creates Collections from schema
const Contact = mongoose.model('Contact',contactSchema);

module.exports = Contact;

