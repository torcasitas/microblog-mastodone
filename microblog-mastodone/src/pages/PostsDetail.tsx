import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Comment, Post, CommonProps, User } from "../_interfaces/interfaces";

const PostDetail: React.FC<CommonProps> = ({ users }) => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((data) => setPost(data));

      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((res) => res.json())
        .then((data) => setComments(data));
    }
  }, [id]);

  if (!post) return <p>Loading...</p>;

  const user: User[] = users?.filter((user) => user.id === post.userId) || [];

  return (
    <div style={{ padding: "4rem" }}>
      <h1>Post Detail</h1>
      <h2>{post.title}</h2>
      <p>
        Authored by
        <Link to={`/posts/author/${post.userId}`}>
          {" "}
          {user && user.length ? user[0].name : "n/a"}
        </Link>
      </p>
      <p>{post.body}</p>

      <h3>Comments</h3>
      {comments.map((comment: Comment) => (
        <div key={comment.id}>
          <strong>{comment.name}</strong> ({comment.email})<p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostDetail;
