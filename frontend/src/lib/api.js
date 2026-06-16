import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1337",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => {
    const data = response.data;

    if (data.err !== 200) {
      return Promise.reject(data);
    }

    return data;
  },
  // eslint-disable-next-line no-unused-vars
  (error) => {
    return Promise.reject({
      err: -1,
      message: "Network error",
    });
  }
);

export default api;