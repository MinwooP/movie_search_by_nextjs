import axios from "axios";

export const baseInstance = axios.create({
  baseURL: "https://omdbapi.com",
});
