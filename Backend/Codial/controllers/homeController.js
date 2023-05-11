module.exports.home = function(req,res){
    return res.render('home',{
        title: 'Codial',
        user:{
            name:'Hari'
        }
    });
}