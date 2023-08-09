import React, { useEffect, useState } from 'react';
import styles from '../Styles/settings.module.css';
import { useParams } from 'react-router-dom';
import { addFriend, fetchUseProfile, removeFriend } from '../api';
import { Loader } from '../Components';
import { useAuth } from '../hooks';
const UserProfile = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [requestInProgress,setRequestInProgress] = useState(false);
  const { userId } = useParams();
  // const history = useNavigate();
  console.log(userId);
  const auth = useAuth();

  useEffect(() => {
    const getUser = async () => {
      const response = await fetchUseProfile(userId);

      if (response.success) {
        setUser(response.data.user);
      } else {
        console.log('Error', response.message);
      }

      setLoading(false);
    };

    getUser();
  }, [userId]);

  const checkIfUserIsFriend = () => {
    const friends = auth.user? auth.user.friends:[];

    const friendsId = friends.map((friend) => friend.to_user._id);
    friendsId.push('64c37ffdaca8127d5b5990b5')
    const index = friendsId.indexOf(userId);

    if (index !== -1) {
      return true;
    }
    return false;
  };

  const handleRemoveFriend = async()=>{
    setRequestInProgress(true);
    const response = await removeFriend(userId);

    if(response.success){
      const friendship = auth.user.friends.filter((friend)=>friend.to_user._id===userId);

      auth.updateUser(false,friendship);
    }else{
      console.log('error',response.message);
    }

    setRequestInProgress(false);
  }

  const handleAddFriend = async()=>{
    setRequestInProgress(true);
    const response = await addFriend(userId);
    if(response.success){
      const {friendship} = response.data;

      auth.updateUser(true,friendship);
    }else{
      console.log('error',response.message);
    }
    setRequestInProgress(false);
  }

  if (loading) {
    return <Loader />;
  }
  return (
    <div className={styles.settings}>
      <div className={styles.imgContainer}>
        <img
          src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
          alt="ProPic"
        />
      </div>
      <div className={styles.field}>
        <div className={styles.fieldLabel}>Email</div>
        <div className={styles.fieldValue}>
          {/* {auth.user && auth.user.email ? auth.user.email : 'email'} */}
          {user.email}
        </div>
      </div>
      <div className={styles.field}>
        <div className={styles.fieldLabel}>Name</div>
        <div className={styles.fieldValue}>{user.name}</div>
      </div>
      <div className={styles.btnGrp}>
        {checkIfUserIsFriend() ? (
          <button className={`button ${styles.saveBtn}`} onClick={handleRemoveFriend} disabled={requestInProgress}>{requestInProgress?'Removing Friend':'Remove Friend'}</button>
        ) : (
          <button className={`button ${styles.saveBtn}`} onClick={handleAddFriend} disabled={requestInProgress}>{requestInProgress?'Adding Friend':'Add Friend'}</button>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
