import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import {useDispatch} from "react-redux";
import { addUser } from "../Features/authSlice";



export const useAuth = () => {
  let navigate = useNavigate(); 
  let dispatch = useDispatch();
 
 
 let [registeredUsers, setRegisteredUsers] = useState(() =>{
    const storedUsers = localStorage.getItem("registeredUsers");
    return storedUsers ? JSON.parse(storedUsers) : [];
 })



  let {register,
    handleSubmit,
    reset,
    formState: { errors },

  } = useForm();

  const registerForm = (data)=>{
    let arr = [...registeredUsers, data]
    setRegisteredUsers(arr)
    console.log("Registered Users:", arr);
    localStorage.setItem("registeredUsers", JSON.stringify(arr));
    toast.success("Registration successful");
    reset();
    navigate("/");


  };

  const loginForm = (data)=>{
    
    const user = registeredUsers.find((user) => user.email === data.email && user.password === data.password
    );

    if(!user){
        toast.error("Invalid email or password");
        return;
    }
     reset();
     dispatch(addUser(user));
     localStorage.setItem("loggedInUser", JSON.stringify(user));
     toast.success("Login successful");
  

  }


  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    registerForm,
    loginForm,
  };
   
}