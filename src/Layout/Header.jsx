import React from 'react';
import Navbar from "./Navbar";
import aic_logo from '../assets/Images/aic_logo.png';
import niti_logo from '../assets/Images/niti_logo.png';
import ptu_logo from '../assets/Images/ptu_logo.png';

const Header = () => {
  return (
    <>
    <div className="w-full bg-white shadow-lg h-[120px] flex items-center justify-around">
      <img src={aic_logo} alt="AIC Logo" className="w-20 h-auto" />
      <div>
        <h1 className="font-Cursive text-2xl font-bold text-center">Atal Incubation Center</h1>
        <h3 className="text-2xl text-center">PEC Foundation - Puducherry Technology University</h3>
      </div>
      <div className="flex space-x-2">
        <img src={niti_logo} alt="NITI Logo" className="w-40 h-auto px-2" /> {/* Increased width */}
        <img src={ptu_logo} alt="PTU Logo" className="w-20 h-auto" />
      </div>
    </div>
    <div className='bg-white shadow-inner w-full'>
    <Navbar />
    </div>
   
    </>
  );
};

export default Header;
