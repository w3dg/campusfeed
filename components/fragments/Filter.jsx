'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Slider } from "@heroui/slider";
import { DateRangePicker } from "@heroui/date-picker";
import { Select, SelectItem } from "@heroui/select";

const locations = [
 "Campus-15", "Campus-14", "Campus-13", "Campus-12", "Campus-8"
];

const Filter = ({ filterOpen, setFilterOpen, setSortOpen, filterOptions, setSelectedFilter, selectedFilter, priceRange, setPriceRange, dateRange, setDateRange, selectedLocations, setSelectedLocations }) => {
  
  // Handle slider value change
  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  const handleDateChange = (range) => {
    if (!range || !range.start || !range.end) {
      console.error("Invalid range received:", range);
      return;
    }
    console.log(range)
    setDateRange(range)
  
  };
  

  // Handle location selection change
  const handleLocationChange = (selected) => {
    setSelectedLocations(locations[selected?.target?.value]);
  };

  return (
    <div className="relative">
      <button
        onClick={() => {
          setFilterOpen(!filterOpen);
          setSortOpen(false);
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
        />
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
            <ul className="mt-1 space-y-2 pb-2">
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

              {/* Price Range Filter */}
              {selectedFilter === 0 && (
                <Slider
                  className="min-w-[200px]"
                  value={priceRange}
                  onChange={handlePriceChange}
                  formatOptions={{ style: "currency", currency: "INR" }}
                  label="Price Range"
                  maxValue={1000}
                  minValue={100}
                  step={50}
                  size="sm"
                />
              )}

              {/* Date Range Filter */}
              {selectedFilter === 2 && (
                <DateRangePicker
                  className="max-w-xs"
                  label="Select your range"
                  value={dateRange} 
                  onChange={handleDateChange}
                />
              )}

              {/* Location Filter (Multi-select) */}
              {selectedFilter === 1 && (
                <Select
                  label="Select Location"
                  placeholder="Choose campus"
                  multiple
                  value={selectedLocations}
                  onChange={handleLocationChange}
                  className="min-w-[200px]"
                >
                  {locations.map((location, index) => (
                    <SelectItem key={index} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </Select>
              )}
              {
                selectedFilter !== -1 && (
                  <button className='text-white relative bg-[#6DA27D] left-[37%] top-1 tracking-wide p-1 px-3 rounded-2xl  hover:bg-[#84ba95]' onClick={()=>setSelectedFilter(-1)}>clear</button>
                )
              }
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Filter;