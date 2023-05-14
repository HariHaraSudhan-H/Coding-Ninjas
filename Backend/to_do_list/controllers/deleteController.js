
const Task = require('../models/task');
module.exports.delete = function (req, res) {
    let description = Task.find({ id: req.query.id })
    Task.findByIdAndDelete(req.query.id)
        .then(() => {
            return res.redirect('back');
        })
        .catch((err) => {
            console.log('Error in deleting the task');
            return;
        })

}