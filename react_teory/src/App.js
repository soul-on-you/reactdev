import React, { useEffect, useState } from "react";
import PostService from "./API/PostService";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import CustomButton from "./components/UI/button/CustomButton";
import CustomModal from "./components/UI/modal/CustomModal";
import { usePosts } from "./hooks/usePosts";
import "./styles/App.css";
import CustomLoader from "./components/UI/Loader/CustomLoader";
import { useFetching } from "./hooks/useFetching";
import { getPagesCount } from "./utils/pages";
import CustomPagination from "./components/UI/pagination/CustomPagination";

function App() {
  const [posts, setPosts] = useState([
    // {id: 1, title: "JavaScript", body: "Язык программировани"},
    // {id: 2, title: "Python", body: "Язык программировани"},
    // {id: 3, title: "Go", body: "Язык программировани"},
    // {id: 4, title: "Solidity", body: "Язык программировани"},
  ]);
  const [filter, setFilter] = useState({ sortMode: "", searchQuery: "" });
  const [modal, setModal] = useState(false);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // const [isPostLoading, setIsPostLoading] = useState(false);
  const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPagesCount(totalCount, limit));
  });

  //   const pagesArray = useMemo(() => {
  //     const pages = [];
  //     console.log("pagesArray");
  //     for (let i = 0; i < totalPages; i++) pages.push(i + 1);
  //     return pages;
  //   }, [totalPages]);

  // const fetchPosts = async () => {
  //     setIsPostLoading(true);
  //     setTimeout(async () => {
  //
  //         const serverPosts = (await PostService.getAll())
  //             .splice(0, 10)
  //             .map((post) => ({id: post.id, title: post.title, body: post.body}));
  //
  //         setPosts(serverPosts);
  //         setIsPostLoading(false);
  //     }, 10000)
  // };

  useEffect(() => {
    fetchPosts();
  }, [page]);

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

      {postsError && <h1>Ошибка при запросе постов: {postsError}</h1>}
      {isPostsLoading ? (
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
        <PostList
          posts={searchedAndSortedPosts}
          remove={removePost}
          title={"Список постов про программирование"}
        />
      )}
      <CustomPagination
        totalPages={totalPages}
        currentPage={page}
        setPage={setPage}
      />
    </div>
  );
}

export default App;
