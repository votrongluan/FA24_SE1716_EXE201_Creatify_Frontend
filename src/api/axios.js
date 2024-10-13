import axios from "axios";

// export const baseURL = "http://localhost:5000";
// export const appURL = "http://localhost:5173";
export const baseURL = "https://exe-1515.onrender.com/";
export const appURL = "https://3dcreatify.vercel.app/";

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
