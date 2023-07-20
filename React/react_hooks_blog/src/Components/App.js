import { Routes, Route } from 'react-router-dom';
// import {Home,Navbar,CreatePost,PostDetail} from './';
import Home from './Home';
import CreatePost from './CreatePost';
import PostDetail from './PostDetail';
import Navbar from './Navbar';
import { StyleRoot } from 'radium';
function App() {
  return (
    <StyleRoot>
      <div className="container">
        <Navbar />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/post/:postId' Component={PostDetail} />
          <Route exact path='/create-post' Component={CreatePost} />
        </Routes>
      </div>
    </StyleRoot>

  );
}

export default App;
