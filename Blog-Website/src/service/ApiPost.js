import axios from "axios";
const BASE_URL = "http://localhost:8080";

export const addPost = async (post) => {
  try {
    const formData = new FormData();
    formData.append("postTitle", post.postTitle);
    formData.append("postContent", post.postContent);
    formData.append("postCategory", post.postCategory);
    formData.append("postUser", post.postUser);
    formData.append("postImage", post.postImage);
    const response = await axios.post(`${BASE_URL}/add-post`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error.message);
    // throw error;
  }
};

export const getAllPosts = async (page, size) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/posts?page=${page}&size=${size}`
    );

    return response.data;
  } catch (error) {
    // Handle error cases
    console.log(error.message);
  }
};

// get Single post By id
export const getPostByPostId = async (postId) => {
  try {
    return await axios.get(`${BASE_URL}/post-by-postId/${postId}`);
  } catch (error) {
    console.log(error.message);
  }
};

// get Post By use
export const getPostByUser = async (user) => {
  try {
    return await axios.get(`${BASE_URL}/post-by-user/${user}`);
  } catch (error) {
    console.log(error.message);
  }
};

// update post By postId
export const updateByPostId = async (post, postId) => {
  try {
    return axios.put(`${BASE_URL}/update-post/${postId}`, post);
  } catch (error) {
    console.log(error.message);
  }
};

// delete post by id

export const deletePostById = async (postId) => {
  try {
    return await axios.delete(`${BASE_URL}/delete-post/${postId}`);
  } catch (error) {
    console.log(error.message);
  }
};

// Add post
// export const addPost = async (post) => {
//     try {
//         return await axios.post(`${BASE_URL}/add-post`, post);
//     } catch (error) {
//         console.log(error.message);
//     }
// };

// get post Categories
export const getCategories = async () => {
  try {
    return await axios.get(`${BASE_URL}/categories`);
  } catch (error) {
    console.log(error.message);
  }
};
