import React from "react";
import { Link } from "react-router-dom";
import { User, Post } from "../_interfaces/interfaces";

interface Props {
  posts: Post[];
  users: User[] | null;
}

const PostList: React.FC<Props> = ({ posts, users }) => {
  return (
    <div style={{ padding: "4rem" }}>
      <h1>Posts </h1>
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: "1.5rem" }}>
          <Link to={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>
            Authored by{" "}
            <Link to={`/posts/author/${post.userId}`}>
              {users?.filter((user) => user.id === post.userId)[0].name}
            </Link>
          </p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
