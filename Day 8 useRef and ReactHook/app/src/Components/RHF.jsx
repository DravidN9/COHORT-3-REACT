import React from 'react'
import { useForm } from 'react-hook-form'

function RHF() {

let {register, handleSubmit,reset ,formState:{errors}} = useForm();
 
console.log("RHF rendering");

  return (
      

     <div className ="w-80  bg-white p-4 rounded shadow-lg">
         <h2>React Hook Form</h2>
       <form  onSubmit={handleSubmit((data)=>{
        console.log("data", data);
        reset();
       }) }
       className = "flex flex-col gap-4 p-6 rounded ">
      
        <input
       {...register("productName")}
        type="text" placeholder ="Product Name" className="p-2 border border-grey-400 rounded" />
       
        <input 
    {...register("price")}
        type="text" placeholder = "Price" 
        className="p-2 border border-grey-400 rounded" />
        
       <input
       {...register("category")}
        type ="text" placeholder = "Category" className="p-2 border border-grey-400 rounded" />

       < input
       {...register("imageUrl")}
        type="text" placeholder = "Image URL" className="p-2 border border-grey-400 rounded" />
       
       <button className = "p-2  bg-blue-600 text-white rounded" type="submit">Create</button>


       </form>
    </div>
  )
}

export default RHF
