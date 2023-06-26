class chatEngine{
    constructor(chatBoxId,userEmail){
        this.chatBox = $(`#${chatBoxId}`);
        this.userEmail = userEmail;

        this.socket = io.connect('http://localhost:5000',{});
        if(this.userEmail){
            this.connectionHandler();
        }
    }

    connectionHandler(){
        let self = this;
        this.socket.on('connect',function(){
            console.log('connection established using sockets...');

            // asking to join room
            self.socket.emit('join_room',{
                userEmail: self.userEmail,
                chatroom:'codial'
            })

            self.socket.on('user_joined',function(data){
                console.log('a user joined',data);
            })
        });
    }
}