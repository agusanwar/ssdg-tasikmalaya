import React from 'react'
import Image from 'next/image';

const HerbalSection = () => {
  return (
    <section className="lg:py-5 px-5 py-5 mb-20"  id="herbal">
      <div className=" items-center justify-center py-8 px-4 xl:gap-8 sm:py-16 xl:px-8">
        <h1 className="text-white text-center text-4xl font-extrabold ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-200">
            Penjualan Product Herbal Syiar Dalam Gelap
          </span>
        </h1>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 px-4">
        <div className="flex flex-wrap justify-center items-center bg-black rounded-2xl p-4 shadow hover:shadow-2xl shadow-amber-500 hover:shadow-amber-700 cursor-pointer text-color-primary hover:text-color-yellow transition-all">
          <div className="rounded max-w-full h-auto justify-center border-none">
            <Image
              className="rounded max-w-full h-auto border-none"
              src="/images/herbal/herbal_detox.webp" 
              width={500} 
              height={500} 
              alt="image detok"
            />
            <h3 className="font-2xl md:text-xl text:2xl px-2 py-2">SDG DETOX</h3>
          </div>
        </div>
        <div className="flex flex-wrap justify-centeritems-start bg-black rounded-xl p-4 shadow hover:shadow-2xl shadow-amber-500 hover:shadow-amber-700 cursor-pointer text-color-primary hover:text-color-yellow transition-all">
          <div className="rounded max-w-full h-auto justify-centeritems-start border-none">
            <Image
              className="shadow rounded max-w-full h-auto align-middle border-none"
              src="/images/herbal/herbal_bidara.webp" 
              width={500} 
              height={500} 
              alt="image bidara"
            />
            <h3 className="font-2xl md:text-xl text:2xl px-2 py-2">SDG BIDARA</h3>
          </div>
        </div>
        <div className="flex flex-wrap justify-centeritems-start bg-black rounded-xl p-4 shadow hover:shadow-2xl shadow-amber-500 hover:shadow-amber-700 cursor-pointer text-color-primary hover:text-color-yellow transition-all">
          <div className="rounded max-w-full h-auto justify-centeritems-start border-none">
            <Image
              className="shadow rounded max-w-full h-auto align-middle border-none"
              src="/images/herbal/herbal_susu.webp" 
              width={500} 
              height={500} 
              alt="image kopi"
            />
            <h3 className="font-2xl md:text-xl text:2xl px-2 py-2">SDG SUSU KAMBING</h3>
          </div>
        </div>
        <div className="flex flex-wrap justify-centeritems-start bg-black rounded-xl p-4 shadow hover:shadow-2xl shadow-amber-500 hover:shadow-amber-700 cursor-pointer text-color-primary hover:text-color-yellow transition-all">
          <div className="rounded max-w-full h-auto justify-centeritems-start border-none">
            <Image
              className="shadow rounded max-w-full h-auto align-middle border-none"
              src="/images/herbal/herbal_kopi.webp" 
              width={500} 
              height={500} 
              alt="image kopi"
            />
            <h3 className="font-2xl md:text-xl text:2xl px-2 py-2">SDG KOPI HABBAT</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HerbalSection;