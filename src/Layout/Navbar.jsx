import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="w-screen flex justify-center items-center py-1 font-latin">
        <ul className="text-[20px] w-full flex justify-around px-[350px]">
        <li>
          <Link to="/" className="hover:text-orange-800">Home</Link>
        </li>
          <li>Portfolio</li>
          <li>Programs</li>
          <li>Partners</li>
          <li>Events</li>
          <li>Funding</li>
          <li>Tenders</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
