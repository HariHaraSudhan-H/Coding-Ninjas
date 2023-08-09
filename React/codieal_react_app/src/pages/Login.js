import React, { useState } from 'react';
import styles from '../Styles/login.module.css';
import { useAuth } from '../hooks';
import { redirect,Navigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);
  const auth = useAuth();
  const handleSubmit = async(e)=>{
    e.preventDefault();
    setLoggingIn(true);

    const response = auth.login(email,password);
    console.log(response);
    if(response.success){
        console.log('successfully login in...');
    }else{
        console.log('error in login in...');
    }

    setLoggingIn(false);
  }

  if(auth.user){
    return <Navigate to='/' replace/>;
  }

  return (
    <div>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h3 className={styles.loginSignupHeader}>Log In</h3>
        <div className={styles.field}>
          <input type="email" placeholder="Email" required value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        </div>
        <div className={styles.field}>
          <input type="password" placeholder="password" required value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <div className={styles.field}>
          <button disabled={loggingIn}>{loggingIn? 'Logging In':'Log In'}</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
