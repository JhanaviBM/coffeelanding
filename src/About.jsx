import React from "react";
import { Link } from "react-router-dom";

const About = () => {
   
  return (
    <div
      id="about"
      className="bg-[url('/src/assets/images/hero1.webp')] bg-cover bg-center bg-no-repeat h-[90vh]"
    >
      <div className="bg-black opacity-80 h-full text-5xl text-white text-left pt-20 pl-20">
        <h1>About Us</h1>
        <p className="text-2xl pt-20 flex w-1/2">
          Coffee is a beverage brewed from the roasted and ground seeds of the
          tropical evergreen coffee plant. Coffee is one of the three most
          popular beverages in the world (alongside water and tea), and it is
          one of the most profitable international commodities. Where is coffee
          grown? Latin America, eastern Africa, Asia, and Arabia are leading
          producers of Arabica coffee. The Arabica bean requires a cool
          subtropical climate.
              </p>
              <div className="pt-30">
                  Wanna know more?
                  <a href="/know-more" className="bg-amber-100 text-black p-2 rounded-3xl hover:bg-gray-900 hover:text-white block">Know More</a>
              </div>
      </div>
    </div>
  );
};

export default About;
