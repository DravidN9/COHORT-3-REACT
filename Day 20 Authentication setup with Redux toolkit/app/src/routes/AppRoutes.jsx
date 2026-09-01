import {React , useEffect} from 'react'
import {createBrowserRouter, RouterProvider,} from 'react-router'
import AuthLayout from '../Layouts/AuthLayout'
import PublicProtected from './PublicProtected'
import MainProtected from './MainProtected'
import LoginPage from '../Pages/LoginPage'
import RegisterPage from '../Pages/RegisterPage'
import MainLayout from '../Layouts/MainLayout'
import HomePage from '../Pages/HomePage'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addUser } from '../Features/authSlice'


function AppRoutes() {
  let dispatch = useDispatch();

  let hydrateUser = ()=>{
  let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if(!loggedInUser){

    toast.error("Unauthorized User!..");
    return;
  }

  dispatch(addUser(loggedInUser));  


  }

  useEffect(()=>{
    hydrateUser();
  },[])

 let router = createBrowserRouter([
  {
  path: "/",
 element: <PublicProtected/>,
  children: [
    {
      path: '',
      element: <AuthLayout/>,
      children: [
    {
      path: '',
      element:<LoginPage/>

    },
    {
      path: "register",
      element: <RegisterPage/>
    }
  ]
    }
  ]
  },
  {
    path:'/main',
    element: <MainProtected/>,
    children: [
      {
        path: '',
        element: <MainLayout/>,
    children: [
      {
        path: '',
        element: <HomePage/>,
      }

    ]

      },]
  }

 ])

  return <RouterProvider router={router}></RouterProvider>
   
  
}

export default AppRoutes