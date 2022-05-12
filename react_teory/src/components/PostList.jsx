import React, { Fragment } from "react";
import PostItem from "./PostItem";

function PostList({ posts, title, remove }) {
  return (
    <Fragment>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem
          number={index + 1}
          post={post}
          key={post.id}
          remove={remove}
        />
      ))}
    </Fragment>
  );
}

export default PostList;
