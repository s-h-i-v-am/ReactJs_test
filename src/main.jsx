import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter ,RouterProvider} from "react-router-dom"
import Layout from './Layout.jsx'
import Home from './Pages/Home.jsx'
import Details from './Pages/Details.jsx'

const router = createBrowserRouter([
  
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"",
        element:<Home />
      },
      {
        path:"/details/:showid",
        element:<Details />
      }
    ]
  }

  
  

])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
