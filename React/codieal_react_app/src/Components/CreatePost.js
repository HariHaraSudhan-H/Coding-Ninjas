import React, { useState } from 'react';
import styles from '../Styles/home.module.css';
import { addPost } from '../api';
import { usePosts } from '../hooks';

const CreatePost = () => {
  const [post, setPost] = useState('');
  const [addingPost, setAddingPost] = useState(false);
  const posts = usePosts();


  const handleAddPost = async() => {
    setAddingPost(true);
    const response = await addPost(post);
    if(response.success){
        setPost('');
        posts.addPostToState(response.data.post)
        console.log('Post created successfully...');
    }else{
        console.log('Error',response.message)
    }
    setAddingPost(false);

  };
  return (
    <div className={styles.createPost}>
      <textarea
        className={styles.addPost}
        value={post}
        onChange={(e) => {
          setPost(e.target.value);
        }}
      />
      <div>
        <button className={styles.addPostBtn} onClick={handleAddPost}>
          {addingPost ? 'Adding Post' : 'Add Post'}
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
