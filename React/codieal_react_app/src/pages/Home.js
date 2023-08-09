import styles from '../Styles/home.module.css';
import { getPosts } from '../api/index';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Post from '../Components/Post';
import { useEffect, useState } from 'react';
import { useAuth, usePosts } from '../hooks';
import FriendsList from '../Components/FriendsList';
// import { CreatePost, Loader } from '../Components';
import CreatePost from '../Components/CreatePost';
import Loader from '../Components/Loader';


const Home = () => {
  const auth = useAuth();
  const posts = usePosts();

  if(posts.loading){
    return <Loader/>
  }
  return (
      <div className={styles.home}>
        <div className={styles.postsList}>
          <CreatePost />
          {posts.data.map((post) => (
            <Post post={post} key={`post-${post._id}`} />
          ))}
        </div>
        {auth.user && <FriendsList />}
      </div>
  );
};

export default Home;
