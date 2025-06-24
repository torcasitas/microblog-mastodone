import React, { useEffect, useState } from "react";
import PostList from "../components/PostList";
import { Post, CommonProps } from "../_interfaces/interfaces";

const PostsPage: React.FC<CommonProps> = ({ users }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const postsType = "All Posts";
  console.log(`Users ${users && users[0]}`);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return <PostList posts={posts} users={users} postsType={postsType} />;
};

export default PostsPage;
