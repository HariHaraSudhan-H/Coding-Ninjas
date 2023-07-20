import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { firestore } from "../firebase";

import styled from 'styled-components';

const Heading = styled.h1`
text-align: center;
  color: #2196f3;
  margin-bottom: 2px;
  &:hover{
    color:red
  }
`

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    firestore.collection('posts').get().then((snapshot) => {
      let posts = snapshot.docs.map((doc) => {
        let data = doc.data();
        data['id'] = doc.id;
        return data;
      })

      setPosts(posts);
    }, [])
  })
  return (
    <div className="home">
      <Heading>Tech Blog</Heading>
      <div id="blog-by">Hari</div>
      {posts.map((post, index) => {
        return (<div className="post" id={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          {post.subTitle}
        </div>)
      })}
    </div>
  );
}

export default Home;