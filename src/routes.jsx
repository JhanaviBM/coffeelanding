import React from "react";
import Layout from "./Layout";
import Hero from "./Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Coffe from "./components/ChildCoffee";
import InsideACoffe from "./components/InsideACoffe";
import App from "./App";
import Coffee from "./ParentCoffee";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Layout />,
      },

      {
        path: "about",
        element: <About />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "know-more",
        element: <Coffee />,
      },
      {
        path: "inside/:id",
        element: <Coffe />,
        },
    ],
  },
];

export default routes;
