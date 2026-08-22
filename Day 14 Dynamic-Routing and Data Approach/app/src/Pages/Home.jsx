import React, { useContext, useEffect } from 'react'
import { MyStore } from '../Context/MyContext'
import axios from 'axios';
import ProductCard from '../Components/ProductCard';

function Home() {

   let {productsData, setProductsData} = useContext(MyStore);

  let getProductsData = async () =>{
    try{
      let res = await axios.get('https://fakestoreapi.com/products');
      setProductsData(res.data);
     

    }catch(error){
      console.log("error in API ", error)
    }

  }

useEffect(()=>  {getProductsData()}
,[]);

  return (
    <div >

          <div className='p-2 grid grid-cols-4 gap-4'>
            
          {
        productsData.map((elem)=>{

            return <ProductCard key = {elem.id} product={elem} />
          })

          }
          </div>
  

    </div>
  )
}

export default Home
