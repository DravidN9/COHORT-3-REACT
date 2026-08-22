import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import ProductCard from './Components/ProductCard';
import CartScreen from './Pages/CartScreen';
import { MyStore } from './Context/MyContext';

function App() {
  const [productsData, setProductsData] = useState([]);

  const { isCartOpen , cartItems} = useContext(MyStore);

  const getProductsData = async () => {
    try {
      const res = await axios.get(
        'https://fakestoreapi.com/products'
      );

      setProductsData(res.data);
    } catch (error) {
      console.log('Error in API:', error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);
  

  return (
    <div className="min-h-screen p-2 flex flex-col gap-4">

      <Navbar />

      {isCartOpen ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        <CartScreen  />
         </div>
      ) : (

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {productsData.map((elem) =>{ 
            let isInCart = cartItems.find((val) => val.id === elem.id)

           return <ProductCard
              product={elem}
              key={elem.id}
              isInCart = {isInCart}
            />
         

          })}
        </div>

      )}

    </div>
  );
}

export default App;