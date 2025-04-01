import axios from "axios";

const redirectToLogin = () => {
  window.location = "/login";
};

// eslint-disable-next-line react-refresh/only-export-components
export const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? `http://${window.location.hostname}:3102/api` // Local development (port 3102)
      : `${window.location.protocol}//${window.location.hostname}/api`, // Production
  timeout: 10000,
});
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["x-access-token"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 440) {
      localStorage.removeItem("token");
      redirectToLogin();
    }
    return Promise.reject(error);
  }
);

export default api;
