import React from 'react'
import Layout from './Layout'
import Hero from './Hero'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path:"",
                element: <Hero />
            },
            {
                path:"about",
                element:<About />,
            },
            {
                path:"gallery",
                element:<Gallery />,
            },
            {
                path:"contact",
                element:<Contact />,
            },
        ]
    }
]

export default routes