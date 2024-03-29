import { Outlet } from 'react-router-dom'
import React from 'react'
import Header from './header/Header'


function Layout() {
  return (
    <div>
        <Header/>
        <Outlet></Outlet>
        <p>Footer</p>
    </div>
  )
}

export default Layout