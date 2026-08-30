import {RouterProvider , createBrowserRouter}  from 'react-router'
import MainLayout from '../Layouts/MainLayout'
import App from '../App'
import { lazy, Suspense } from 'react'

let About = lazy(()=> import("../pages/About"));
let Contact = lazy(()=> import("../pages/Contact"));
function AppRoutes() {

 

  let router = createBrowserRouter([

    {
      path: '/',
      element: <MainLayout/>,
      children: [
        {
          path:'',
          element: <App/>,
        },
        {path: 'about',
          element: (
            <Suspense fallback = {<h1>Loading About</h1>

            }>

              <About/>
            </Suspense>
          ),
          },
          {
            path: 'contact', 
            element: <Contact/>,
          }
      ],
    }
  ]);



  return <RouterProvider router={ router}/> 

}

export default AppRoutes