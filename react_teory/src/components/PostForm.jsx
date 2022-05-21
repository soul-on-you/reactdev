import React, { useState } from "react";
import CustomButton from "./UI/button/CustomButton";
import CustomInput from "./UI/input/CustomInput";

function PostForm({ create, ...props }) {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    console.log(post.title, post.body);
    create({ ...post, id: Date.now() });
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <CustomInput
        value={post.title}
        placeholder="Название поста"
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <CustomInput
        value={post.body}
        placeholder="Описание поста"
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <CustomButton onClick={addNewPost}>Опубликовать</CustomButton>
    </form>
  );
}

export default PostForm;
