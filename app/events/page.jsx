"use client";
import EventCard from "@/components/fragments/EventCard";
import NavBar from "@/components/fragments/NavBar";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const events = [
  {
    eventPoster: "EventDemo1.svg",
    eventName: "KODESPHERE - The Flagship Event",
    eventLocation: "Campus-13",
    eventDate: "Sat-25-Mar",
    eventPrice: 200.0,
  },
  {
    eventPoster: "EventDemo2.svg",
    eventName: "SPOTLIGHT - The Flagship Event",
    eventLocation: "Campus-14",
    eventDate: "Sat-25-Mar",
    eventPrice: 300.0,
  },
  {
    eventPoster: "EventDemo3.svg",
    eventName: "STEP IT UP - The Flagship Event",
    eventLocation: "Campus-15",
    eventDate: "Sat-25-Mar",
    eventPrice: 400.0,
  },
  {
    eventPoster: "EventDemo1.svg",
    eventName: "KODESPHERE - The Flagship Event",
    eventLocation: "Campus-13",
    eventDate: "Sat-25-Mar",
    eventPrice: 200.0,
  },
  {
    eventPoster: "EventDemo2.svg",
    eventName: "SPOTLIGHT - The Flagship Event",
    eventLocation: "Campus-14",
    eventDate: "Sat-25-Mar",
    eventPrice: 300.0,
  },
  {
    eventPoster: "EventDemo3.svg",
    eventName: "STEP IT UP - The Flagship Event",
    eventLocation: "Campus-15",
    eventDate: "Sat-25-Mar",
    eventPrice: 400.0,
  },
  {
    eventPoster: "EventDemo1.svg",
    eventName: "KODESPHERE - The Flagship Event",
    eventLocation: "Campus-13",
    eventDate: "Sat-25-Mar",
    eventPrice: 200.0,
  },
  {
    eventPoster: "EventDemo2.svg",
    eventName: "SPOTLIGHT - The Flagship Event",
    eventLocation: "Campus-14",
    eventDate: "Sat-25-Mar",
    eventPrice: 300.0,
  },
  {
    eventPoster: "EventDemo3.svg",
    eventName: "STEP IT UP - The Flagship Event",
    eventLocation: "Campus-15",
    eventDate: "Sat-25-Mar",
    eventPrice: 400.0,
  },
  {
    eventPoster: "EventDemo1.svg",
    eventName: "KODESPHERE - The Flagship Event",
    eventLocation: "Campus-13",
    eventDate: "Sat-25-Mar",
    eventPrice: 200.0,
  },
  {
    eventPoster: "EventDemo2.svg",
    eventName: "SPOTLIGHT - The Flagship Event",
    eventLocation: "Campus-14",
    eventDate: "Sat-25-Mar",
    eventPrice: 300.0,
  },
  {
    eventPoster: "EventDemo3.svg",
    eventName: "STEP IT UP - The Flagship Event",
    eventLocation: "Campus-15",
    eventDate: "Sat-25-Mar",
    eventPrice: 400.0,
  },
  {
    eventPoster: "EventDemo1.svg",
    eventName: "KODESPHERE - The Flagship Event",
    eventLocation: "Campus-13",
    eventDate: "Sat-25-Mar",
    eventPrice: 200.0,
  },
  {
    eventPoster: "EventDemo2.svg",
    eventName: "SPOTLIGHT - The Flagship Event",
    eventLocation: "Campus-14",
    eventDate: "Sat-25-Mar",
    eventPrice: 300.0,
  },
  {
    eventPoster: "EventDemo3.svg",
    eventName: "STEP IT UP - The Flagship Event",
    eventLocation: "Campus-15",
    eventDate: "Sat-25-Mar",
    eventPrice: 400.0,
  },
  {
    eventPoster: "EventDemo1.svg",
    eventName: "KODESPHERE - The Flagship Event",
    eventLocation: "Campus-13",
    eventDate: "Sat-25-Mar",
    eventPrice: 200.0,
  },
  {
    eventPoster: "EventDemo2.svg",
    eventName: "SPOTLIGHT - The Flagship Event",
    eventLocation: "Campus-14",
    eventDate: "Sat-25-Mar",
    eventPrice: 300.0,
  },
  {
    eventPoster: "EventDemo3.svg",
    eventName: "STEP IT UP - The Flagship Event",
    eventLocation: "Campus-15",
    eventDate: "Sat-25-Mar",
    eventPrice: 400.0,
  },
];

export default function Home() {
  const [search, setSearch] = useState(false);
  return (
    <>
      <NavBar />
      <section className="px-4 lg:px-0 py-5 md:w-[80%] lg:w-[75%] mx-auto">
        <header className="flex justify-between items-center">
          <p className="text-[40px]">Events</p>
          <div className="gap-1 text-sm hidden md:flex">
            <button className="bg-[#6DA27D] rounded-md p-2 text-white">
              Filter
            </button>
            <button className="bg-[#6DA27D] rounded-md p-2 text-white">
              Sort By
            </button>
            <div className="flex gap-1 items-center bg-[#D3DEE3] px-3 py-1 rounded-md min-w-[250px]">
              <input
                placeholder="Search for something.."
                type="text"
                className="bg-transparent pr-3 rounded-md placeholder:text-black/45 placeholder:text-sm placeholder:font-light focus:outline-none w-[95%]"
              />
              <Image
                src={"/SearchIcon.svg"}
                height={20}
                width={20}
                alt="search"
              />
            </div>
          </div>
          <AnimatePresence>
            {!search ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mr-4 rounded-full bg-[#D3DEE3] p-2 md:hidden"
              >
                <Image
                  src={"/SearchIcon.svg"}
                  height={20}
                  width={20}
                  alt="search"
                  onClick={() => setSearch(!search)}
                />
              </motion.div>
            ) : (
              <motion.div className="relative md:hidden">
                <motion.input
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  placeholder="Search "
                  type="text"
                  className="bg-[#D3DEE3] py-1 pl-3 pr-8 border-2 rounded-2xl placeholder:text-black/45 placeholder:text-sm placeholder:font-light focus:outline-none"
                />
                <button
                  onClick={() => setSearch(false)}
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
        <div className="mt-3 px-0 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-2 md:gap-x-4 gap-y-10">
          {events.map((event, index) => (
            <EventCard event={event} key={index} />
          ))}
        </div>
      </section>
    </>
  );
}
