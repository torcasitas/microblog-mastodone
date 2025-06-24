import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostList from "../components/PostList";
import { CommonProps, Post } from "../_interfaces/interfaces";

const PostsByAuthor: React.FC<CommonProps> = ({ users }) => {
  const { id } = useParams<{ id: string }>();
  const [posts, setPosts] = useState<Post[]>([]);
  const postsType = "Posts By Author";

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((res) => res.json())
        .then((data) => setPosts(data));
    }
  }, [id]);

  return <PostList posts={posts} users={users} postsType={postsType} />;
};

export default PostsByAuthor;
