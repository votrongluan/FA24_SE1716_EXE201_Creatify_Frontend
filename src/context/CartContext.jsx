import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const cookieCart = Cookies.get("cart");
    return cookieCart ? JSON.parse(cookieCart) : [];
  });

  useEffect(() => {
    if (cart.length > 0) {
      // Set cookie with an expiration of 5 days
      Cookies.set("cart", JSON.stringify(cart), { expires: 5 });
    } else {
      // Remove the cookie if cart is empty
      Cookies.remove("cart");
    }
  }, [cart]);

  const addCartItem = (productId, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.productId === productId
      );
      if (existingItem) {
        return prevCart.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { productId, quantity }];
    });
  };

  const changeQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeCartItem = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.productId !== productId)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartLength = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addCartItem,
        changeQuantity,
        removeCartItem,
        clearCart,
        getCartLength,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
