import React from 'react'
import NavBar from '../fragments/NavBar'

const HeroSection = () => {
  return (
    <>
      <NavBar />
      <section
        className="min-h-[90vh] w-[90%] md:w-[80%] mx-auto py-12 rounded-[30px] border-2 border-black text-center"
        style={{
          background: 'linear-gradient(to bottom, #FCFDFD, #D3DEE3 100%)',
        }}
      >
        <h1 className="text-[40px] leading-[50px] lg:text-[72px] lg:w-[40%] lg:mx-auto lg:leading-[80px]">
          All the <span className="text-[#6DA27D]">Events</span> in One Place
        </h1>
        <p className="mt-5 text-xs md:text-sm lg:text-[18px] lg:mt-8">
          More description about Campus Feed
        </p>
      </section>
    </>
  )
}

export default HeroSection
