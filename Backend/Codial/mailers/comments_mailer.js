const nodeMailer = require('../config/nodemailer');

// this is another way of exporting a method
exports.newComment = (comment)=>{
    console.log('inside newComment mailer',comment);
    let htmlString = nodeMailer.renderTemplate({comment:comment},'/comments/new_comment.ejs');
    nodeMailer.transporter.sendMail({
        from:'notification@codial.com',
        to: comment.post.user.email,
        subject: `${comment.user.name} commented to your post`,
        html:htmlString
    })
    .then((info)=>{
        console.log('Message sent',info);
        return;
    })
    .catch((err)=>{
        console.log('Error in message delivery',err);
        return;
    })
}
