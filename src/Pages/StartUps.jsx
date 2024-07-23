import React, { useState } from "react";
import startup2 from '../assets/Images/startup2.jpg';
import Ongoing from "../Components/Startups/Ongoing";
import Graduate from "../Components/Startups/Graduate";


const StartUps = () => {
  const [selectedButton, setSelectedButton] = useState('ongoing'); // Default selection

  return (
    <>
      <div className="relative w-full h-[500px] overflow-hidden">
        <img
          src={startup2}
          alt="startup"
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <p className="font-serif italic text-[45px] text-white bg-transparent">Our Startup Portfolios</p>
        </div>
      </div>

      <div className="relative flex items-center mt-2 justify-center">
        <div className="flex flex-col items-center w-full">
          <div className="relative flex space-x-8">
            <button
              className={`text-[34px] font-serif ${selectedButton === 'ongoing' ? 'text-blue-900' : 'text-gray-400'} transition-colors duration-300 relative`}
              onClick={() => setSelectedButton('ongoing')}
            >
              Ongoing
            </button>
            <button
              className={`text-[34px] font-serif ${selectedButton === 'graduate' ? 'text-blue-900' : 'text-gray-400'} transition-colors duration-300 relative`}
              onClick={() => setSelectedButton('graduate')}
            >
              Graduate
            </button>
          </div>
          <div className="relative w-full mt-2">
            {/* Fixed gray line */}
            <hr className="absolute top-0 left-0 w-full h-1 bg-gray-300" />
            {/* Dynamic blue line */}
            <div
              className={`absolute top-0 h-1 bg-blue-900 transition-all duration-300 ${
                selectedButton === 'ongoing' ? 'w-[150px] left-[790px]' : 'w-0'
              } ${selectedButton === 'graduate' ? 'w-[150px] left-[950px]' : 'w-0'}`}
            />
          </div>
        </div>
      </div>

      <div className="mt-4">
        {selectedButton === 'ongoing' && <Ongoing />}
        {selectedButton === 'graduate' && <Graduate />}
      </div>
    </>
  );
};

export default StartUps;
