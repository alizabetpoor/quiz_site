import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1";

const http = {
  get: axios.get,
  delete: axios.delete,
  post: axios.post,
  put: axios.put,
};

export default http;
