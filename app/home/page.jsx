import NavBar from '@/components/fragments/NavBar'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <NavBar />
      <section className="px-4 lg:px-0 py-5 lg:w-[75%] mx-auto">
        <header className="flex justify-between items-center">
          <p className="text-[40px]">Events</p>
          <div className="flex gap-1 text-sm">
            <button className="bg-[#6DA27D] rounded-md p-2 text-white">
              Filter
            </button>
            <button button className="bg-[#6DA27D] rounded-md p-2 text-white">
              Sort By
            </button>
            <div className="flex gap-1 items-center bg-[#D3DEE3] px-3 py-1 rounded-md min-w-[250px]">
              <input
                placeholder="Search for something.."
                type="text"
                className="bg-transparent pr-3 rounded-md placeholder:text-black/45 placeholder:text-sm placeholder:font-light focus:outline-none w-[95%]"
              />
              <Image
                src={'/SearchIcon.svg'}
                height={20}
                width={20}
                alt="search"
              />
            </div>
          </div>
        </header>
      </section>
    </>
  )
}
