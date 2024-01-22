import React from 'react'
import Header from "./components/Header"
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='w-full min-h-screen bg-[#0f0f0f]'>
       <Header /> 
       <Outlet />
    </div>
  )
}

export default Layout