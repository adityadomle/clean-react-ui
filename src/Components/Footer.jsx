import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-[#0a0a0a] text-gray-300 py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8'>
        {/* Left Side */}
        <div>
          <h1 className='text-4xl font-extrabold text-[#00df9a]'>REACT.</h1>
          <p className='py-4 text-sm text-gray-400'>
            Empowering developers with modern, flexible, and scalable UI solutions. Stay connected and explore the future of web.
          </p>
          <div className='flex items-center justify-between md:w-[75%] mt-6 text-[#00df9a]'>
            <FaFacebookSquare size={30} className='hover:scale-110 duration-200 cursor-pointer' />
            <FaInstagram size={30} className='hover:scale-110 duration-200 cursor-pointer' />
            <FaTwitterSquare size={30} className='hover:scale-110 duration-200 cursor-pointer' />
            <FaGithubSquare size={30} className='hover:scale-110 duration-200 cursor-pointer' />
            <FaDribbbleSquare size={30} className='hover:scale-110 duration-200 cursor-pointer' />
          </div>
        </div>

        {/* Right Side - Grid */}
        <div className='lg:col-span-2 flex flex-wrap justify-between mt-6'>
          {/* Solutions */}
          <div className='min-w-[120px]'>
            <h6 className='font-semibold text-gray-400 mb-2'>Solutions</h6>
            <ul>
              <li className='py-1 text-sm hover:text-[#00df9a] duration-200 cursor-pointer'>Analytics</li>
              <li className='py-1 text-sm hover:text-[#00df9a] duration-200 cursor-pointer'>Marketing</li>
              <li className='py-1 text-sm hover:text-[#00df9a] duration-200 cursor-pointer'>Commerce</li>
              <li className='py-1 text-sm hover:text-[#00df9a] duration-200 cursor-pointer'>Insights</li>
            </ul>
          </div>

          {/* Support */}
          <div className='min-w-[120px]'>
            <h6 className='font-semibold text-gray-400 mb-2'>Support</h6>
            <ul>
              <li className='py-1 text-sm hover:text-[#00df9a] duration-200 cursor-pointer'>Pricing</li>
              <li className='py-1 text-sm hover:text-[#00df9a] duration-200 cursor-pointer'>Documentation</li>
              <li className='py-1 text-sm hover:text-[#00df9a] duration-200 cursor-pointer'>Guides</li>
              <li className='py-1 text-sm hover:text-[#00df9a] duration-200 cursor-pointer'>API Status</li>
            </ul>
          </div>

          {/* Company */}
          <div className='min-w-[120px]'>
            <h6 className='font-semibold text-gray-400 mb-2'>Company</h6>
            <ul>
              <li className='py-1 text-sm hover:text-[#00df9a] duration-200 cursor-pointer'>About</li>
              <li className='py-1 text-sm hover:text-[#00df9a] duration-200 cursor-pointer'>Blog</li>
              <li className='py-1 text-sm hover:text-[#00df9a] duration-200 cursor-pointer'>Jobs</li>
              <li className='py-1 text-sm hover:text-[#00df9a] duration-200 cursor-pointer'>Press</li>
              <li className='py-1 text-sm hover:text-[#00df9a] duration-200 cursor-pointer'>Careers</li>
            </ul>
          </div>

          {/* Legal */}
          <div className='min-w-[120px]'>
            <h6 className='font-semibold text-gray-400 mb-2'>Legal</h6>
            <ul>
              <li className='py-1 text-sm hover:text-[#00df9a] duration-200 cursor-pointer'>Claim</li>
              <li className='py-1 text-sm hover:text-[#00df9a] duration-200 cursor-pointer'>Policy</li>
              <li className='py-1 text-sm hover:text-[#00df9a] duration-200 cursor-pointer'>Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
