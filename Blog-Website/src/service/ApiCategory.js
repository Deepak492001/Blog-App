import axios from "axios";
import BASE_URL from './config';

export const getAllCategories = async () => {
    try {
        return await axios.get(`${BASE_URL}/all-categories`);
    } catch (error) {
console.log(error.message);
    }
}