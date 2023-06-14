const Friendship = require('../models/friendships');
const User = require('../models/user');

module.exports.addFriend = async function(req,res){
    try {
        let existingFriendship = await Friendship.findOne({
            from_user:req.user.id,
            to_user: req.query.id
        });
        let fromUser = await User.findById(req.user.id);
        let toUser = await User.findById(req.query.id);

        let deleted = false;

        if(existingFriendship){
            console.log(existingFriendship)
            toUser.friends.pull(existingFriendship._id);
            fromUser.friends.pull(existingFriendship._id);
            toUser.save();
            fromUser.save();
            existingFriendship.deleteOne();
            deleted=true;
            removedFriend = true;
        }else{
            let friendship = await Friendship.create({
                from_user:req.user._id,
                to_user: req.query.id
            });
            fromUser.friends.push(friendship);
            toUser.friends.push(friendship);
            toUser.save();
            fromUser.save();
        }
        if(req.xhr){
            console.log('inside friends xhr')
            return res.json('200',{
                message:'Friends Toggle Successful',
                data:{
                    deleted:deleted,
                    toUser:toUser
                }
            })
        }
    } catch (error) {
        console.log('Error in adding user as friend',error);
        return res.json('500',{
            message: 'Internal Server Error'
        })
    }
}
