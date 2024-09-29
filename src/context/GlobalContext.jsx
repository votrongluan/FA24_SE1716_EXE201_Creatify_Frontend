import { createContext, useEffect, useState } from "react";
import axios from "../api/axios.js";
import { mockProducts } from "../data/globalData.js";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/Product/GetAllProducts")
      .then((response) => {
        const data = response.data;
        setProducts(data);
      })
      .catch((error) => {
        setProducts(mockProducts);
      });
  }, []);

  return (
    <GlobalContext.Provider value={{ products }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
