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
        {/* <div className="flex flex-wrap -m-2">
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
              <Image 
                alt="team" 
                height={80} 
                width={80} 
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" 
                 src="https://dummyimage.com/80x80"
                />
              <div className="flex-grow">
                <h3 className="text-white title-font font-medium">DIKA PRATAMA</h3>
                <p className="text-gray-600">Ketua Korwil Tasikmalaya</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
            <Image 
                alt="team" 
                height={80} 
                width={80} 
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" 
                 src="https://dummyimage.com/80x80"
                />
              <div className="flex-grow">
                <h3 className="text-white title-font font-medium">SUTRISNO</h3>
                <p className="text-gray-600">Bendahara Korwil Tasikmalaya</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
            <Image 
                alt="team" 
                height={80} 
                width={80} 
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" 
                src="https://dummyimage.com/80x80"
                />
              <div className="flex-grow">
                <h3 className="text-white title-font font-medium">Oskar Blinde</h3>
                <p className="text-gray-600">Founder</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
            <Image 
                alt="team" 
                height={80} 
                width={80} 
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" 
                 src="https://dummyimage.com/80x80"
                />
              <div className="flex-grow">
                <h3 className="text-white title-font font-medium">John Doe</h3>
                <p className="text-gray-600">DevOps</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
            <Image 
                alt="team" 
                height={80} 
                width={80} 
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" 
                 src="https://dummyimage.com/80x80"
                />
              <div className="flex-grow">
                <h3 className="text-white title-font font-medium">Martin Eden</h3>
                <p className="text-gray-600">Software Engineer</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
            <Image 
                alt="team" 
                height={80} 
                width={80} 
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" 
                 src="https://dummyimage.com/80x80"
                />
              <div className="flex-grow">
                <h3 className="text-white title-font font-medium">Boris Kitua</h3>
                <p className="text-gray-600">UX Researcher</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
            <Image 
                alt="team" 
                height={80} 
                width={80} 
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" 
                 src="https://dummyimage.com/80x80"
                />
              <div className="flex-grow">
                <h3 className="text-white title-font font-medium">Atticus Finch</h3>
                <p className="text-gray-600">QA Engineer</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
            <Image 
                alt="team" 
                height={80} 
                width={80} 
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" 
                 src="https://dummyimage.com/80x80"
                />
              <div className="flex-grow">
                <h3 className="text-white title-font font-medium">Alper Kamu</h3>
                <p className="text-gray-600">System</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
            <Image 
                alt="team" 
                height={80} 
                width={80} 
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" 
                src="https://dummyimage.com/80x80"
                />
              <div className="flex-grow">
                <h3 className="text-white title-font font-sm">Rodrigo Monchi</h3>
                <p className="text-gray-600">Product Manager</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default OurTeamSection