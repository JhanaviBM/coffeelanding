import React from 'react'

const Navbar = () => {
    const handleAbout = () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
    }
    const handleGallery = () => {
        document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })
    }
    const handleContact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
    }
  return (
    <div className='bg-amber-950 text-white'>
      <ul className="list-none flex justify-end p-4 space-x-8 text-3xl">
        <li onClick = {handleAbout}>About</li>
        <li onClick = {handleGallery}>Gallery</li>
        <li onClick= {handleContact}>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar