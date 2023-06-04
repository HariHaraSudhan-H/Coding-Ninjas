// method to submit form data using AJAX
{
    console.log('connected');

    let createPost = function () {
        let newPostForm = $("#post-form");
        // $(document).ready(function () {
        newPostForm.submit(function (e) {
            console.log(newPostForm.serialize());
            console.log('submit');
            e.preventDefault();
            $.ajax({
                type: 'post',
                url: '/post/create',
                data: newPostForm.serialize(),
                success: function (data) {
                    console.log('success');
                    let newPost = createPostDOM(data.data.post);
                    console.log(data);
                    $('#postListContainer>ul').prepend(newPost);
                    deletePost($(' .delete-post-button', newPost));
                    console.log(data.data.post._id);
                    new postComments(data.data.post._id)
                    console.log(data);
                    new Noty({
                        theme: 'relax',
                        text: "Post created and published",
                        type: 'success',
                        layout: 'topRight',
                        timeout: 1500

                    }).show(); 
                }, error: function (error) {
                    console.log(error.responseText);
                }
            });
        });
        // })


    }
    // method to submit form data using AJAX
    let createPostDOM = function (post) {
        return $(`<li id="post-${post._id}">
            <span>
                <a href="/post/deletePost/${post._id}" class="delete-post-button"><i
                        class="fa-sharp fa-solid fa-trash"></i></a>
            </span>
                ${post.content}
                    <div>POSTED BY ${post.user.name}
                    </div>
                    <div class="post-comments">
                        <form action="/post/createComment" id="new-comment-form" method="POST">
                            <textarea name="content" id="content" cols="30" rows="1"
                                placeholder="Type for comments"></textarea>
                            <input type="hidden" name="post" value="${post._id}">
                            <input type="submit" value="POST">
                        </form>
                        <h5>Comments</h5>
                        <ul id="post-comments-${post.id}">
                        </ul>
                    </div>
    </li>`)
    }
    

    // method to delete the post using AJAX
    let deletePost = function (deleteLink) {
        $(deleteLink).click(function (e) {
            e.preventDefault();
            console.log('submit');
            $.ajax({
                type: 'get',
                url: $(deleteLink).prop('href'),
                success: function (data) {
                    console.log(data)
                    $(`#post-${data.data.post_id}`).remove();
                    new Noty({
                        theme: 'relax',
                        text: "Post Deleted",
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
    let applyAJAX = function(){
        $('#postListContainer>ul>li').each(function(){
             console.log('applied')
        let self = $(this);
        let deleteButton = $(' .delete-post-button',self);
        deletePost(deleteButton);

        // get the post's id by splitting the id attribute
        console.log(self.prop('id'));
        let postId = self.prop('id').split('-')[1];
        new postComments(postId);
        })
       
    }
    createPost();
    applyAJAX();
}
