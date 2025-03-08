"use client";
import Image from "next/image";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const navLinks = ["Home", "Events", "Features", "About", "Contact Us"];
  const path = usePathname().split("/")[1];
  console.log(path);

  return (
    <nav className="fixed top-0 z-20 flex w-full items-center justify-between bg-white p-4 lg:px-16">
      <a href="/">
        <Image
          src={"/navlogo.svg"}
          width={153}
          height={40}
          alt="Logo"
          className="h-[40px] w-[153px] cursor-pointer md:h-[35px] md:w-[203px]"
        />
      </a>
      <div className="hidden min-w-fit items-center justify-between gap-1 rounded-xl bg-neutral-200 bg-opacity-50 px-2 py-1 lg:-ml-12 lg:flex lg:gap-3 xl:-ml-24">
        {navLinks
          .filter((item) => !(path === "events" && item === "Features"))
          .map((item) => {
            const linkPath =
              path === "events"
                ? `/#${item.toLocaleLowerCase()}`
                : `#${item.toLowerCase()}`;

            return (
              <Link
                key={item}
                href={item === "Events" ? "/events" : linkPath}
                className="rounded-md px-2 py-1 transition-colors duration-200 hover:bg-[#bdc9d0] hover:bg-opacity-90"
              >
                {item}
              </Link>
            );
          })}
      </div>
      <button className="ml-4 hidden rounded-lg bg-[#6DA27D] px-4 py-2 text-white transition-all duration-200 hover:scale-105 hover:shadow-lg lg:block">
        <Link href={path === "events" ? "/logout" : "/login"}>
          {path === "events" ? "Logout" : "Register"}
        </Link>
      </button>
      <HamburgerMenu navLinks={navLinks} path={path} />
    </nav>
  );
};

export default NavBar;
