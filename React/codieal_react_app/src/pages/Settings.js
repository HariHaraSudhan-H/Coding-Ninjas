import React, { useState } from 'react';
import styles from '../Styles/settings.module.css';
import { useAuth } from '../hooks';
const Settings = () => {
  const auth = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [Name, setName] = useState('Guest');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [savingForm, setSavingForm] = useState(false);
  const handleEditProfile = () => {
    setEditMode(!editMode);
    setSavingForm(false);
  };

  const clearForm = ()=>{
    setPassword('');
    setconfirmPassword('')
  }
  const updateProfile = async ()=>{
    setSavingForm(true);
    let error = false;
    if(!Name,!password,!confirmPassword){
        console.log('Enter all fields...');
        error=true;
    }
    if(password!==confirmPassword){
        console.log('password and confirm password do not match');
        error=true
    }

    if(error){
        return setSavingForm(false);
    }

    const response = await auth.updateUser(auth.user._id,Name,password,confirmPassword);

    if(response.success){
        setEditMode(false);
        setSavingForm(false);
    }else{

    }
    setSavingForm(false);
    clearForm();
  }

  // if(!auth.user){
  //   return <Navigate to='/' replace/>;
  // }
  return (
    <div className={styles.settings}>
      <div className={styles.imgContainer}>
        <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="profile picture" />
      </div>
      <div className={styles.field}>
        <div className={styles.fieldLabel}>Email</div>
        <div className={styles.fieldValue}>
          {auth.user && auth.user.email ? auth.user.mail : 'email'}
        </div>
      </div>
      <div className={styles.field}>
        <div className={styles.fieldLabel}>Name</div>
        {editMode ? (
          <input
            type="text"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          <div className={styles.fieldValue}>{Name}</div>
        )}
      </div>
      {editMode && (
        <>
          <div className={styles.field}>
            <div className={styles.fieldLabel}>Password</div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <div className={styles.fieldLabel}>Confirm Password</div>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
            />
          </div>
        </>
      )}
      {editMode ? (
        <div className={styles.btnGrp}>
          <button
            className={`button ${styles.saveBtn}`}
            onClick={updateProfile}
            disabled={savingForm}
          >
            {savingForm ? 'Saving Form...' : 'Save'}
          </button>
          <button
            className={`button ${styles.goBack}`}
            onClick={handleEditProfile}
          >
            Go Back
          </button>
        </div>
      ) : (
        <div className={styles.btnGrp}>
          <button
            className={`button ${styles.editBtn}`}
            onClick={handleEditProfile}
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default Settings;
