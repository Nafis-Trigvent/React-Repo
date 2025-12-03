import React from 'react'

export const Navbar = () => {
  return (
    <div className='w-full bg-black'>
      <div className='flex w-[90%] mx-auto justify-between h-[100px] items-center text-white'>
        <div className='text-5xl'>Trigvent </div>
        <div className='flex gap-10'>
          <p>Home</p>
          <p>Projects</p>
          <p>About Us</p>
          <p>Contact us</p>
        </div>
        <div className='flex gap-10'>
          <p>Profile</p>
          <p>Cart</p>
        </div>
      </div>
    </div>
  )
}
