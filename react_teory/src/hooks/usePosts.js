import { useMemo } from "react";

export const useSortedPosts = (posts, sortMode) => {
  const sortedPosts = useMemo(() => {
    // console.log("useSortedPosts");
    return sortMode
      ? [...posts].sort((postA, postB) =>
          postA[sortMode].localeCompare(postB[sortMode])
        )
      : posts;
  }, [posts, sortMode]);

  return sortedPosts;
};

//   const getSortedPosts = () => {
//     return filter.sortMode
//       ? [...posts].sort((postA, postB) =>
//           postA[filter.sortMode].localeCompare(postB[filter.sortMode])
//         )
//       : posts;
//   };

export const useSearchedPosts = (posts, searchQuery) => {
  const searchedPosts = useMemo(() => {
    // console.log("useSearchedPosts");
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
//   console.log("usePosts");

  return searchedAndSortedPosts;
};
