'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import {Slider} from "@heroui/slider";
import {DateRangePicker} from "@heroui/date-picker";

const Filter = ({filterOpen, setFilterOpen, setSortOpen, filterOptions, setSelectedFilter, selectedFilter}) => {
  return (
    <div className="relative">
              <button
                onClick={() => {
                  setFilterOpen(!filterOpen)
                  setSortOpen(false)
                }}
                className="bg-[#6DA27D] rounded-md p-2 text-white flex gap-1"
              >
                Filter
                <Image
                  src={'Dropdown.svg'}
                  alt={'Dropdown'}
                  width={10}
                  height={10}
                  className="inline"
                ></Image>
              </button>
              <AnimatePresence>
                {filterOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bg-white shadow-lg rounded-md p-3 min-w-40 mt-1"
                  >
                    <p className="text-sm font-semibold">Filter By:</p>
                    <ul className="mt-1 space-y-2">
                      {filterOptions.map((filter, index) => (
                        <li
                          key={index}
                          className={`p-1 pl-2 rounded-md cursor-pointer ${
                            selectedFilter === index
                              ? 'bg-[#6DA27D] text-white'
                              : 'text-black hover:bg-gray-100'
                          }`}
                         onClick={() => setSelectedFilter(index)}
                        >
                          {filter}
                        </li>
                      ))}
                      {selectedFilter === 0 &&     <Slider
      className="min-w-[200px]"
      defaultValue={[100, 500]}
      formatOptions={{style: "currency", currency: "INR"}}
      label="Price Range"
      maxValue={1000}
      minValue={100}
      step={50}
      size='sm'
    />}
    {selectedFilter === 2 && <DateRangePicker className="max-w-xs" label="Select your range" />}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
  )
}

export default Filter