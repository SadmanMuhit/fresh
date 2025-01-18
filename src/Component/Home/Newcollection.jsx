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
            <div className='grid grid-cols-3 justify-items-center gap-4 image2 mt-10'>
                <img src="/collection_1.png" alt="" />
                <img src="/collection_1.png" alt="" />
                <img src="/collection_1.png" alt="" />
            </div>
        </div>
    </section>
    </>
  )
}

export default Newcollection
