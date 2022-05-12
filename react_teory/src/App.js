import React, { useMemo, useState } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
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

  const [filter, setFilter] = useState({ sortMode: "", searchQuery: "" });

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (deletingPost) => {
    setPosts(posts.filter((post) => post.id !== deletingPost.id));
  };

  const getSortedPosts = () => {
    return filter.sortMode
      ? [...posts].sort((postA, postB) =>
          postA[filter.sortMode].localeCompare(postB[filter.sortMode])
        )
      : posts;
  };

  const sortedPosts = useMemo(getSortedPosts, [posts, filter.sortMode]);

  const searchedPosts = useMemo(() => {
    return filter.searchQuery
      ? sortedPosts.filter(
          (post) =>
            post.title
              .toLowerCase()
              .includes(filter.searchQuery.toLowerCase()) ||
            post.body.toLowerCase().includes(filter.searchQuery.toLowerCase())
        )
      : sortedPosts;
  }, [filter.searchQuery, sortedPosts]);

  return (
    <div className="App">
      <PostForm posts={posts} create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {searchedPosts.length ? (
        <PostList
          posts={searchedPosts}
          remove={removePost}
          title={"Список постов про программирование"}
        />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>
      )}
      <PostList
        posts={posts2}
        remove={removePost}
        title={"Список постов про криптовалюты"}
      />
    </div>
  );
}

export default App;
