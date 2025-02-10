import Image from 'next/image'
import HamburgerMenu from './HamburgerMenu'

const NavBar = () => {
  return (
    <nav className="p-4 md:w-[90%] md:mx-auto md:px-0 flex items-center justify-between">
      <Image
        src={'/navlogo.svg'}
        width={153}
        height={40}
        alt="Logo"
        className="w-[153px] h-[40px] md:w-[203px] md:h-[35px]"
      />
      <div className="bg-[#ABBEC9] bg-opacity-50 px-2 py-1 rounded-xl flex items-center justify-between w-[25%]">
        {['Home', 'Events', 'About', 'Contact Us'].map((item) => (
          <a
            key={item}
            href="#"
            className="py-1 px-2 hover:bg-[#ABBEC9] bg-opacity-30 rounded-md transition-colors duration-200"
          >
            {item}
          </a>
        ))}
      </div>
      <button className="bg-[#6DA27D] ml-4 my-1 rounded-lg py-2 px-4 text-white hover:bg-lime-600 hover:shadow-lg transition-all duration-200">
        Register
      </button>
      <HamburgerMenu />
    </nav>
  )
}

export default NavBar
