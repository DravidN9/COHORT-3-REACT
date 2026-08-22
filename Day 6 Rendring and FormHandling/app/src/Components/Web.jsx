import React, { useState } from 'react'
import Card from './Card'
import About from './About'
import Contact from './Contact'
import "/src/App.css"
function Web() {
 
  // let [name,setName] = useState("");
   
  // let [email,setEmail] = useState("");
  
  // let [password,setPassword] = useState("");

const [formData , setFormData] = useState({
  Name:"",
  Email: "",
  Password:""
})

const handleChange = (e) =>{
  setFormData( {...formData , [e.target.name]: e.target.value })
};

  return (
    <div className ="flex flex-col gap-5 w-[40%]  p-1 m-4">
      {/* <input  className= "border-2" onChange={(e) =>setName(e.target.value)} type="text" placeholder='Name' />
      <input  className= "border-2" onChange={(e) =>setEmail(e.target.value)} type="text" placeholder='Email' />
      <input  className= "border-2" onChange={(e) =>setPassword(e.target.value)} type="text" placeholder='Password'/> */}
     

     <input className='border-2'  type="text" name="Name" onChange={handleChange} placeholder='Name'/>
     <input className='border-2' type="text" name="Email" onChange={handleChange} placeholder='Email'/>
     <input className='border-2' type="text" name="Password" onChange={handleChange} placeholder='Password'/>

    <h1>This is name = {formData.Name} </h1>
    <h2>This is email = {formData.Email} </h2>
    <h3>This is pass = {formData.Password}  </h3>
      <button>Submit</button>

    </div>
  )
}

export default Web
