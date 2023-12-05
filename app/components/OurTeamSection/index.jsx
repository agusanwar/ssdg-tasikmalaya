"use client"

import Image from 'next/image';
import React from 'react'
import CoverFlow from './swiper'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';
import 'swiper/css/effect-coverflow';
import 'swiper/css/mousewheel';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/grid';





const OurTeamSection = () => {
  return (
    <section className="footer py-12 px-5 mx-auto" id="ourteam">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-white text-2xl md:text-4xl text-center font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-200">
              Out Team Korwil Tasikmalaya
            </span>
          </h1>
        </div>
        <h2 className="text-xl text-center sm:text-2xl  mb-5 font-extrabold ">
          <span className="text-transparent mt-10 bg-clip-text bg-gradient-to-r from-blue-600 to-blue-100">
          Pengurus Korwil Tasikmalaya
          </span>
        </h2>
        {/* <CoverFlow /> */}
    </section>
  );
}

export default OurTeamSection