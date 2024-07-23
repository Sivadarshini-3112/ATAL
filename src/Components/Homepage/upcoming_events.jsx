import React from 'react'
import calendar from '../../assets/Images/calendar.png';
import poster from '../../assets/Images/poster.jpg';

const UpcomingEvents = () => {
  return (
    <>
      <div className='w-full h-auto'>
        <div className='flex justify-center'>
          <div className='px-4'>
            <img src={calendar} alt="cal" className='h-[40px]' />
          </div>
          <div>
            <h1 className="text-5xl font-bold text-sky-950">Upcoming Events</h1>
          </div>
        </div>
        <div className='flex justify-evenly mt-5 hover:transition'>
          <div className="group relative">
            <img src={poster} alt="poster" className='w-[500px] h-[900px] group-hover:transition-opacity duration-500 ease-in-out' />
            <div className="absolute inset-0 flex items-end justify-center w-auto h-auto">
              <button className="bg-white text-sky-950 border-sky-950 hover:border-white hover:bg-sky-950 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out w-full h-auto p-3 text-2xl px-5 border-2 rounded-sm">Apply</button>
            </div>
          </div>
          <div className="group relative">
            <img src={poster} alt="poster" className='w-[500px] h-[900px] group-hover:transition-opacity duration-500 ease-in-out' />
            <div className="absolute inset-0 flex items-end justify-center">
            <button className="bg-white text-sky-950 border-sky-950 hover:border-white hover:bg-sky-950 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out w-full h-auto p-3 text-2xl px-5 border-2 rounded-sm">Apply</button>            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpcomingEvents;
