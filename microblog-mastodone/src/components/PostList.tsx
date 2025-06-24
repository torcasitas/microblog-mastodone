import React from "react";
import { Link } from "react-router-dom";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Props {
  posts: Post[];
}

const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div style={{ padding: "4rem" }}>
      <h1>Posts </h1>
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: "1.5rem" }}>
          <Link to={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>
            by{" "}
            <Link to={`/posts/author/${post.userId}`}>
              Author {post.userId}
            </Link>
          </p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
