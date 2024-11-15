import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'

export default function AuthLayout() {
  return (
    <div>
      
     <header className='w-11/12 mx-auto  py-5'>
      <Navbar></Navbar>
     </header>
      <Outlet></Outlet>
    </div>
  )
}
