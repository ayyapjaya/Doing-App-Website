import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white'>
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
     <div className='lg:col-span-2 p-5'>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Unlock your full potential </h1>
    <p>A task management application provides a centralized platform to organize and track all your tasks in one place. It helps you prioritize, categorize, and allocate resources efficiently, ensuring nothing falls through the cracks.</p>
     </div>
     <div className='my-4 p-5'>
      <div>
        <input className='p-3 flex w-full rounded-md text-black' type="email"  placeholder='Enter your email address' />
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
           
      </div>
      <p>We care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy</span> </p>
     </div>
    </div>

    </div>
  )
}

export default Newsletter