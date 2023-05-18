const User = require('../models/user')

module.exports.userProfile = function(req,res){
    return res.render('user',{
        title: 'Codial',
        user:{
            name:'Hari'
        }
    });
}
module.exports.signup = function(req,res){
    return res.render('signup',{
        title:'Codial'
    });
}
module.exports.signin = function(req,res){
    return res.render('signin',{
        title:'Codial'
    });
}
module.exports.displaySignIn = function(req,res){
    console.log(req.query);
    // if(req.query.password!==)
    User.findOne({email:req.query.email})
    .then((userDisplay)=>{
        console.log(userDisplay);
        return res.render('user',{
            title:'Codial',
            user:{
                name:userDisplay.name,
                email:userDisplay.email,
                password:userDisplay.password
            }
        });
    })
    .catch((err)=>{
        console.log('error not found')
    })
    
}
