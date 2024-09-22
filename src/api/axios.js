import axios from "axios";

export const baseURL = "http://localhost:5000";

// Default instance without Bearer token
export const axiosNoAuth = axios.create({
  baseURL,
});

// Instance with Bearer token
export const axiosWithAuth = (token) => {
  return axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default axios.create({
  baseURL,
});
