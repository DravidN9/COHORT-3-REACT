import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const CartContext = createContext(null);

function cartKey(email) {
  return `skymart_cart_${email || "guest"}`;
}

export function CartProvider({ children }) {
  const { user } = useAuth();
  const [items, setItems] = useState([]);

  // load cart whenever the logged-in user changes
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(cartKey(user?.email))) || [];
      setItems(saved);
    } catch {
      setItems([]);
    }
  }, [user?.email]);

  // persist on every change
  useEffect(() => {
    localStorage.setItem(cartKey(user?.email), JSON.stringify(items));
  }, [items, user?.email]);

  function addToCart(product, qty = 1) {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + qty } : i));
      }
      return [
        ...prev,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          thumbnail: product.thumbnail,
          qty,
        },
      ];
    });
  }

  function removeFromCart(id) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  function updateQty(id, qty) {
    if (qty < 1) {
      removeFromCart(id);
      return;
    }
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
  }

  function clearCart() {
    setItems([]);
  }

  const count = items.reduce((sum, i) => sum + i.qty, 0);
  const total = items.reduce((sum, i) => sum + i.qty * i.price, 0);

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, updateQty, clearCart, count, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
