
class postComments {
    constructor(postId) {
        this.postId = postId;
        this.postContainer = $(`#post-${postId}`);
        this.newCommentForm = $(`#post-${postId}-comments-form`);

        this.createComment(postId);
        let self = this;
        // call all existing comments for updation
        $(' .delete-comment-button', this.postContainer).each(function () {
            self.deleteComment($(this));
        })
    }
    // method to create comment using AJAX
    createComment(postId) {
        console.log('comments created')
        let pSelf = this;
        console.log($(pSelf));
        this.newCommentForm.submit(function (e) {
            e.preventDefault();
            let self = this;
            console.log($(self).serialize());
            $.ajax({
                type: 'post',
                url: '/post/createComment',
                data: $(self).serialize(),
                success: function (data) {
                    console.log(data);
                    console.log('success');
                    let newComment = pSelf.newCommentDOM(data.data.comment);
                    $(`#post-comments-${postId}>ul`).prepend(newComment);
                    // pSelf.deleteComment($(' .delete-comment-button', newComment));
                    new ToggleLike($(' .likeButton',newComment));
                    new Noty({
                        theme: 'relax',
                        text: "Comment created and published",
                        type: 'success',
                        layout: 'topRight',
                        timeout: 1500

                    }).show();
                },
                error: function (error) {
                    console.log('error',error);
                }
            });
        })
    }
    newCommentDOM(comment) {
        return $(`<li id="comment-${comment._id}">
        <span>
            <a href="/post/deleteComment/${comment._id}" class="delete-comment-button" method="POST"><i
                    class="fa-sharp fa-solid fa-trash"></i></a>
        </span>
            ${comment.content}
            <div class="likes">
                <a href="/like/toggle/?id=${comment._id}&type=Comment" id="likeButton" class="likeButton" data-likes="0">0 Likes</a>
                COMMENTED BY <span><${comment.user.name}</span>
            </div>   
        </li>`);
    }

    // method to delete comments using AJAX
    deleteComment(deleteLink) {
        console.log(deleteLink);
        $(deleteLink).click(function (e) {
            e.preventDefault();
            console.log('delete');
            $.ajax({
                type: 'get',
                url: $(deleteLink).prop('href'),
                success: function (data) {
                    console.log(data)
                    $(`#comment-${data.data.comment_id}`).remove();
                    new Noty({
                        theme: 'relax',
                        text: "Comment deleted",
                        type: 'success',
                        layout: 'topRight',
                        timeout: 1500

                    }).show();
                },
                error: function (error) {
                    console.log(error.responseText);
                }
            })
        })
    }
}

