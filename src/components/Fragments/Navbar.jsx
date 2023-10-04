import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useColorMode from "../../hooks/useColorMode";

import {
  RiMenu3Fill,
  RiCloseFill,
  RiMoonFill,
  RiSunFill,
} from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [stickyHeader, setStickyHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        setStickyHeader(true);
      } else {
        setStickyHeader(false);
      }
    });
  }, [stickyHeader]);

  const [colorMode, setColorMode] = useColorMode();
  return (
    <nav
      className={`header fixed top-0 left-0 z-50 w-full transition-all duration-400 ${
        stickyHeader
          ? "bg-white shadow-md dark:bg-gray-900"
          : "bg-transparent shadow-none"
      }`}
    >
      <div className="header__container container flex h-24 items-center justify-between">
        {/* header logo */}
        <Link
          to="/"
          className={`header__logo font-serif text-[20px] font-semibold dark:text-white ${
            stickyHeader ? "text-gray-900" : "text-white"
          }`}
        >
          Travello.
        </Link>

        {/* header menu */}
        <div
          className={`header__menu fixed top-0 z-10 flex h-full w-[70%] flex-col justify-between bg-white px-10 pt-24 pb-10 shadow-[0_-4px_12px_rgba(0,0,0,0.12)] transition-all duration-400 dark:bg-gray-900 md:static md:z-auto md:h-auto md:w-auto md:flex-row md:items-center md:gap-8 md:bg-transparent md:p-0 md:shadow-none md:dark:bg-transparent ${
            menuOpen ? "right-0" : "-right-full"
          }`}
        >
          <ul className="header__list mb-8 flex flex-col gap-8 md:mb-0 md:flex-row">
            {[
              ["About", "/about"],
              ["Why Us", "/why-us"],
              ["Trips", "/trips"],
              ["Pricing", "/pricing"],
              ["Contact", "/contact"],
            ].map(([title, url]) => (
              <li key={url}>
                <Link
                  to={url}
                  className={`header__link group relative text-[15px] font-medium leading-tight text-gray-900 dark:text-white md:text-white ${
                    stickyHeader ? "md:text-gray-900" : "md:text-white"
                  }`}
                >
                  {title}
                  <div
                    className={`absolute top-6 left-0 h-[3px] w-0 bg-blue-600 transition-all duration-400 group-hover:w-full ${
                      stickyHeader ? "md:bg-blue-600" : "md:bg-white"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* header theme toggle [desktop version] */}
          <div
            className={`header__theme hidden cursor-pointer p-1 text-[1.3rem] dark:text-white md:flex ${
              stickyHeader ? "text-gray-900" : "text-white"
            }`}
            onClick={() =>
              setColorMode(colorMode === "light" ? "dark" : "light")
            }
          >
            {colorMode === "light" ? <RiMoonFill /> : <RiSunFill />}
          </div>

          <Link to="/register" className="header__button button">
            Register
          </Link>
        </div>

        <div className="header__wrapper inline-flex items-center gap-5 md:hidden">
          {/* header theme toggle [mobile version] */}
          <div
            className={`header__theme cursor-pointer p-1 text-[1.3rem] dark:text-white ${
              stickyHeader ? "text-gray-900" : "text-white"
            }`}
            onClick={() =>
              setColorMode(colorMode === "light" ? "dark" : "light")
            }
          >
            {colorMode === "light" ? <RiMoonFill /> : <RiSunFill />}
          </div>

          {/* header menu toggle */}
          <div
            className="header__toggle z-10 inline-flex cursor-pointer p-1 text-[1.3rem]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {!menuOpen ? (
              <RiMenu3Fill
                className={`dark:text-white ${
                  stickyHeader ? "text-gray-900 " : "text-white"
                }`}
              />
            ) : (
              <RiCloseFill className="text-gray-900 dark:text-white" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
