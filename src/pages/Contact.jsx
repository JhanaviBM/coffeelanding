import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className="bg-amber-200 text-black font-bold text-2xl p-5 sm:text-[20px] sm:p-3">
          Contact Us
          <h4 className='text-lg'>Lets know more about your taste</h4>
      <form className="bg-amber-100 flex flex-col justify-between w-full  p-4 h-65">
        <div className=" flex flex-col space-y-4 w-full">
          <input type="text" placeholder="Name" className="bg-amber-50" />
          <input type="text" placeholder="Email" className="bg-amber-50" />
          <textarea placeholder="Message" className="bg-amber-50"></textarea>
        </div>
        <div className="flex justify-center w-full">
          <button
            type="submit"
            className="bg-black text-white p-2 rounded w-full hover:bg-gray-900 hover:text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact