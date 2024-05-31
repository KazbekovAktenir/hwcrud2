import React, { useEffect, useState } from "react";
import { API } from "../helpers/count";
import PostCard from "./PostCard";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="post-list">
      {posts.map((elem) => (
        <PostCard key={elem.id} {...elem} getPosts={getPosts} />
      ))}
    </div>
  );
};

export default PostList;
