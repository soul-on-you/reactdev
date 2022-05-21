import React, { useEffect, useState } from "react";
import PostService from "./API/PostService";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import CustomButton from "./components/UI/button/CustomButton";
import CustomModal from "./components/UI/modal/CustomModal";
import { usePosts } from "./hooks/usePosts";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Язык программировани" },
    { id: 2, title: "Python", body: "Язык программировани" },
    { id: 3, title: "Go", body: "Язык программировани" },
    { id: 4, title: "Solidity", body: "Язык программировани" },
  ]);

  const [posts2] = useState([
    { id: 1, title: "BTC", body: "Цена курс риски" },
    { id: 2, title: "ETH", body: "Цена курс риски" },
    { id: 3, title: "USDT", body: "Цена курс риски" },
    { id: 4, title: "BNB", body: "Цена курс риски" },
  ]);

  const [isPostLoading, setIsPostLoading] = useState(false);

  const [filter, setFilter] = useState({ sortMode: "", searchQuery: "" });

  const fetchPosts = async () => {
    setIsPostLoading(true);

    const serverPosts = (await PostService.getAll())
      .splice(0, 10)
      .map((post) => ({ id: post.id, title: post.title, body: post.body }));

    setPosts(serverPosts);
    setIsPostLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

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

  const [modal, setModal] = useState(false);

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

      {isPostLoading
      ?<h1>Идет загрузка</h1>
      :<PostList
        posts={searchedAndSortedPosts}
        remove={removePost}
        title={"Список постов про программирование"}
      />}

      <PostList
        posts={posts2}
        remove={removePost}
        title={"Список постов про криптовалюты"}
      />
    </div>
  );
}

export default App;
