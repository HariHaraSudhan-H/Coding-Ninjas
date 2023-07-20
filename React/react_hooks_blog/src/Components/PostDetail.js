import { useEffect, useState } from "react";
import { firestore } from '../firebase';
import { useParams } from 'react-router-dom';
import Radium from "radium";

function PostDetail() {
  const [post, setPost] = useState({})
  const { postId } = useParams()
  useEffect(() => {
    firestore.collection('posts')
      .doc(postId).get()
      .then((snapshot) => {
        console.log('snapshot', snapshot.data());
        setPost(snapshot.data());
      })
  }, [postId])
  return (
    <div className="post-detail">
      <h1 style={styles.heading}>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default Radium(PostDetail);

const styles = {
  heading: {
    textAlign: 'center',
    "&:hover": {
      backgroundColor: "green",
      cursor: 'pointer'
    },
    "@media(max-width)":{
      color:'orange'
    }
  }
}