import React from "react";
import { postAPI } from "../service/PostService";

export interface IPostContainerProps {}

export default function PostContainer(props: IPostContainerProps) {
  const { data: posts } = postAPI.useFetchAllPostsQuery(5);
  return (
    <div className="post__list">
      {posts && posts.length > 0 ? (
        <div className="post__container">
          {posts.map((post) => (
            <div className="post" key={post.id}>
              {post.id}) {post.title}:{post.body}
            </div>
          ))}
        </div>
      ) : (
        <h2>Постов пока нет</h2>
      )}
    </div>
  );
}
