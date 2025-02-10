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
        <h1>Hello World</h1>
      </section>
    </>
  )
}

export default HeroSection
