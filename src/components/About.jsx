import React from "react";
import { Link } from "react-router-dom";

const About = () => {
   
  return (
    <div
      id="about"
      className="flex bg-[url('/src/assets/images/hero1.webp')] bg-cover bg-center bg-no-repeat h-[90vh]"
    >
      <div className="bg-black opacity-80 h-full text-5xl text-white text-left pt-20 pl-20 lg:text-4xl lg:pt-10 lg:pl-20 md:pt-5 md:pl-5 md:text-[30px] sm:pl-5 sm:pt-5 sm:text-[30px]">
        <h1>About Us</h1>
        <p className="text-2xl pt-20 flex w-1/2 lg:text-[20px] lg:pt-2 md:text-[20px] md:pt-8 sm:text-[20px] sm:pt-5">
          Coffee is a beverage brewed from the roasted and ground seeds of the
          tropical evergreen coffee plant. Coffee is one of the three most
          popular beverages in the world (alongside water and tea), and it is
          one of the most profitable international commodities. Where is coffee
          grown? Latin America, eastern Africa, Asia, and Arabia are leading
          producers of Arabica coffee. The Arabica bean requires a cool
          subtropical climate.
              </p>
              <div className="pt-30 lg:pt-10 lg:text-4xl md:pt-10 sm:pt-10">
                  Wanna know more?
                  <Link to="/know-more" className="bg-amber-100 text-black p-2 rounded-3xl hover:bg-amber-900 hover:text-white block w-50 text-center">Know More</Link>
              </div>
      </div>
    </div>
  );
};

export default About;
