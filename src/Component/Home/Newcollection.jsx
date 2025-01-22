import React from 'react'

const Newcollection = () => {
  return (
    <>
    <section>
        <div className="container m-auto mt-24 text-center">
            <div>
            <h1 className='font-bold text-6xl font-frank mb-10'>New Collection</h1>
            <p className='font-normal text-2xl font-poppins'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='grid grid-cols-3 justify-items-center gap-4 image2 mt-10 relative mb-24'>
                <div className='relative'>
                <img src="/collection_1.png"/>
                <p className='absolute bottom-11 left-1/2 transform -translate-x-1/2 py-3 px-28 bg-white text-black rounded font-normal text-2xl font-poppins'>jeans</p>
                </div>
                <div className='relative'>
                <img src="/collection_1.png"/>
                <p className='absolute bottom-11 left-1/2 transform -translate-x-1/2 py-3 px-28 bg-white text-black rounded font-normal text-2xl font-poppins'>jeans</p>
                </div>
                <div className='relative'>
                <img src="/collection_1.png"/>
                <p className='absolute bottom-11 left-1/2 transform -translate-x-1/2 py-3 px-28 bg-white text-black rounded font-normal text-2xl font-poppins'>jeans</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Newcollection
