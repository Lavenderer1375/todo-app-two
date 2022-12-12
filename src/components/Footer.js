import React from 'react';

const Footer = () => {
  return (
    <div className="main text-white w-full flex-col p-10 mt-20 bg-stone-700 shadow-inner shadow-indigo-500">
      <div className="wraper flex items-end hover:cursor-pointer">
        <div className="col1 flex w-full mr-auto">
          <ul className='p-auto'>
            <li>FAQ</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Jobs</li>
          </ul>
        </div>
        <div className="col2 flex w-full">
          <ul>
            <li>Shopping Cart</li>
            <li>Shoes</li>
            <li>Bags</li>
            <li>Dresses</li>
          </ul>
        </div>
      </div>
        <p className='flex justify-center items-end p-10'>Developed By Kianush Abedi ©</p>
    </div>
  );
};

export default Footer;
