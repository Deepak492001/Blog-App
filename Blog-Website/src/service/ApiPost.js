import axios from "axios";
const BASE_URL = "http://localhost:8080";

// get all the posts

// export const getAllPosts = async () => {
//   try {
//     return await axios.get(`${BASE_URL}/all-posts`);
//   } catch (error) {
//     console.log(error.message);
//   }
// };



export const getAllPosts = async (page , size ) => {
  try {
    const response = await axios.get(`${BASE_URL}/posts?page=${page}&size=${size}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw error; // Throw the error to handle it in the calling component
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
    return await axios.get(`${BASE_URL}/post-by-user/${user}`)
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

export const addPost = async (post) => {
  try {
    const response = await axios.post(`${BASE_URL}/add-post`, post);
    return response.data; // Assuming your backend returns data upon successful post creation
  } catch (error) {
    console.log(error.message);
    throw error; // Propagate the error to handle it in the component
  }
};


// get post Categories
export const getCategories = async () => {
    try {
        return await axios.get(`${BASE_URL}/categories`);
    } catch (error) {
        console.log(error.message);
    }
};