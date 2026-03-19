import React, { useEffect, useState } from "react";
import axios from "axios";

function FakePostList() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    axios.get("https://dummyjson.com/posts")
      .then(res => setPosts(res.data.posts))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Fake API Posts</h2>

      <button onClick={fetchPosts}>Refresh</button>

      {posts.map(p => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
}

export default FakePostList;