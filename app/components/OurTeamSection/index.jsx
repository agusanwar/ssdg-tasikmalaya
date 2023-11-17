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
    <section className="lg:py-5 px-5 py-5 mb-20 " id="ourteam">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-white text-2xl sm:text-4xl text-center font-extrabold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-200">
              Out Team Sahabat Syiar Dalam Gelap Korwil Tasikmalaya
            </span>
          </h1>
        </div>
        <p className='text-center'>ON PROGRESS</p>
        <CoverFlow />
      </div>
    </section>
  );
}

export default OurTeamSection