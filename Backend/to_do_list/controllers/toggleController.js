
const Task = require('../models/task');
module.exports.toggle = function(req,res){
    let changeid = req.query.id;
    let changeCompleted = (req.query.completed)=='false';
    // console.log(changeCompleted)
    Task.updateOne({_id:changeid},{
        $set:{
            completed:changeCompleted
        }
    })
    .then((task)=>{
        return res.redirect('back');
    })
    .catch(()=>{
        console.log('error');
        return;
    })
}