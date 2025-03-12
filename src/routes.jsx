import React from "react";
import Layout from "./Layout";
import Hero from "./Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Coffe from "./components/Coffe";
import InsideACoffe from "./components/InsideACoffe";
import App from "./App";
import Coffee from "./Coffee";

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
        children: [
          {
            path: "",
            element: <Coffe />,
          },
          {
            path: "inside",
            element: <InsideACoffe />,
          },
        ],
      },
    ],
  },
];

export default routes;
