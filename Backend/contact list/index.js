const express = require('express');
const path = require('path');
const port = 200;
const db = require('./config/mongoose')
const Contact = require('./models/contact')
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));
var contactList = [
    {
        name: "HariHaraSudhan",
        mobile: "9543691902"
    },
    {
        name: "VishnuKumaran",
        mobile: "8056655734"
    },
    {
        name: "Ragu",
        mobile: "7871821036"
    }
];
sortList();
function sortList() {
    contactList.sort((a, b) => {
        let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();

        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
}
app.get('/home', function (req, res) {

    //fetching data from DB
    Contact.find({})
        .then((contacts) => {
            return res.render('home', {
                title: 'My Contacts',
                contact_list: contacts
            });
        })
        .catch((err) => {
            console.log('error in reading data from DB');
            return;
        });
    // function(err,contacts){
    // if(err){
    //     console.log('error in reading data from DB');
    //     return;
    // }
    // return res.render('home', {
    //     title: 'My Contacts',
    //     contact_list: contactList
    // })
});
app.post('/new-contact', function (req, res) {
    // contactList.push(req.body);
    Contact.create({
        name: req.body.name,
        mobile: req.body.mobile
    })
        .then((newContact) => {
            console.log(newContact);
            return res.redirect('back');
        })
        .catch((err) => {
            console.log('error in creating a contact');
            return;
        })
    // function(err,newContact){
    //     if(err){
    //         console.log('error in creating a contact');
    //         return;
    //     }
    //     console.log('****',newContact);
    //     return res.redirect('back');
    // }
    // sortList();
    // return res.redirect('/home');
});

app.get('/delete-contact/', function (req, res) {
    console.log(req.query);
    // let mobile = req.query.mobile;
    // let name = req.query.name;
    // Deletes all occurences

    // let newList = contactList.filter(function(task){
    //     return task.mobile!== mobile;
    // });
    // contactList=newList;

    // let contactIndex = contactList.findIndex(function (contact) {
    //     return contact.mobile == mobile && contact.name == name;
    // })
    // contactList.splice(contactIndex, 1);
    // sortList();
    // return res.redirect('/home');

    //for DB deletion
    let id = req.query.id;

    Contact.findByIdAndDelete(id)
        .then(() => {
            return res.redirect('back');
        })
        .catch((err) => {
            console.log('Error while deleting');
            return;
        });
})
app.listen(port, function (err) {
    if (err) {
        return err;
    }
    console.log("Server is working in port", port);
})