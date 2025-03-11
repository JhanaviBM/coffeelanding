import React from 'react'
import Header from './Header';
import Navbar from './Navbar';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';

 const Layout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
export default Layout