module.exports.chatSockets = function(chatServer,corsOptions){
    let io = require('socket.io')(chatServer,corsOptions);

    io.sockets.on('connection',function(socket){
        console.log('new connection recieved',socket._id);
        socket.on('disconnect',function(){
            console.log('connection disconnected');
        })

        socket.on('join_room',function(data){
            console.log('joining request...',data);

            // if exists will add the user to chatroom if not creates this chat room
            socket.join(data.chatRoom);
            // notifies the other user about the entry of new user
            io.in(data.chatRoom).emit('user_joined',data);
        });

        socket.on('sendMsg',function(data){
            io.in(data.chatRoom).emit('recieve_Message',data);
        })
    })
}