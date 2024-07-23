import React from 'react';
import oli from '../../assets/Images/oli.jpg';
import nevar from '../../assets/Images/nevar.jpg';
import futuregurukul from '../../assets/Images/futuregurukul.jpg';
import flowget from '../../assets/Images/flowget.jpg';
import sss from '../../assets/Images/sss.png';

const Graduate = () => {
  return (
    <div className='grid grid-cols-3 gap-8 justify-items-center'>
      <div className='relative flex flex-col h-auto w-[350px] bg-white shadow-lg hover:shadow-2xl rounded-lg p-6 transition-shadow duration-300 ease-in-out'>
        <div className='w-full h-[200px] flex justify-center items-center'>
          <a href="https://nevarsystems.com/" target="_blank" rel="noopener noreferrer">
            <img src={nevar} alt="nevarsys" className="object-contain h-full" />
          </a>
        </div>
        <div className='flex flex-col items-center mt-4'>
          <h1 className='font-bold text-center text-2xl font-serif mb-2'>NEVAR SYSTEMS</h1>
          <p className='text-center text-gray-700'>
          Developing drone products and providing services in the field of technology and software analytics to develop end to end drone solutions. (DaaS) Drone-as-a-Service – Make in India Micro class category autonomous drones for commercial & defence industry..          </p>
          <a href="#" className='text-blue-500 mt-4'>Graduate</a>
        </div>
      </div>
      <div className='relative flex flex-col h-auto w-[350px] bg-white shadow-lg hover:shadow-2xl rounded-lg p-6 transition-shadow duration-300 ease-in-out'>
        <div className='w-full h-[200px] flex justify-center items-center'>
          <a href="https://futuregurukuls.in/" target="_blank" rel="noopener noreferrer">
            <img src={futuregurukul} alt="future_gurukul" className="object-contain h-full" />
          </a>
        </div>
        <div className='flex flex-col items-center mt-4'>
          <h1 className='font-bold text-center text-2xl font-serif mb-2'>FUTURE GURUKULS</h1>
          <p className='text-center text-gray-700'>
          Aiming to impart 21st centuries skills like - coding, Robotics, IoT, Drone , 3D printing etc. to school students, we provide Robotics lab in schools. Offline edutech offering K12 – STEM training to young minds at school level by imparting the skill-set of Robotics, Coding, IoT and creative ability.
          </p><a href="#" className='text-blue-500 mt-4'>Graduate</a>
        </div>
      </div>
      <div className='relative flex flex-col h-auto w-[350px] bg-white shadow-lg hover:shadow-2xl rounded-lg p-6 transition-shadow duration-300 ease-in-out'>
        <div className='w-full h-[200px] flex justify-center items-center'>
          <a href="https://flowgetsolutions.com/" target="_blank" rel="noopener noreferrer">
            <img src={flowget} alt="flowget_sol" className="object-contain h-full" />
          </a>
        </div>
        <div className='flex flex-col items-center mt-4'>
          <h1 className='font-bold text-center text-2xl font-serif mb-2'>FLOWGET SOLUTIONS</h1>
          <p className='text-center text-gray-700'>
          Flowget Solutions Pvt. Ltd. is a Smart Water Solution Provider & Supplier of IoT based Smart Watering Systems for Industries & Residential people. Our Smart Water Metering Solutions are based on Cutting Edge Digital Technology proven to Next Gen Commercial Metering Sources.
          </p>
           <a href="#" className='text-blue-500 mt-4'>Graduate</a>
        </div>
      </div>
      <div className='relative flex flex-col h-auto w-[350px] bg-white shadow-lg hover:shadow-2xl rounded-lg p-6 transition-shadow duration-300 ease-in-out'>
        <div className='w-full h-[200px] flex justify-center items-center'>
          <a href="https://aeroknotz.com/" target="_blank" rel="noopener noreferrer">
            <img src={oli} alt="oli" className="object-contain h-full" />
          </a>
        </div>
        <div className='flex flex-col items-center mt-4'>
          <h1 className='font-bold text-center text-2xl font-serif mb-2'>OPTIMISTIC LIGHT INSIGHT</h1>
          <p className='text-center text-gray-700'>
          Mobility solution : Auto Service aggregrator platform with innovative business model </p>
          <a href="#" className='text-blue-500 mt-4'>Graduate</a>
        </div>
      </div>
      <div className='relative flex flex-col h-auto w-[350px] bg-white shadow-lg hover:shadow-2xl rounded-lg p-6 transition-shadow duration-300 ease-in-out'>
        <div className='w-full h-[200px] flex justify-center items-center'>
          <a href="https://aeroknotz.com/" target="_blank" rel="noopener noreferrer">
            <img src={sss} alt="sss" className="object-contain h-[150px]" />
          </a>
        </div>
        <div className='flex flex-col items-center mt-4'>
          <h1 className='font-bold text-center text-2xl font-serif mb-2'>SHREE SHAKTHI SHAMBHAVI RENEWABLE ENERGY PVT LTD</h1>
          <p className='text-center text-gray-700'>
          Sustainable energy solution provider Solar & Micro wind mills energy. EPC/BOOT– Mobile Lighting Mast, LED Manufacturing. Solution Provider for Alternate Energy: Solar & Wind Energy – Today’s Resources for Better Tomorrow. Professional & Energy Efficient Smart Solar Power, Smart Wind Power System.</p>
          <a href="#" className='text-blue-500 mt-4'>Current</a>
        </div>
      </div>
   
      {/* Repeat the card component here for additional cards */}
    </div>
  );
}

export default Graduate;
