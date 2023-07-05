const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');
const env = require('./environment');

// states how the communication is to be taken place || send the mails
let transporter = nodemailer.createTransport(env.smtp)

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