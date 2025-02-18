import React from 'react'
import NavBar from '../fragments/NavBar'
import SearchBarSection from '../fragments/SearchBarSection'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <>
      <NavBar />
      <section
        className="md:min-h-[40vh] lg:min-h-[65vh] xl:min-h-[90vh] h-[300px] w-[90%] md:w-[90%] mx-auto pt-12 rounded-[30px]  text-center overflow-hidden relative 2xl:h-[110vh] flex flex-col items-center justify-between"
        style={{
          background:
            'linear-gradient(to bottom, #FCFDFD 0%, #eff5f1 50%, #e4eee7 80%, #a8cab2 100%)',
        }}
      >
        <div className="flex flex-col items-center justify-center lg:w-[60%] xl:w-[40%] lg:mx-auto">
          <h1 className="text-[40px] leading-[50px] lg:text-[60px] xl:text-[72px]  lg:leading-[70px] xl:leading-[80px]">
            All the <span className="text-[#6DA27D]">Events</span> in One Place
          </h1>
          <p className="mt-5 text-xs md:text-sm lg:text-[18px] xl:mt-8">
            More description about Campus Feed
          </p>
        </div>
        <div className="relative min-h-[40%] lg:min-h-[50%] md:min-h-[70%] w-[90%] mx-auto ">
          <Image
            src="/HeroSectionImg.svg"
            alt="Event"
            fill
            className="object-contain object-bottom object-no-repeat"
          />
        </div>
      </section>
    </>
  )
}

export default HeroSection
