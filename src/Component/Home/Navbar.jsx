import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav>
      <div className='container m-auto flex justify-between font-roboto p-[45px] items-center'>
        <div className='w-[133px]'>
        <img src="/logo.png" alt=""/>
        </div>
      <ul className='flex gap-[60px] text-2xl'>
        <li><a href="#" className='hover:text-primary duration-300'>Men</a></li>
        <li><a href="#" className='hover:text-primary duration-300'>Woman</a></li>
        <li><a href="#" className='hover:text-primary duration-300'>Kids</a></li>
        <li><a href="#" className='hover:text-primary duration-300'>Collection</a></li>
        <li><a href="#" className='hover:text-primary duration-300'>Trends</a></li>
      </ul>
        <div className='flex gap-4 text-2xl'>
        <a href="#" className='border border-spacing-2 py-3 px-[27px] hover:bg-primary duration-300 rounded-xl'>Login</a> 
        <a href="#" className='border border-spacing-2 py-3 px-[27px] hover:bg-primary duration-300 rounded-xl'>Sign up</a>
        </div>
      </div>
    </nav>
    </>
  )
}





export default Navbar
