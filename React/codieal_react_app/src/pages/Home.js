import styles from '../Styles/home.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Post from '../Components/Post';

const Home = ({ posts }) => {
  console.log(posts);
  //   const { posts } = props;
  return (
    // <div className="posts-list">
    //     Homepage
    // </div>
    <div className={styles.home}>
      <div className={styles.postsList}>
        {/* <CreatePost /> */}
        {posts.map((post) => (
            <Post post={post} key={`post-${post._id}`} />
        ))}
      </div>
      {/* {auth.user && <FriendsList />} */}
    </div>
  );
};

Home.propTypes = {
  posts: PropTypes.array.isRequired
}
export default Home;

