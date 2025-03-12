import React from 'react'
import { Link, Outlet } from 'react-router'

const Coffe = () => {
  return (
      <div>Welcome to Coffee Page
          <div>
        <Link to="inside">Click here</Link>
     
          </div>
    </div>
  )
}

export default Coffe