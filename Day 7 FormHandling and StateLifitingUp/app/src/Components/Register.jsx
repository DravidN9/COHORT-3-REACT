 import { useState } from 'react'

function Register({ setIsLogin ,setUser }) {


  const [formDAta , setFormData] = useState({
    Name : "",
    Username : "",
    Password : ""
  });

   const handleChange = (e) => {

   let {name,value} = e.target;
    setFormData({...formDAta,[name]:value})
    console.log(e.target);
   };
   
   const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formDAta);
    setUser((prev => [...prev,formDAta]));
     setFormData({Name:"",Username:"",Password:""});
   }

   return (
     
       <div className = 'bg-white w-96 p-10 rounded shadow-lg' >
      <form className= "flex flex-col gap-4 " onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input onChange={handleChange}  className ="p-4 border border-gray-500 rounded" type="text" placeholder="Name" name='Name' value={formDAta.Name} /> 
        <input onChange={handleChange}  className ="p-4 border border-gray-500 rounded" type="text" placeholder="Username"  name='Username' value={formDAta.Username}/>
        <input onChange = {handleChange}  className ="p-4 border border-gray-500 rounded" type="password" placeholder="Password" name='Password' value={formDAta.Password}/>
        <button className = "bg-blue-500 text-white p-2 rounded hover:bg-blue-600" type="submit"  onClick={handleChange}>Sign In</button>
      </form>
      <p>Already have an Account ? <span className='text-blue-500 hover:underline cursor-pointer' onClick={() => setIsLogin(false)}> Login Here</span></p>
    </div>
     
   )
 }
 
 export default Register
 