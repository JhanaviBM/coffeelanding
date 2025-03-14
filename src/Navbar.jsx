import React from "react";
import { Link } from "react-router";
const Navbar = () => {
  {/*const handleAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };
  const handleGallery = () => {
    document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
  };
  const handleContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };*/}

  return (
    <div className="bg-amber-950 text-white">
      {/*<ul className="list-none flex justify-end p-4 space-x-8 text-3xl lg:text-2xl md:text-1xl sm:text-[20px]">
        <li onClick={handleAbout}>About</li>
        <li onClick={handleGallery}>Gallery</li>
        <li onClick={handleContact}>Contact</li>
      </ul>*/}
      <div>
          <ul className="list-none flex justify-end p-4 space-x-8 text-3xl lg:text-2xl md:text-1xl sm:text-[20px]">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
    </div>
  );
};

export default Navbar;
