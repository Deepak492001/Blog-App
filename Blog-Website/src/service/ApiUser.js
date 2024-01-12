import axios from "axios";
// const BASE_URL = "http://localhost:8080";
import BASE_URL from './config';
export const checkUserExistsByEmail = async (email) => {
  try {
    return await axios.post(`${BASE_URL}/check-user`, email);
  } catch (error) {
    console.log(error);
  }
};

// get user data by id

// Submit user details
export const addUser = async (user) => {
  try {
    return await axios.post(`${BASE_URL}/add-user`, user);
  } catch (error) {
    console.log(error.message);
  }
};

//
// export const checkSignInDetails = async (user) => {
//   try {
//     return await axios.get(`${BASE_URL}/validate-user/${user}`);
//   } catch (error) {
//     console.log(error.message);
//     throw error;
//   }
// };



export const updatePassword = async (userEmail, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/update-password/${userEmail}`, password);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};


// export const updatePassword = async (userEmail, password) => {
//   try {
//     const response = await axios.put(`${BASE_URL}/update-password/${userEmail}`, { password });
//     return response.data; // Return response data specifically
//   } catch (error) {
//     console.log(error.message);
//     throw new Error("Something went wrong"); // Throwing an error here to indicate a failure
//   }
// };