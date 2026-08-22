import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
const Forms = () => {

  let [product , setProduct] = useState();

 console.log("...Form Handling");
 
 let formRef = useRef({})

// console.log("formRef", formRef);

  let handleSubmit = (e) => {
    e.preventDefault();

    let obj = {
  productName : e.value,
  price : formRef.current.price.value,
  category : formRef.current.category.value,
  imageUrl : formRef.current.imageUrl.value
};

 setProduct(obj);

  };



  return (
    <div className ="w-80  bg-white p-4 rounded shadow-lg">
       <form  onSubmit={()=>{
          
        
        handleSubmit()}}
       className = "flex flex-col gap-4 p-6 rounded ">
       
        <input
         ref ={(e) => formRef.current.productName = e}
        type="text" placeholder ="Product Name" className="p-2 border border-grey-400 rounded" />
       
        <input 
        ref ={(e) => formRef.current.price = e}
        type="text" placeholder = "Price" 
        className="p-2 border border-grey-400 rounded" />
        
        <span>Select Category: </span>
        <select 
        ref ={(e) => formRef.current.category = e}
        className="p-2 border border-grey-400 rounded" name="" id="">
        
          <option value="MENS">Mens</option>
          <option value="WOMENS">Womens</option>
          <option value="KIDS">Kids</option>
        </select>

       < input
        ref ={(e) => formRef.current.imageUrl = e}
        type="text" placeholder = "Image URL" className="p-2 border border-grey-400 rounded" />
       
       <button className = "p-2  bg-blue-600 text-white rounded">Create</button>


       </form>
    </div>
  )
}

export default Forms;
