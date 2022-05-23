import axios from "axios";

export default class PostService {
  static async getAll(limit = 10, page = 1) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      { params: { _limit: limit, _page: page } }
    );

    return response;
  }

  static async getPost(postID) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/",
      { params: { id: postID } }
    );

    return response;
  }

  static async getPostComment(postID) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postID}/comments`
    );

    return response;
  }
}
