
const Task = require('../models/task');
module.exports.create = function(req,res){
    console.log(req.body);
    Task.create({
        description: req.body.description,
        dueDate: req.body.dueDate,
        category: req.body.category,
        completed: false
    })
        .then((newTask) => {
            // console.log(newTask);
            return res.redirect('back');
        })
        .catch((err) => {
            console.log('Error in creating task',err);
            return;
        })
}