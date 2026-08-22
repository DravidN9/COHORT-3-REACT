import { useState } from "react";
import { createContext } from "react";

 
export const Auth =createContext();


export let AuthProvider = ({children})=>{
 
   let[registeredUser,setRegisteredUser] = useState( JSON.parse(localStorage.getItem('registeredUsers')) || []);
   let [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem("loggedInUser")) || null);

 console.log("Registered Users =>",registeredUser);
 console.log("LoggedIn Users => ",loggedInUser);

  return (
    <Auth.Provider value={{registeredUser,setRegisteredUser, loggedInUser,setLoggedInUser}}>{children}</Auth.Provider>
  )
}