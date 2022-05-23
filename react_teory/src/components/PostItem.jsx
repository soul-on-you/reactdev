import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "./UI/button/CustomButton";

function PostItem({ post, number, remove }) {
  const router = useNavigate();

  return (
    <div className="post">
      <div className="post__content">
        <strong>{`${number}. ${post.title}`}</strong>
        <p>{post.body}</p>
      </div>
      <div className="post__btns">
        <CustomButton onClick={() => router(`/posts/${post.id}`)}>
          Открыть
        </CustomButton>
        <CustomButton onClick={() => remove(post)}>Удалить</CustomButton>
      </div>
    </div>
  );
}

export default PostItem;
