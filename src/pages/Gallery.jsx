import React from 'react'
import { useState } from 'react';


const Gallery = () => {
  const images = [
    { id: 1, image: "src/assets/images/gallery1.webp", alt: "gallery1" },
    { id: 2, image: "src/assets/images/gallery2.webp", alt: "gallery2" },
    { id: 3, image: "src/assets/images/gallery3.webp", alt: "gallery3" },
  ];
  const [index, setIndex] = useState(0);

  const [image, setImage] = useState(images[index]);
  
  const handleImageChange = (index) => {
    index += 1;
    if (index >= images.length) {
      index = 0;
    }
    setIndex(index);
    setImage(images[index]);
  } 
  return (
    <div id="gallery" className='bg-amber-900 flex w-full justify-center p-5'>
      
      <div className='flex flex-col space-y-4 w-screen lg:w-[1000px] md:w-1/2 sm:w-[700px]'>
        <img src={image.image} alt={image.alt} className='w-full h-96 object-cover' />
        <div className='flex justify-between'>
          <button onClick={() => handleImageChange(index - 1)} className='bg-black text-white p-2 rounded hover:bg-gray-900 hover:text-white'>Previous</button>
          <button onClick={() => handleImageChange(index)} className='bg-black text-white p-2 rounded hover:bg-gray-900 hover:text-white'>Next</button>
        </div>
      </div>  
    </div>  
  );
}

export default Gallery