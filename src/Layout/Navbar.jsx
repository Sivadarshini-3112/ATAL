import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const timeoutRefs = useRef({});

  const handleMouseEnter = (dropdown) => {
    if (timeoutRefs.current[dropdown]) {
      clearTimeout(timeoutRefs.current[dropdown]);
    }
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = (dropdown) => {
    timeoutRefs.current[dropdown] = setTimeout(() => {
      setOpenDropdown(null);
    }, 300);
  };

  return (
    <>
      <nav className="w-full flex justify-center items-center py-3 font-latin">
        <ul className="text-sm md:text-base lg:text-lg xl:text-xl w-full flex flex-wrap justify-around px-4 sm:px-8 md:px-16 lg:px-24">
          <li>
            <Link to="/" className="hover:text-orange-400">Home</Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("portfolio")}
            onMouseLeave={() => handleMouseLeave("portfolio")}
          >
            <Link to="" className="hover:text-orange-400">Portfolio</Link>
            {openDropdown === "portfolio" && (
              <ul
                className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg"
                onMouseEnter={() => handleMouseEnter("portfolio")}
                onMouseLeave={() => handleMouseLeave("portfolio")}
              >
                <li className="border-b border-gray-200">
                  <Link to="/start_ups" className="block px-4 py-4 hover:bg-gray-200 hover:text-orange-400">Startup Details</Link>
                </li>
                <li className="border-b border-gray-200">
                  <Link to="/students_projects" className="block px-4 py-4 hover:bg-gray-200 hover:text-orange-400">Students Projects</Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("programs")}
            onMouseLeave={() => handleMouseLeave("programs")}
          >
            <Link to="/" className="hover:text-orange-400">Programs</Link>
            {openDropdown === "programs" && (
              <ul
                className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg"
                onMouseEnter={() => handleMouseEnter("programs")}
                onMouseLeave={() => handleMouseLeave("programs")}
              >
                <li className="border-b border-gray-200">
                  <Link to="/start_ups" className="block px-4 py-4 hover:bg-gray-200 hover:text-orange-400">Pre-Incubate</Link>
                </li>
                <li className="border-b border-gray-200">
                  <Link to="/students_projects" className="block px-4 py-4 hover:bg-gray-200 hover:text-orange-400">Incubate</Link>
                </li>
                <li className="border-b border-gray-200">
                  <Link to="/students_projects" className="block px-4 py-4 hover:bg-gray-200 hover:text-orange-400">Incubation</Link>
                </li>
                <li className="border-b border-gray-200">
                  <Link to="/students_projects" className="block px-4 py-4 hover:bg-gray-200 hover:text-orange-400">IP-Facilities</Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("partners")}
            onMouseLeave={() => handleMouseLeave("partners")}
          >
            <Link to="/" className="hover:text-orange-400">Partners</Link>
            {openDropdown === "partners" && (
              <ul
                className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg"
                onMouseEnter={() => handleMouseEnter("partners")}
                onMouseLeave={() => handleMouseLeave("partners")}
              >
                <li className="border-b border-gray-200">
                  <Link to="/start_ups" className="block px-5 py-5 hover:bg-gray-200 hover:text-orange-400">Academic Partners</Link>
                </li>
                <li className="border-b border-gray-200">
                  <Link to="/students_projects" className="block px-5 py-3 hover:bg-gray-200 hover:text-orange-400">Co-operative Partners</Link>
                </li>
                <li className="border-b border-gray-200">
                  <Link to="/students_projects" className="block px-5 py-3 hover:bg-gray-200 hover:text-orange-400">IP Supporters</Link>
                </li>
                <li className="border-b border-gray-200">
                  <Link to="/students_projects" className="block px-5 py-3 hover:bg-gray-200 hover:text-orange-400">Networking Partners</Link>
                </li>
                <li className="border-b border-gray-200">
                  <Link to="/students_projects" className="block px-5 py-3 hover:bg-gray-200 hover:text-orange-400">Investment Partners</Link>
                </li>
                <li className="border-b border-gray-200">
                  <Link to="/students_projects" className="block px-5 py-3 hover:bg-gray-200 hover:text-orange-400">Meet Our Team</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/events" className="hover:text-orange-400">Events</Link>
          </li>
          <li>
            <Link to="/funding" className="hover:text-orange-800">Funding</Link>
          </li>
          <li>
            <Link to="/tenders" className="hover:text-orange-800">Tenders</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-orange-800">Contact us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
