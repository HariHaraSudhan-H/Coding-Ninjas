import React, { useState } from 'react';
import styles from '../Styles/home.module.css';
import Comment from './Comment';
import { Link } from 'react-router-dom';
import { addComment, toggleLike } from '../api';
import { usePosts } from '../hooks';

const Post = ({ post }) => {
  const [comment,setComment] = useState('');
  const [creatingComment,setCreatingComment] = useState(false);
  const posts = usePosts();

  const handleAddComment = async(e)=>{
    if(!creatingComment&&e.key==='Enter'){
      setCreatingComment(true);
      console.log(comment);
      const response = await addComment(comment,post._id);

      if(response.success){
        setComment('');
        posts.addComment(comment,post._id);
        console.log('COmment added...');
      }else{
        console.log('Error...',response.message);

      }

      setCreatingComment(false);
    }
  }

  const handlePostLikeClick = async()=>{
    const response = await toggleLike(post._id,'Post');

    if(response.success){
      if(response.data.deleted){
        console.log('Like removed successfully...');
      }else{
        console.log('Liked successfully...');
      }
    }else{
      console.log('Error in Liking',response.message);
    }
  }

  return (
    <div className={styles.postWrapper} key={post._id}>
      <div className={styles.postHeader}>
        <div className={styles.postAvatar}>
          <img
            src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
            alt="user-pic"
          />
          <div>
            <Link
              to={{
                pathname: `/user/${post.user._id}`,
              }}
              state = {
                {user : post.user}
              }
              className={styles.postAuthor}
            >
              {post.user.name}
            </Link>
            <span className={styles.postTime}>a minute ago</span>
          </div>
        </div>
        <div className={styles.postContent}>{post.content}</div>

        <div className={styles.postActions}>
          <div className={styles.postLike}>
            <button
            onClick={handlePostLikeClick}
            >
            <img
              src="https://cdn.icon-icons.com/icons2/1744/PNG/512/3643770-favorite-heart-like-likes-love-loved_113432.png"
              alt="likes-icon"
            />
            </button>
            <span>{post.likes.length}</span>
          </div>

          <div className={styles.postCommentsIcon}>
            <img
              src="https://cdn.icon-icons.com/icons2/2066/PNG/512/comments_alt_icon_125319.png"
              alt="comments-icon"
            />
            <span>{post.comments.length}</span>
          </div>
        </div>
        <div className={styles.postCommentBox}>
          <input
            placeholder="Start typing a comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              onKeyDown={handleAddComment}
          />
        </div>

        <div className={styles.postCommentsList}>
          {post.comments.map((comment) => (
            <Comment comment={comment} key={`post-comment-${comment._id}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
