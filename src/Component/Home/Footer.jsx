import React from 'react'
import { FaStar } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <section className='bg-secondary p-14 justify-center'>
        <div className="container grid grid-cols-2">
        <div className='w-80 mt-[35px]'>
            <h3 className='font-bold text-[64px] mb-11 text-white'>Best Seller Product</h3>
            <p className='w-[500px] text-2xl font-bold text-white mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus.</p>
            <a href="#" className='border border-spacing-2 border-black bg-black text-white py-6 px-24 rounded-xl text-2xl font-bold'>SEE MORE</a> 
        </div>
        <div className='flex gap-8 mt-[60px]'>
        <div className='image4'>
        <img src="/footer_img_1.png"/>
        <div className='bg-white w-[366px] p-6'>
        <div className='flex gap-2 text-primary mb-3'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar /> 
        </div>
            <p className='text-[22px] font-poppins font-semibold'>Sweater Shirt</p>
            <div className='flex items-center gap-3'>
            <div>
            <span className='text-third font-normal text-2xl font-poppins'>$45.99</span>
            </div>
            <div>
            <span className='text-2xl font-normal font-poppins'>$35.99</span>
            </div>
            </div>
        </div>
        </div><div className='image4'>
        <img src="/footer_img_1.png"/>
        <div className='bg-white w-[366px] p-6'>
        <div className='flex gap-2 text-primary mb-3'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar /> 
        </div>
            <p className='text-[22px] font-poppins font-semibold'>Sweater Shirt</p>
            <div className='flex items-center gap-3'>
            <div>
            <span className='text-third font-normal text-2xl font-poppins'>$45.99</span>
            </div>
            <div>
            <span className='text-2xl font-normal font-poppins'>$35.99</span>
            </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default Footer
