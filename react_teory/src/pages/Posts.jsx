import React, { useEffect, useRef, useState } from "react";
import PostService from "../API/PostService";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import CustomButton from "../components/UI/button/CustomButton";
import CustomModal from "../components/UI/modal/CustomModal";
import { usePosts } from "../hooks/usePosts";
// import "./styles/Posts.css";
import CustomLoader from "../components/UI/Loader/CustomLoader";
import { useFetching } from "../hooks/useFetching";
import { getPagesCount } from "../utils/pages";
import CustomPagination from "../components/UI/pagination/CustomPagination";
import { useObserver } from "../hooks/useObserver";
import CustomSelect from "../components/UI/select/CustomSelect";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sortMode: "", searchQuery: "" });
  const [modal, setModal] = useState(false);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const lastElement = useRef();
  // const observer = useRef();

  const [fetchPosts, isPostsLoading, postsError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts([...posts, ...response.data]);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPagesCount(totalCount, limit));
    }
  );

  // useEffect(() => {
  //   if (isPostsLoading) return;
  //   if (observer.current) observer.current.disconnect();
  //   const callback = (entries, observer) => {
  //     if (entries[0].isIntersecting && page < totalPages) {
  //       setPage(page + 1);
  //     }
  //   };
  //   observer.current = new IntersectionObserver(callback);
  //   observer.current.observe(lastElement.current);
  // }, [isPostsLoading]);

  useObserver(lastElement, isPostsLoading, page < totalPages, () =>
    setPage(page + 1)
  );

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page /*, limit*/]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (deletingPost) => {
    setPosts(posts.filter((post) => post.id !== deletingPost.id));
  };

  const searchedAndSortedPosts = usePosts(
    posts,
    filter.sortMode,
    filter.searchQuery
  );

  return (
    <div className="App">
      <CustomButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Создать пост
      </CustomButton>
      <CustomModal visible={modal} setVisible={setModal}>
        <PostForm posts={posts} create={createPost} />
      </CustomModal>

      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      <CustomSelect
        value={limit}
        onChange={(value) => {
          setLimit(value);
          setPage(0);
        }}
        defaultValue="Кол-во элементов на странице"
        options={[
          { text: "5", value: "5" },
          { text: "10", value: "10" },
          { text: "25", value: "25" },
          { text: "40", value: "40" },
          { text: "Все", value: "-1" },
        ]}
      />

      {postsError && <h1>Ошибка при запросе постов: {postsError}</h1>}
      <PostList
        posts={searchedAndSortedPosts}
        remove={removePost}
        title={"Список постов про программирование"}
      />
      <div ref={lastElement}></div>
      {isPostsLoading && (
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
      )}
      <CustomPagination
        totalPages={totalPages}
        currentPage={page}
        setPage={setPage}
      />
    </div>
  );
}

export default Posts;
