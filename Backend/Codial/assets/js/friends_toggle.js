let toggleFriend = function(){
    console.log('Connected to friends_toggle')
    let toggleFriendButton = $('.addFriendButton');
    toggleFriendButton.click(function(e){
        e.preventDefault();
        $.ajax({
            type: 'GET',
            url: toggleFriendButton.attr('href'),
            success:function(data){
                if(data.data.deleted){
                    toggleFriendButton.html('Add Friend');
                    new Noty({
                        theme: 'relax',
                        text: `Removed from your friends`,
                        type: 'success',
                        layout: 'topRight',
                        timeout: 1500
                    }).show();
                }else{
                    toggleFriendButton.html('Remove Friend');
                    new Noty({
                        theme: 'relax',
                        text: `Added to your friends`,
                        type: 'success',
                        layout: 'topRight',
                        timeout: 1500
                    }).show();
                }
            },
            error:function(err){
                console.log(err.responseText)
            }
        });
    })
    
}
toggleFriend();