import React from 'react'
import Navbar from '../Component/Home/Navbar'
import Newcollection from '../Component/Home/Newcollection'
import Footer from '../Component/Home/Footer'
import Bestfashion from '../Component/Home/Bestfashion'
import Banner from '../Component/Home/Banner'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Newcollection/>
    <Bestfashion/>
    <Footer/>
    </>
  )
}

export default Home
