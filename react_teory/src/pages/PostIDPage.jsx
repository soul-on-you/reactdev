import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import CustomLoader from "../components/UI/Loader/CustomLoader";
import { useFetching } from "../hooks/useFetching";

function PostIDPage() {
  const params = useParams();
  const [postData, setPostData] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchPost(params.id);
    fetchComments(params.id);
  }, []);

  const [fetchPost, isPostLoading, postError] = useFetching(async (id) => {
    const response = (await PostService.getPost(id)).data;
    setPostData({ ...response[0] });
  });

  const [fetchComments, isCommentsLoading, commentsError] = useFetching(
    async (id) => {
      const response = (await PostService.getPostComment(id)).data;
      setComments([...response]);
    }
  );

  return (
    <div className="App">
      <h2 style={{ marginTop: 30, display: "flex", justifyContent: "center" }}>
        ВЫ открыли страницу поста {params.id}
      </h2>
      {postError && <h1>Ошибка при запросе постов: {postError}</h1>}
      {isPostLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
          }}
        >
          <CustomLoader />
        </div>
      ) : (
        <div className="post">
          <div className="post__content">
            <strong>{`${postData.id}. ${postData.title}`}</strong>
            <p>{postData.body}</p>
          </div>
        </div>
      )}
      <h1>Комментарии</h1>
      {commentsError && <h1>Ошибка при запросе постов: {commentsError}</h1>}
      {isCommentsLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
          }}
        >
          <CustomLoader />
        </div>
      ) : (
        <div>
          {comments.map((comment, index) => (
            <div className="post">
              <div className="post__content" key={comment.id}>
                <strong>{`${index+1}. ${comment.email}. ${comment.name}`}</strong>
                <p>{comment.body}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PostIDPage;
