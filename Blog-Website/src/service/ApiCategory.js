import axios from "axios";
const BASE_URL = "http://localhost:8080";

export const getAllCategories = async () => {
    try {
        return await axios.get(`${BASE_URL}/all-categories`);
    } catch (error) {
console.log(error.message);
    }
}