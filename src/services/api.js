import axios from "axios";

const api = axios.create({
  baseURL: "http://172.26.160.1:3001/api"
})

export default api;