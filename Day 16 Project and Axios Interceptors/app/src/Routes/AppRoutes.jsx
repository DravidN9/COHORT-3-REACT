import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../Layouts/AuthLayout";
import MainLayout from "../Layouts/MainLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import Home from '../Pages/Home'
import UsersPage from "../Pages/UsersPage";
import ProductPage from "../Pages/ProductPage";

function AppRoutes() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute/>,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [

            {
              path:'',
              element: <Home/>

            }
            ,
            {
              path: 'users',
              element: <UsersPage/>

            },
            {
              path: 'products',
              element: <ProductPage/>
            }

            
          ]

          
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default AppRoutes;
