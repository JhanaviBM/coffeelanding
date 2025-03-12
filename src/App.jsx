import React, { StrictMode } from "react";
import Layout from "./Layout";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";

const App = () => {
  return (
    <div>
      <div className="top-0">

      <Header />
      <Navbar />
      </div>
      <div className="mx-10">

      <Outlet />
      </div>
      <div className="bottom-0">

      <Footer />
      </div>
    </div>
  );
};

export default App;
