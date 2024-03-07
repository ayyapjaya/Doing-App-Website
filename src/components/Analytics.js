import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
       <div className='flex flex-col justify-center'>
      <p className='text-[#00df9a] font-bold'>ABOUT US</p>
      <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Empower your productivity, embrace effective task management</h1>
      <p>A task management application provides a centralized platform to organize and track all your tasks in one place. It helps you prioritize, categorize, and allocate resources efficiently, ensuring nothing falls through the cracks.</p>
      <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6  py-3 text-black'>Get Started</button>
      </div>
      </div>
    </div> 
  )
}

export default Analytics