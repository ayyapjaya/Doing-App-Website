import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-4 gap-8 text-gray-300'>
     <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>DOING APP</h1>
      <p className='py-4' >A task management application provides a centralized platform to organize and track all your tasks in one place.</p>
      <div className='flex justify-between md:w-[75%] my-6'>
        <FaFacebookSquare size={30} />
        <FaInstagram size={30} />
        <FaTwitterSquare size={30} />
        <FaGithubSquare size={30} />
        <FaDribbbleSquare size={30} />
      </div>
     </div>
      
     <div>
     <div>
      <h6 className='font-medium text-gray-400'>Support</h6>
      <ul>
        <li className='py-2 text-sm'>Pricing</li>
        <li className='py-2 text-sm'>Documentation</li>
        <li className='py-2 text-sm'>Guiders</li>
        <li className='py-2 text-sm'>API Status</li>
      </ul>
     </div>
     </div>
     <div>
     <div>
      <h6 className='font-medium text-gray-400'>Company</h6>
      <ul>
        <li className='py-2 text-sm'>About</li>
        <li className='py-2 text-sm'>Blog</li>
        <li className='py-2 text-sm'>Jobs</li>
        <li className='py-2 text-sm'>Press</li>
        <li className='py-2 text-sm'>Careers</li>
      </ul>
     </div>
     </div>
     <div>
     <div>
      <h6 className='font-medium text-gray-400'>Legal</h6>
      <ul>
        <li className='py-2 text-sm'>Claim</li>
        <li className='py-2 text-sm'>Policy</li>
        <li className='py-2 text-sm'>Terms</li>
      </ul>
     </div>
   
     </div>
    </div>
  )
}

export default Footer