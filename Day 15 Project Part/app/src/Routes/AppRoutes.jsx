import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../Layouts/AuthLayout";
import MainLayout from "../Layouts/MainLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  let router = createBrowserRouter([
    {
      path: "/",
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
    {
      path: "/main",
      element: <ProtectedRoute/>,
      children:[
        {
          path:"",
          element: <MainLayout />,

      children: [
        { path: "", element: <Home/> },
        { path: "about", element: <About/> },
        { path: "services", element: <Services /> },
      ],
        }

      ]
    },
  ]);
  return <RouterProvider router={router} />;
}

export default AppRoutes;
