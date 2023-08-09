import React, { useState } from 'react';
import styles from '../Styles/login.module.css';
import { useAuth } from '../hooks';
import { useNavigate,Navigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signingUp, setSigningUp] = useState(false);
  const history = useNavigate();
  const auth = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSigningUp(true);
    let error = false;
    if (!name || !password || !email || !confirmPassword) {
      error = true;
    }

    if (password !== confirmPassword) {
      error = true;
    }

    if (error) {
      setSigningUp(false);
    }
    const response = auth.signup(name, email, password, confirmPassword);
    console.log(response);
    if (response.success) {
      history.push('/login');
      setSigningUp(false);
      console.log('successfully Signed Up...');
    } else {
      console.log('error in Signing Up...');
    }

    setSigningUp(false);
  };

  if(auth.user){
    return <Navigate to='/' replace/>;
  }

  return (
    <div>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h3 className={styles.loginSignupHeader}>Sign Up</h3>
        <div className={styles.field}>
          <input
            type="text"
            placeholder="name"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className={styles.field}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className={styles.field}>
          <input
            type="password"
            placeholder="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className={styles.field}>
          <input
            type="password"
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
        <div className={styles.field}>
          <button disabled={signingUp}>
            {signingUp ? 'Signing Up' : 'Sign Up'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;