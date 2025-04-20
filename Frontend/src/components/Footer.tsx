
function Footer() {
  return (
    <div className='w-full bg-black min-h-30 flex justify-around flex-wrap'>

      <div className='p-10 flex flex-col gap-5'>
        <div className='flex gap-2 items-center'>
          <img src="image1.png" alt="EcoXchange Logo" className='h-10' />
          <p className='text-2xl text-white'>EcoXchange</p>
        </div>
        <div className='text-gray-300'>
       
        </div>
      </div>

      <div className='p-10 flex flex-col gap-5'>
      <div className='mt-5'>
          <p className='text-xl text-white'>Shopping Cart</p>
          <p className='text-gray-300 mt-2'>Wishlist</p>
        </div>
        <p className='text-xl text-white'>My Account</p>
        <div className='text-gray-300 flex flex-col gap-3'>
          <p>My Account</p>
          <p>Order History</p>
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
