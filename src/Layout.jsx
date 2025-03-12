import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Hero from './Hero'
import { Outlet } from 'react-router'
import Footer from './Footer'
const Layout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
