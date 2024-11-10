import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'

const Hero = () => {
  return (
    <div id="Hero" className='min-h-screen bg-no-repeat  bg-cover'
    style={{backgroundSize: "35%", backgroundPosition: "left 100px top 100px"}}
    >
      <Image src={"/Rehan.jjsp.jpeg"} alt='Image' height={100} width={100}></Image>
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100-vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p data-aos="zoom-in-up">I am</p>
            <p data-aos="zoom-in-up">Rehan</p>
            <p data-aos="zoom-in-up">Aslam</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero