import React from "react";
import aboutc from '../../assets/Images/aboutc.png';

const AboutUs = () => {
  return (
    <>
      <section className="w-full h-screen flex justify-center items-center px-[50px] py-6">
        <div className="flex space-x-8 w-full h-full">
          <div className="w-[40%] flex justify-center items-center">
            <img src={aboutc} className="h-[550px] w-auto" alt="AIC Logo" />
          </div>
          <div className="w-[60%] h-full flex flex-col justify-center">
            <h1 className="text-6xl font-bold text-sky-950">About Us</h1>
            <p className="text-2xl py-5 font-serif tracking-widest text-justify text-sky-950" style={{ fontFamily: "Times New Roman, serif" }}>
              Atal Incubation Centre - Pondicherry Engineering College
              Foundation (AIC-PECF) is fully supported and funded by Atal
              Innovation Mission (AIM), Niti Aayog, Government of India.
              AIC-PECF was initiated to provide a platform to assist and enable
              young entrepreneurs to initiate startups for the commercial
              exploitation of technologies developed by them. AIC- PECF also
              enables the budding entrepreneurs to showcase and test their
              abilities to run a start-up business in the areas of Electronics
              design and Manufacturing (EDM), Internet of Things (IoT), and
              Unmanned Aerial Vehicle (UAV). The incubation center provides a
              wide range of resources that enable it to: Empower innovators to
              pursue their entrepreneurial goals that improve people’s lives,
              generate employment and drive the economy - Connect start-ups with
              mentor community for guidance
            </p>
            <div className="flex justify-start"> 
              <button className="bg-blue-950 text-white font-bold text-xl px-6 py-3 rounded-xl">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
