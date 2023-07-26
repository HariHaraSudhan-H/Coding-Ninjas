import { useEffect, useState } from 'react';
import { getPosts } from '../api/index';
import Home from '../pages/Home';
import Loader from './Loader';
import Navbar from './Navbar';


function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      console.log('response', response.data.posts);
      if (response.success) {
        setPosts(response.data.posts);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="App">
      <Navbar/>
      <Home posts={posts} />
      
    </div>
  );
}

export default App;
