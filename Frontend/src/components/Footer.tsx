import React from 'react';

function Footer() {
  return (
    <div className='w-full bg-black min-h-90 flex justify-around flex-wrap'>

      <div className='p-10 flex flex-col gap-5'>
        <div className='flex gap-2 items-center'>
          <img src="image1.png" alt="EcoXchange Logo" className='h-10' />
          <p className='text-2xl text-white'>EcoXchange</p>
        </div>
        <div className='text-gray-300'>
          <p>Agricultural Products Rural</p>
          <p>Entrepreneurship Management System</p>
          <p>AgriConnect Hub</p>
        </div>
      </div>

      <div className='p-10 flex flex-col gap-5'>
        <p className='text-xl text-white'>My Account</p>
        <div className='text-gray-300 flex flex-col gap-3'>
          <p>My Account</p>
          <p>Order History</p>
        </div>
        <div className='mt-5'>
          <p className='text-xl text-white'>Shopping Cart</p>
          <p className='text-gray-300 mt-2'>Wishlist</p>
        </div>
      </div>

      <div className='p-10 flex flex-col gap-5'>
        <p className='text-xl text-white'>Helps</p>
        <div className='text-gray-300 flex flex-col gap-3 mt-5'>
          <p>Contact</p>
          <p>FAQs</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>

      <div className='p-10 flex flex-col gap-5'>
        <p className='text-xl text-white'>Categories</p>
        <div className='text-gray-300 flex flex-col gap-3 mt-5'>
          <p>Industrial Waste</p>
          <p>Agricultural Waste</p>
          <p>Electronic Waste</p>
          <p>Commercial Waste</p>
        </div>
      </div>

    </div>
  );
}

export default Footer;
