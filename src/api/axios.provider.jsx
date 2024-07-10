import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.snazzyou.com/api",
  timeout: 10000,
  validateStatus: function (status) {
    return status >= 200 && status < 500;
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwt-token") || null;
    if (token) {
      config.headers["x-auth-token"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
