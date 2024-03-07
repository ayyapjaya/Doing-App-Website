import React from 'react'
import User from '../assets/user.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
     <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-75'>
      <img className='w-20 mx-auto mt-[-3rem] bg-white' src={User} alt='/' />
      <h2 className='text-2xl font-bold text-center py-8'>Basic</h2>
      <p className='text-center text-4xl font-bold'>Free / Forever</p>
      <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
     
      <div className='text-center text-xl font-medium'>
        <p className='py-2 border-b mx-8 mt-2'>Up to 3 projects</p>
        <p className='py-2 border-b mx-8 mt-2'>Unlimited project members</p>
        <p className='py-2 border-b mx-8 mt-2'>Customizable project boards</p>
        <p className='py-2 border-b mx-8 mt-2'>Community support</p>
      </div>
     </div>
      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-75'>
      <img className='w-20 mx-auto mt-[-3rem] bg-white' src={User} alt='/' />
      <h2 className='text-2xl font-bold text-center py-8'>Pro</h2>
      <p className='text-center text-4xl font-bold'>$9.99 / Month</p>
      <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
     
      <div className='text-center text-xl font-medium'>
      <p className='py-2 border-b mx-8 mt-8'>Up to 3 projects</p>
        <p className='py-2 border-b mx-8 mt-2'>Unlimited project members</p>
        <p className='py-2 border-b mx-8 mt-2'>Customizable project boards</p>
        <p className='py-2 border-b mx-8 mt-2'>Community support</p>
        <p className='py-2 border-b mx-8 mt-2'>Multiple team members</p>
        <p className='py-2 border-b mx-8 mt-2'>Private projects</p>
      </div>
     </div>
      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-75'>
      <img className='w-20 mx-auto mt-[-3rem] bg-white' src={User} alt='/' />
      <h2 className='text-2xl font-bold text-center py-8'>Business</h2>
      <p className='text-center text-4xl font-bold'>$99.99 / year</p>
      <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
     
      <div className='text-center text-xl font-medium'>
      <p className='py-2 border-b mx-8 mt-8'>Up to 3 projects</p>
        <p className='py-2 border-b mx-8 mt-2'>Unlimited project members</p>
        <p className='py-2 border-b mx-8 mt-2'>Customizable project boards</p>
        <p className='py-2 border-b mx-8 mt-2'>Community support</p>
        <p className='py-2 border-b mx-8 mt-2'>Multiple team members</p>
      </div>
     </div>
    </div>
    </div>
  )
}

export default Cards