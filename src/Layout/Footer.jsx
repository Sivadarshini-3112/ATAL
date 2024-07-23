import React from 'react'
import aic_logo from '../assets/Images/aic_logo.png';


const Footer = () => {
  return (
    <>
    <footer className="flex flex-col w-full bg-slate-800 text-white mt-6">
      <div className="flex w-full justify-evenly px-20 py-4">
        <div>
          <h1 className="font-bold text-lg mb-5">AIC-PECF</h1>
          <img src={aic_logo} className="w-[100px]" />
        </div>
        <div>
          <h1 className="font-bold text-lg mb-5">About us</h1>
          <div className="flex flex-col gap-2">
            <p>Vision</p>
            <p>Mission</p>
            <p>Who we are</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-lg mb-5">Quick Link</h1>
          <div className="flex flex-col gap-2">
            <p>Careers</p>
            <p>Apply</p>
            <p>Events</p>
            <p>Join us as apartner</p>
            <p>Became an invester</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-lg mb-5">News</h1>
          <div className="flex flex-col gap-2">
            <p>Daily News</p>
            <p>Press release</p>
            <p>Event News</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-lg mb-5">Contact Us</h1>
          <div className="flex flex-col gap-2">
            <p>name</p>
            <p>ceo@aicpecf.org</p>
            <p>+91 123456789</p>
            <div></div>
          </div>
        </div>
      </div>
      <div className="text-center py-4">
        {" "}
        &#169; 2024 AIC-PECF | All rights reserved
      </div>
    </footer>
  </>
  );
};

export default Footer

