import { Outlet } from 'react-router-dom'
import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'

function Layout() {
  return (
    <div>
        <Header/>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Layout