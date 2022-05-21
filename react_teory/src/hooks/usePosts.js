import { useMemo } from "react";

export const useSortedPosts = (posts, sortMode) => {
  const sortedPosts = useMemo(() => {
    return sortMode
      ? [...posts].sort((postA, postB) =>
          postA[sortMode].localeCompare(postB[sortMode])
        )
      : posts;
  }, [posts, sortMode]);

  return sortedPosts;
};

export const useSearchedPosts = (posts, searchQuery) => {
  const searchedPosts = useMemo(() => {
    return searchQuery
      ? posts.filter(
          (post) =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.body.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : posts;
  }, [searchQuery, posts]);

  return searchedPosts;
};

export const usePosts = (posts, sortMode, searchQuery) => {
  const sortedPosts = useSortedPosts(posts, sortMode);
  const searchedAndSortedPosts = useSearchedPosts(sortedPosts, searchQuery);

  return searchedAndSortedPosts;
};
