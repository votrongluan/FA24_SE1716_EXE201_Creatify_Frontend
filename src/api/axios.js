import axios from "axios";

export const baseURL = "https://3dcreatify.vercel.app";
export const appURL = "https://exe-ceuo.onrender.com";

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
