import React, {useEffect, useState} from "react";
import PostService from "./API/PostService";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import CustomButton from "./components/UI/button/CustomButton";
import CustomModal from "./components/UI/modal/CustomModal";
import {usePosts} from "./hooks/usePosts";
import "./styles/App.css";
import CustomLoader from "./components/UI/Loader/CustomLoader";
import {useFetching} from "./hooks/useFetching";

function App() {
    const [posts, setPosts] = useState([
        // {id: 1, title: "JavaScript", body: "Язык программировани"},
        // {id: 2, title: "Python", body: "Язык программировани"},
        // {id: 3, title: "Go", body: "Язык программировани"},
        // {id: 4, title: "Solidity", body: "Язык программировани"},
    ]);

    // const [isPostLoading, setIsPostLoading] = useState(false);
    const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
        const serverPosts = await PostService.getAll();
        setPosts(serverPosts);
    });

    const [filter, setFilter] = useState({sortMode: "", searchQuery: ""});

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
            <CustomButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                Создать пост
            </CustomButton>
            <CustomModal visible={modal} setVisible={setModal}>
                <PostForm posts={posts} create={createPost}/>
            </CustomModal>

            <hr style={{margin: "15px 0"}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>

            {postsError && <h1>Ошибка при запросе постов: {postsError}</h1>}
            {isPostsLoading
                ? <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: 50}}>
                    <CustomLoader/>
                </div>
                : <PostList
                    posts={searchedAndSortedPosts}
                    remove={removePost}
                    title={"Список постов про программирование"}
                />}

        </div>
    );
}

export default App;
