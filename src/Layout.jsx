import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Hero from './Hero'
import { Outlet } from 'react-router'
import Footer from './Footer'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
const Layout = () => {
  return (
    <div>
     
      <Hero />
      <About />
      <Gallery />
      <Contact/>
     
    </div>
  )
}

export default Layout
