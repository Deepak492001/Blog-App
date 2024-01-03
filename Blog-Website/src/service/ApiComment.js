import axios from "axios";
const BASE_URL = "http://localhost:8080";

export const addComment = async (comment) => {
  try {
    return await axios.post(`${BASE_URL}/add-comment`, comment);
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllCommentsByPostId = async (postId) => {
  try {
    return await axios.get(`${BASE_URL}/all-comments/${postId}`);
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteCommentByCommentId = async (commentId) => {
  try {
    return await axios.delete(`${BASE_URL}/delete-comment/${commentId}`);
  } catch (error) {
    console.log(error.message);
  }
};
