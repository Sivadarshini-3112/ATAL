import React from "react";
import Slider from "../Components/Homepage/slider";
import AboutUs from "../Components/Homepage/about_us";
import UpcomingEvents from "../Components/Homepage/upcoming_events";


const Home = () => {
  return (
    <>
    <div>
    <Slider />
    </div>
     <div className="w-full h-full items-center transition-transform duration-300 ease-out hover:scale-90">
     <AboutUs />
     </div>
     <div className="w-full h-full items-center">
     <UpcomingEvents />
     </div>

    </>
  );
};

export default Home;
