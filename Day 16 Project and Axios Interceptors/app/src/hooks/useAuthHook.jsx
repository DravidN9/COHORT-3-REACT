import React from "react";
import { useNavigate } from "react-router";

import { useForm } from "react-hook-form";
import { useContext } from "react";
import { Auth } from "../Context/AuthContext"





export const useAuthHook = () =>{

    const { setRegisteredUser, registeredUser, setLoggedInUser } = useContext(Auth);

    

   let navigate =  useNavigate();
     let{ register,handleSubmit,reset,formState:{errors},}=useForm();

// login Logic
 let loginFormSubmit = (data)=>{
   let user =  registeredUser.find((val)=>{
    return val.email === data.email && val.password === data.password;
   })

   if(!user) {
     toast.error("Invalid Credentials or User not Found")
    return;
   }
   setLoggedInUser(user);

   localStorage.setItem('loggedInUser', JSON.stringify(user));
   toast.success("User Logged In Successfully...")
  navigate('/main')
   
   reset();
  }

// Registration Logic
  let registerFormSubmit = (data) => {
    console.log(data);

    
    const updatedUsers = [...registeredUser , data];
    setRegisteredUser(updatedUsers);
    

    alert("User Registered Successfully...");
    localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
    navigate('/');
    reset();
  };

  return{
    navigate , register,handleSubmit,reset,errors,loginFormSubmit,registerFormSubmit
  }
}