import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState([]);
 console.log(cartItems)
  const IncrementQuantity = (id) => {
    setCartItems((prev)=>{
      return prev.map((val) =>{
        
        return val.id ===id ? {...val, quantity: val.quantity+1 }:val;
      })
    })
  };
 
  const RemoveCard = (id)=>{
     let newCartItems = cartItems.filter((val) =>
     {
      if(val.id !== id ) return val
     } )

     setCartItems(newCartItems);

      }


  const DecrementQuantity = (id) => {
   
    setCartItems((prev)=>{
      return prev.map((val) =>{
         if(val.quantity ===1) RemoveCard(val.id)
       else
        return val.id ===id ? {...val, quantity: val.quantity-1 }:val ;  
      })
    })
  
  };

  return (
    <MyStore.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartItems,
        setCartItems,
        IncrementQuantity,
        DecrementQuantity,
        RemoveCard,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};