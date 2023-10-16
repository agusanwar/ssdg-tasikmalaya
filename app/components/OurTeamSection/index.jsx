import React from 'react'
import Image from 'next/image';

const OurTeamSection = () => {
  return (
     <section className="lg:py-5 px-5 py-5"  id="ourteam">
      <div className=" items-center justify-center py-8 px-4 xl:gap-8 sm:py-16 xl:px-8">
        <h1 className="text-white text-center text-4xl font-extrabold ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-200">
            OUR TEAM SSDG KORWIL TASIKMALAYA
          </span>
        </h1>
      </div>
      <div className=" items-center justify-center py-8 px-4 xl:gap-8 sm:py-16 xl:px-8">
        <h1 className="text-white text-center text-4xl font-extrabold ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-200">
          COMING SOON
          </span>
        </h1>
      </div>
      {/* <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 px-4">
        <div className="flex flex-wrap justify-center items-center bg-black rounded-2xl p-4 shadow hover:shadow-2xl shadow-amber-500 hover:shadow-amber-300 cursor-pointer text-color-primary hover:text-color-yellow transition-all">
          <div className="rounded max-w-full h-auto justify-center border-none">
            <Image
              className="rounded max-w-full h-auto border-none"
              src="/images/herbal/herbal_detox.webp" 
              width={500} 
              height={500} 
              alt="image detok"
            />
            <h3 className="font-bold md:text-xl text:2xl px-2 py-2">SDG DETOX</h3>
          </div>
        </div>
      </div> */}
   </section>
  );
}

export default OurTeamSection