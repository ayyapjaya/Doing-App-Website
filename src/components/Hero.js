import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='text-white'>
     <div className='max-w[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
     <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DOING APP</p>
     <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold md:py-6'>Unlock your full potential</h1>
     <div className='flex justify-center items-center'>
        <p className='md:text-3xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'>organize your tasks </p>
        <ReactTyped 
        className='md:text-3xl sm:text-2xl text-xl font-bold md-pl-4 pl-2'
         strings={['TO DO', 'DOING', 'DONE']} typeSpeed={120} backSpeed={140} loop/>
     </div>
     <p className='md:text-xl  font-bold text-gray-500'>A task management application provides a centralized platform to organize and track all your tasks in one place.</p>
    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
     </div>

    </div>
  )
}

export default Hero