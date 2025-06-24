import React from "react";
import { Link } from "react-router-dom";
import { User, Post, CommonProps } from "../_interfaces/interfaces";

const PostList: React.FC<CommonProps> = ({ posts, users, postsType }) => {
  return (
    <div style={{ padding: "4rem" }}>
      <h1>{postsType}</h1>
      {posts?.map((post) => (
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
