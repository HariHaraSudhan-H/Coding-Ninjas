const express = require('express');
const path = require('path');
const port = 8000;
const db = require('./config/mongoose');
const Task = require('./models/task');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(express.urlencoded());
app.use(express.static('assets'))
app.use('/',require('./routes/index'),Task);

// app.get('/', function (req, res) {
//     //fetching data from DB
//     Task.find({})
//         .then((tasks) => {
//             return res.render('home', {
//                 title: "ToDo App",
//                 task_list: tasks
//             });
//         })
//         .catch((err) => {
//             console.log('error in reading the data');
//             return;
//         })
// });

// // creating new tasks
// app.post('/new-task', function (req, res) {
//     console.log(req.body);
//     Task.create({
//         description: req.body.description,
//         dueDate: req.body.dueDate,
//         category: req.body.category,
//         completed: false
//     })
//         .then((newTask) => {
//             // console.log(newTask);
//             return res.redirect('back');
//         })
//         .catch((err) => {
//             console.log('Error in creating task',err);
//             return;
//         })
// });

// // deleting tasks
// app.get('/delete-task',function(req,res){
//     // console.log(req.query);
//     Task.findByIdAndDelete(req.query.id)
//     .then(()=>{
//         return res.redirect('back');
//     })
//     .catch((err)=>{
//         console.log('Error in deleting the task');
//         return;
//     })
    
// })

// // toggling tasks
// app.get('/toggle-task',function(req,res){
//     // console.log(req.query);
//     let changeid = req.query.id;
//     let changeCompleted = (req.query.completed)=='false';
//     // console.log(changeCompleted)
//     Task.updateOne({_id:changeid},{
//         $set:{
//             completed:changeCompleted
//         }
//     })
//     .then((task)=>{
//         return res.redirect('back');
//     })
//     .catch(()=>{
//         console.log('error');
//         return;
//     })
    
// })

app.listen(port, function (err) {
    if (err) {
        console.log('Error in running the server');
    }
    console.log('Server is working in port', port);
});