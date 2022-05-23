import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Page404 from "../pages/Page404";
import PostIDPage from "../pages/PostIDPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
  { path: "/", element: <Home /> },
  { path: "/posts", element: <Posts /> },
  { path: "/posts/:id", element: <PostIDPage /> },
  { path: "/about", element: <About /> },
  { path: "/login", element: <Login /> },
  { path: "*", element: <Page404 /> },
];

export const publicRoutes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "*", element: <Page404 /> },
];
