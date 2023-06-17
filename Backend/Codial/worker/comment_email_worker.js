const queue = require('../config/kue');

const commentMailer = require('../mailers/comments_mailer');

queue.process('emails',function(job,done){
    console.log('Emails workers is processing a job',job.data);

    commentMailer.newComment(job.data);

    done();
});