"use client"
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Index = ()=> {
    return(
      <section className="lg:py-16">
        <div className="grid grid-cols-1 mb-20 mt-10 sm:grid-cols-12 " >
         <div className="col-span-7 place-self-center text-  sm:text-left ">       
              <h1 className="text-white mb-4 text-4xl font-extrabold ">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-400">
                SSDG KORWIL TASIKMALAYA{""}
              </span>
              <br></br>
              <TypeAnimation
                sequence={[
                  "Syiar Dalam Gelap",
                  1000,
                  "M Hakim Bawazier",
                  1000,
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
                  href="/"
                  className="px-6 py-3 text-center inline-block w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-600 via-blue-200 to-yellow-400 hover:bg-slate-200 text-black"
                  >
                    Information
                </Link>
                <Link
                  href="/datakas"
                  className="px-6 mt-5 py-3 text-center inline-block w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-600 via-blue-200 to-yellow-400 hover:bg-slate-200 text-black"
                  >
                    Data Iuran KAS
                </Link>
              </div>
            </div>
            <div className="col-span-5 place-self-center lg:mt-0 ">
              <div className="rounded-full  w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                
                <Image 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
                  src="/images/logo.png" 
                  alt="Image Alt"
                  width={800} 
                  height={800}
                 
                />
              </div>
         </div>
        </div>
        <br></br>
        <br></br>
      </section>
    );
};

export default Index;