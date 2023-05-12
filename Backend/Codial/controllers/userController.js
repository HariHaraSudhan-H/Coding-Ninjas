module.exports.userProfile = function(req,res){
    return res.render('user',{
        title: 'Codial',
        user:{
            name:'Hari'
        }
    });
}
// module.exports.newPost = function(req,res){
//     return res.end('<h1>Hello World!</h1>');
// }