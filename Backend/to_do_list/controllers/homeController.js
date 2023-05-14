const Task = require('../models/task');
module.exports.home = function (req, res) {
    Task.find({})
        .then((tasks) => {
            return res.render('home', {
                title: "ToDo App",
                task_list: tasks
            });
        })
        .catch((err) => {
            console.log('error in reading the data');
            return;
        })
}