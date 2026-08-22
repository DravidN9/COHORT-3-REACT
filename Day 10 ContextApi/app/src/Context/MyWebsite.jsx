/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const MyWebsite = createContext();

export const MyShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(true);

  return (
    <MyWebsite.Provider value={{ cartItems, setCartItems, isCartOpen, setIsCartOpen }}>
      {children}
    </MyWebsite.Provider>
  );
};