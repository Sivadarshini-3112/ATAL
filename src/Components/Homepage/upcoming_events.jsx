import React from 'react'
import calendar from '../../assets/Images/calendar.png';
import poster from '../../assets/Images/poster.jpg';

const UpcomingEvents = () => {
  return (
    <>
    <div className='w-full h-auto'>
        <div className='flex justify-center'>
                <div className='px-4'>
                    <img src = {calendar} alt="cal" className='h-[40px]' />
                </div>
                <div>
                    <h1 className="text-5xl font-bold text-sky-950">Upcoming Events</h1>
                </div>
        </div >
        <div className='flex justify-evenly mt-5 hover:justify-center'>
        <div>
            <img src={poster} alt="poster" className='w-[500px] h-[900px]'/>
        </div>
        <div>
            <img src={poster} alt="poster" className='w-[500px] h-[900px] '/>
        </div>
        </div>
        
    </div>
    </>
  )
}
 
export default UpcomingEvents