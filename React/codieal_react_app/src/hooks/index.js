import { useContext, useEffect, useState } from 'react';
import { AuthContext, PostContext } from '../providers/';
import {
  login as userLogin,
  register,
  editProfile,
  fetchUserFriends,
  getPosts
} from '../api';
import {
  setItemLocalStorage,
  LOCALSTORAGE_TOKEN_KEY,
  removeItemLocalStorage,
  getItemLocalStorage,
} from '../utils';
import jwtDecode from 'jwt-decode';

export const useAuth = () => {
  return useContext(AuthContext);
};
export const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const userToken = getItemLocalStorage(LOCALSTORAGE_TOKEN_KEY);

      if (userToken) {
        const user = jwtDecode(userToken);
        const response = await fetchUserFriends();
        let friends = [];
        if (response.success) {
          friends = response.data.friends;
        }
        setUser({
          ...user,
          friends,
        });
      }

      setLoading(false);
    };

    getUser();
  });

  const updateUser = async (userId, name, password, confirmPassword) => {
    const response = await editProfile(userId, name, password, confirmPassword);
    console.log(response);
    if (response.success) {
      setUser(response.data.user);
      setItemLocalStorage(
        LOCALSTORAGE_TOKEN_KEY,
        response.data.token ? response.data.token : null
      );
      return {
        success: true,
      };
    } else {
      return {
        success: false,
        message: response.message,
      };
    }
  };
  const login = async (email, password) => {
    const response = await userLogin(email, password);
    if (response.success) {
      console.log('Login Hello');
      setUser(response.data.user);
      setItemLocalStorage(
        LOCALSTORAGE_TOKEN_KEY,
        response.data.token ? response.data.token : null
      );
      return {
        success: true,
      };
    } else {
      return {
        success: false,
        message: response.message,
      };
    }
  };
  const logout = (email, password) => {
    setUser(null);
    removeItemLocalStorage(LOCALSTORAGE_TOKEN_KEY);
  };
  const signup = async (name, email, password, confirmPassword) => {
    const response = await register(name, email, password, confirmPassword);
    if (response.success) {
      console.log('User registered');
      return {
        success: true,
      };
    } else {
      return {
        success: false,
        message: response.message,
      };
    }
  };

  const updateUserFriends = async (addFriend, friend) => {
    if (addFriend) {
      setUser({
        ...user,
        friends: [...user.friends, friend],
      });
      return;
    } else {
      let newFriends = user.friends.filter(
        (newFriend) => newFriend.to_user._id != friend.to_user._id
      );
      setUser({
        ...user,
        friends: newFriends,
      });
    }
  };
  return {
    user,
    login,
    logout,
    loading,
    signup,
    updateUser,
    updateUserFriends,
  };
};

export const usePosts = () => {
  return useContext(PostContext);
};

export const useProvidePosts = ()=>{
  const [posts,setPosts] = useState([]);
  const [loading,setLoading] = useState(true);

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

  const addPostToState = (post)=>{
    const newPosts = [post,...posts];

    setPosts(newPosts);
  }

  const addComment = (content,postId)=>{
    const newPosts = posts.map((post)=>{
      if(post._id===postId){
        return {
          ...post,
          comments: {...post.comments,content}
        }
      }
      setPosts(newPosts);
    })
  }
  return {
    data: posts,
    loading,
    addPostToState,addComment
  }
}
