import React from 'react'

const Banner = () => {
  return (
    <section>
        <div className='container m-auto flex justify-between mt-[117px] font-roboto'>
            <div>
            <h1 className='w-[437px] text-6xl font-semibold'>Find The Best Fashion Style For You</h1>
            <p className='w-[531px] mt-10 font-normal text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe iure doloribus atque nisi totam aliquid perferendis minima dolorum voluptatum, laborum enim deserunt nesciunt quod tempora sequi, ad similique provident vero impedit cum expedita veritatis optio at tempore! Accusantium voluptatibus inventore voluptas, pariatur, quo quisquam est veritatis iusto ipsa in voluptate?</p>
            <div className='py-6 px-[91px] bg-black text-white w-fit text-2xl mt-[76px] font-semibold rounded-xl'>
                <a href="#">Shop now</a>
            </div>
            </div>
            <div className='image'>
                <img src="/banner.png" alt="banner"/>
            </div>
        </div>
    </section>
  )
}

export default Banner
