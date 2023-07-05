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

        let sendMsg = document.getElementById('sendMsg');
        sendMsg.addEventListener('click',function(){
            let msg = document.getElementById('chat-input').innerText;

            if(msg!=''){
                self.socket.emit('sendMsg',{
                    message: msg,
                    userEmail: self.userEmail,
                    chatroom: 'Codial'
                })
            }
        })

        self.socket.on('recieve_Message',function(data){
            console.log('Message Recieved',data.message);
            let messageType = 'other-message';
            if(data.userEmail==self.userEmail){
                messageType = 'self-message';
            }
            document.getElementById('message-display').innerHTML+=`<li class="${messageType}">
            ${data.message} ${data.userEmail}
        </li>`
        })
    }
}