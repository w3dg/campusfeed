import React from "react";
import NavBar from "../fragments/NavBar";

const HeroSection = () => {
  return (
    <>
      <NavBar />
      <section id="home" className="flex flex-col px-4 pt-[6rem] xl:px-10">
        <div className="mx-auto w-[90%] text-center md:w-[60%] lg:w-[50%] xl:w-[40%]">
          <h1 className="text-[40px] leading-[50px] md:text-[60px] md:leading-[70px] xl:text-[72px] xl:leading-[80px]">
            One <span className="text-[#6DA27D]">Platform,</span> Every{" "}
            <span className="text-[#6DA27D]">Event</span>
          </h1>
          <p className="text-xs md:text-sm lg:text-[18px] xl:mt-8">
            Bringing every campus event to your fingertips!
          </p>
        </div>
        <div
          className="flex flex-col items-center justify-between rounded-[30px]"
          style={{
            background:
              "linear-gradient(to bottom, #FCFDFD 0%, #eff5f1 50%, #e4eee7 80%, #a8cab2 100%)",
          }}
        >
          <div
            className="mt-4 min-h-[150px] w-[95%] md:min-h-[300px] lg:min-h-[400px] xl:min-h-[550px]"
            style={{
              backgroundImage: "url('/heroimage.svg')",
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
