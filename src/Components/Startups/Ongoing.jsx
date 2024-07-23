import React from 'react';
import aero from '../../assets/Images/aero.png';

const Ongoing = () => {
  return (
    <div className='flex flex-wrap justify-around'>
      <div className='relative flex flex-col h-auto w-[350px] bg-white shadow-lg hover:shadow-2xl rounded-lg p-6 transition-shadow duration-300 ease-in-out m-4'>
        <div className='w-full h-[200px] flex justify-center items-center'>
          <a href="https://aeroknotz.com/" target="_blank" rel="noopener noreferrer">
            <img src={aero} alt="aero_knotz" className="object-contain h-full" />
          </a>
        </div>
        <div className='flex flex-col items-center mt-4'>
          <h1 className='font-bold text-center text-2xl font-serif mb-2'>Aero Knotz</h1>
          <p className='text-center text-gray-700'>
            Aero knotz provides courses for those keen on entering the drone world, aiding India's youth employment and tech graduates prospects. Our drone tech courses train students for professional piloting roles, opening doors in industries like infrastructure, film, surveying, and agriculture. Mastery of drone technology gives our students a competitive edge in the job market.
          </p>
          <a href="#" className='text-blue-500 mt-4'>Current</a>
        </div>
      </div>
      {/* Repeat the card component here for additional cards */}
    </div>
  );
}

export default Ongoing;
