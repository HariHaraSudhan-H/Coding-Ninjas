const User = require('../../../models/user');
const jwt = require('jsonwebtoken');
const env = require('../../../config/environment');

module.exports.displaySignIn = async function (req, res) {
    try {
        let user = await User.findOne({email:req.body.email});
        if(!user || req.body.password != user.password){
            return res.json(422,{
                message : 'Invalid Username/Password'
            });
        }else{
            return res.json(200,{
                message:'Here is your token, Handle it safe',
                data:{
                    token:jwt.sign(user.toJSON(),env.jwt_secret,{expiresIn:'100000'})
                }
            })
        }
    } catch (error) {
        return res.json(500,{
            message:"Internal Server Error"
        })
    }

}