const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');


// states how the communication is to be taken place || send the mails
let transporter = nodemailer.createTransport({
    service:'gmail',
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    auth:{
        user:'hari.sudhan612@gmail.com',
        pass:'dtjzmfvngqbfirjd'
    }
})

// renders for the mail HTML
let renderTemplate = (data,relativePath)=>{
    let mailHTML;
    ejs.renderFile(
        path.join(__dirname,'../views/mailers',relativePath),
        data,
        function(err,template){
            if(err){
                console.log('error in rendering the template',err);
                return;
            }

            mailHTML = template;
        }     
    ) 
    return mailHTML;
}

module.exports = {
    transporter:transporter,
    renderTemplate:renderTemplate
}