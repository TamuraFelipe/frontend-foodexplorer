import axios from "axios";

export const api = axios.create({
    baseURL: "https://food-explorer-6so3.onrender.com"
    /* baseURL: "http://localhost:3000" */
});