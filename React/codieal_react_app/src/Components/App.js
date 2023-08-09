// import { Home, Login,SignUp,Settings,UserProfile } from '../pages';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Settings from '../pages/Settings';
// import UserProfile from '../pages/UserProfile';
import Loader from './Loader';
import Navbar from './Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';

const Error = ()=>{
  return<h1>404 Error</h1>
}

const PrivateRoute = ({children,...rest})=>{
  const auth = useAuth();
  if(auth.user){
    return children;
  }
  return <Navigate to='/login' replace/>
}

function App() {
  const auth = useAuth();
  if (auth.loading) {
    return <Loader />;
  }
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/settings' element={<PrivateRoute><Settings/></PrivateRoute>}/>
        {/* <Route path='/user/:userId' element={<UserProfile/>}/> */}
        <Route path='*' Component={Error}></Route>
      </Routes>
    </div>
  );
}

export default App;
