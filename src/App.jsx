// import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import './App.css'
import Header from './Header'
import Navbar from './Navbar'
import About from './About'
import Gallery from './Gallery'
import Contact from './Contact'
import Footer from './Footer'
import Layout from "./Layout";
import Coffe from "./Coffe";
import { BrowserRouter, Route, Routes } from 'react-router'
import InsideACoffe from './InsideACoffe'
// import coffe from './coffe.html'
function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/know-more" element={<Coffe />} />
          <Route path="/know-more/inside" element={<InsideACoffe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
