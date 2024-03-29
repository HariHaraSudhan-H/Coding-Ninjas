// method to maintain the ajax request for likes

class ToggleLike {
    constructor(toggleElement) {
        this.toggler = toggleElement;
        this.toggleLike();
    }
    toggleLike() {
        let likeButton = $(this.toggler);
        likeButton.click(function (e) {
            console.log('Inside like AJAX')
            e.preventDefault();
            let self = this;
            $.ajax({
                type: 'post',
                url: likeButton.attr('href'),
            })
                .done(function (data) {
                    let message;
                    let likeCount = Number($(self).attr('data-likes'));
                    console.log('success');
                    // console.log(count);
                    // likeCount.innerHTML = "";
                    console.log(data);
                    if (data.data.deleted == true) {
                        likeCount -= 1;
                        likeButton.css('color', 'aliceblue');
                        message="You have unliked the post";
                    } else {
                        likeCount += 1;
                        likeButton.css('color', 'blue');
                        message="You have liked the post";
                    }
                    $(self).attr('data-likes', likeCount);
                    $(self).html(`${likeCount} Likes`);
                    new Noty({
                        theme: 'relax',
                        text: message,
                        type: 'success',
                        layout: 'topRight',
                        timeout: 1500
                    }).show();
                })
                .fail(function (err) {
                    console.log('Error in completing the like function', err);
                })
        });
    }
}