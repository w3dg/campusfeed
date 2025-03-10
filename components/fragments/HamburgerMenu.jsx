"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const HamburgerMenu = ({ navLinks, path }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const session = useSession();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="relative lg:hidden">
      <motion.button
        className="relative z-50 flex h-[30px] w-[30px] items-center justify-center"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        whileTap={{ scale: 0.97 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isMenuOpen ? (
            <motion.div
              key="close"
              className="absolute"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={"/CloseMenu.svg"}
                width={30}
                height={30}
                alt="Close Menu"
                className="filter-green"
              />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              className="absolute"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={"/Hamburger.svg"}
                width={20}
                height={20}
                alt="Hamburger Menu"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute right-0 top-12 z-50 flex w-48 flex-col gap-1 rounded-lg bg-white p-4 shadow-lg"
            >
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
                      href={
                        item === "Events"
                          ? "/events"
                          : item === "Publisher"
                            ? "/publisher"
                            : linkPath
                      }
                      className="rounded-md px-2 py-1 transition-colors duration-200 hover:bg-[#bdc9d0] hover:bg-opacity-90"
                    >
                      {item}
                    </Link>
                  );
                })}
              <button className="my-1 ml-2 w-[60%] rounded-md bg-[#6DA27D] py-1 text-white">
                <Link
                  href={
                    session.status === "unauthenticated" ? "/login" : "/logout"
                  }
                >
                  {session.status === "unauthenticated" ? "Register" : "Logout"}
                </Link>
              </button>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
