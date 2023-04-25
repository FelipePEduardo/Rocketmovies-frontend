import axios from "axios";

export const api = axios.create({
  baseURL: 'https://rocketmoviesflp-api.onrender.com'
})