import React from "react";
import home_slide from "../../Data/home_slide";
import {  Carousel, initTWE} from "tw-elements";
initTWE({ Carousel } );


const Slider = () => {
  return (
    <section className="w-full flex justify-center">
      {home_slide.map((ele, index) => {
        return (
        <div>
          <div key={index} className="w-full h-[450px] flex justify-center overflow-hidden">
            <img src={ele.photo} alt={`Slide ${index}`} className="w-full h-full object-cover" />
          </div>
        </div>
        
          
        );
      })}
    </section>
  );
};

export default Slider;
