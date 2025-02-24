'use client'
import EventCard from '@/components/fragments/EventCard'
import NavBar from '@/components/fragments/NavBar'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Filter from '@/components/fragments/Filter'
import SortBy from '@/components/fragments/SortBy'

const events = [
  {
    eventPoster: 'EventDemo1.svg',
    eventName: 'KODESPHERE - The Flagship Event',
    eventLocation: 'Campus-13',
    eventDate: 'Sat-29-Mar',
    eventPrize: 200.0,
  },
  {
    eventPoster: 'EventDemo2.svg',
    eventName: 'SPOTLIGHT - The Flagship Event',
    eventLocation: 'Campus-14',
    eventDate: 'Sat-25-Mar',
    eventPrize: 300.0,
  },
  {
    eventPoster: 'EventDemo3.svg',
    eventName: 'STEP IT UP - The Flagship Event',
    eventLocation: 'Campus-15',
    eventDate: 'Sat-25-Mar',
    eventPrize: 400.0,
  },
]

export default function Home() {
  const [search, setSearch] = useState(false)
  const [filterOpen, setFilterOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)
  const [sortBy, setSortBy] = useState(0)
  const sortOptions = ['Prize: High to Low', 'Newest First']
  const filterOptions = ['Prize', 'Location', 'Date']
  const [selectedFilter, setSelectedFilter] = useState(-1)
  const [priceRange, setPriceRange] = useState([100, 500])
  const [dateRange, setDateRange] = useState({
    start: null,
    end: null
  })
  const [selectedLocations, setSelectedLocations] = useState(-1)
  const [searchQuery, setSearchQuery] = useState('')
  
  // State for filtered events
  const [filteredEvents, setFilteredEvents] = useState(events)

  // Parse date string to timestamp for comparison
  const parseDateString = (dateStr) => {
    // Format is "Sat-29-Mar"
    const parts = dateStr.split('-')
    const day = parseInt(parts[1])
    const month = parts[2]
    
    // Map month abbreviation to month number
    const monthMap = {
      'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5, 
      'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    }
    
    // Use current year for simplicity
    const date = new Date(new Date().getFullYear(), monthMap[month], day)
    return date.getTime()
  }

  // Apply filters and sorting whenever relevant state changes
  useEffect(() => {
    let result = [...events]
    
    // Apply search filter if searchQuery exists
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(event => 
        event.eventName.toLowerCase().includes(query) || 
        event.eventLocation.toLowerCase().includes(query)
      )
    }
    
    // Apply price range filter
    if (selectedFilter === 0 || selectedFilter === -1) {
      result = result.filter(event => 
        event.eventPrize >= priceRange[0] && event.eventPrize <= priceRange[1]
      )
      console.log("Applying Price Filter", result)
    }
    
    // Apply location filter if locations are selected
    if (selectedFilter === 1 && selectedLocations !== -1) {
      result = result.filter(event => 
        selectedLocations === event.eventLocation
      )
      console.log("Applying Location Filter", result)
    }
    
    // Apply date filter if date range is set TODO
    if ((selectedFilter === 2 || selectedFilter === -1) && (dateRange.start || dateRange.end)) {
      result = result.filter(event => {
        const eventTimestamp = parseDateString(event.eventDate)
        
        if (dateRange.start && dateRange.end) {
          console.log("Event Date", new Date(event[0].eventDate))
        }
         else if (dateRange.start) {
          return eventTimestamp >= dateRange.start.getTime()
        } else if (dateRange.end) {
          return eventTimestamp <= dateRange.end.getTime()
        }
        
        return true
      })
    }
    
    // Apply sorting
    if (sortBy === 0) {
      // Prize: High to Low
      result.sort((a, b) => b.eventPrize - a.eventPrize)
    } else if (sortBy === 1) {
      // Newest First (based on date)
      result.sort((a, b) => {
        const dateA = parseDateString(a.eventDate)
        const dateB = parseDateString(b.eventDate)
        return dateB - dateA
      })
    }
    
    setFilteredEvents(result)
  }, [searchQuery, selectedFilter, priceRange, selectedLocations, dateRange, sortBy])

  return (
    <>
      <NavBar />
      <section className="px-4 lg:px-0 py-20 md:w-[80%] lg:w-[75%] mx-auto max-w-6xl relative">
        <header className="flex justify-between items-center">
          <p className="text-[40px]">Events</p>
          <div className="gap-2 text-sm hidden md:flex items-center z-10">
            {/* Filter Dropdown */}
            <Filter 
              filterOpen={filterOpen} 
              setFilterOpen={setFilterOpen} 
              setSortOpen={setSortOpen} 
              filterOptions={filterOptions} 
              selectedFilter={selectedFilter} 
              setSelectedFilter={setSelectedFilter} 
              priceRange={priceRange} 
              setPriceRange={setPriceRange}
              dateRange={dateRange} 
              setDateRange={setDateRange} 
              selectedLocations={selectedLocations} 
              setSelectedLocations={setSelectedLocations}
            />

            {/* Sort By Dropdown */}
            <SortBy 
              filterOpen={filterOpen} 
              setFilterOpen={setFilterOpen} 
              sortOpen={sortOpen} 
              setSortOpen={setSortOpen} 
              sortOptions={sortOptions} 
              sortBy={sortBy} 
              setSortBy={setSortBy}
            />

            {/* Search Bar */}
            <div className="flex gap-1 items-center bg-[#D3DEE3] px-3 py-2 rounded-md min-w-[250px]">
              <input
                placeholder="Search for something.."
                type="text"
                className="bg-transparent pr-3 rounded-md placeholder:text-black/45 placeholder:text-sm placeholder:font-light focus:outline-none w-[95%]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Image
                src={'/SearchIcon.svg'}
                height={20}
                width={20}
                alt="search"
              />
            </div>
          </div>

          {/* Mobile Search Icon */}
          <AnimatePresence mode="wait">
            {!search ? (
              <motion.div
                initial={{ opacity: 0, width: '60%' }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: '60%' }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                }}
                className="rounded-full bg-[#D3DEE3] p-2 md:hidden"
              >
                <Image
                  src={'/SearchIcon.svg'}
                  height={20}
                  width={20}
                  alt="search"
                  onClick={() => setSearch(!search)}
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '60%' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                }}
                className="flex items-center justify-between pr-2 md:hidden bg-[#D3DEE3] border-2 rounded-2xl overflow-hidden"
              >
                <motion.input
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  placeholder="Search "
                  type="text"
                  className="bg-transparent py-1 pl-3 placeholder:text-black/45 placeholder:text-sm placeholder:font-light focus:outline-none min-w-[85%]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => setSearch(false)}
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
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
        {/* Event Cards */}
        <div className="mt-3 2xl:mt-6 px-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 md:gap-x-4 gap-y-10 relative">
          {/* <div className="fixed w-[20%] h-[40%]  bg-[#b9eec966] blur-2xl rounded-full -z-10 -left-[2%] top-[40%] pointer-events-none"></div>
          <div className="fixed w-[20%] h-[40%] bg-[#b9eec966] blur-2xl rounded-full -z-10 -right-[5%] top-[20%] pointer-events-none"></div> */}

          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <EventCard event={event} key={index} />
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              No events match your criteria. Try adjusting your filters.
            </div>
          )}
        </div>
      </section>
    </>
  )
}