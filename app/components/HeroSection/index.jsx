"use client"
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const HeroSection = ()=> {
  return(
    <div className='w-full h-screen'>
      <Image
        className='top-0 left-0 w-full h-screen object-cover'
        src="/images/img_hero.webp" 
        alt='hero image'
        width={1000}
        height={1000}
          
      />
      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
          <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>      
            <h1 className="text-white mb-4 text-4xl font-extrabold ">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-400">
                  SSDG KORWIL TASIKMALAYA{""}
              </span>
              <br></br>
              <TypeAnimation
                sequence={[
                "Syiar Dalam Gelap",
                500,
                "M Hakim Bawazier",
                500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-md text-md lg:text-sm mb-6"> 
                Jaga Terus...! Iman, Ilmu & Amal kita
              </p>
            <div>
              <Link
                href="/datakas"
                className="px-4 mt-5 py-3 text-center inline-block w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-700 via-blue-200 to-red-400 hover:bg-color-yellow text-black">
                  Data Iuran KAS
              </Link>
            </div>
          </div>
        </div>
      <br></br>
      <br></br>
    </div>
  );
};

export default HeroSection;