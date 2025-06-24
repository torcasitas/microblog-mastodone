import React, { useEffect, useState } from "react";
import PostList from "../components/PostList";
import { Post, User } from "../_interfaces/interfaces";

interface Props {
  users: User[] | null;
}

const PostsPage: React.FC<Props> = ({ users }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  console.log(`Users ${users && users[0]}`);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return <PostList posts={posts} users={users} />;
};

export default PostsPage;
