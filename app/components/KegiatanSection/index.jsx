"use client"
import React from "react"
import Image from "next/image"

const KegiatanSection =() =>{
  return (
    <section className="py-12"  id="kegiatan">
      <div className="items-center justify-center py-8 px-4 xl:gap-8 sm:py-16 xl:px-8">
        <h1 className="text-white text-center text-3xl sm:text-4xl font-extrabold ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-200">
            Kegiatan Korwil Tasikmalaya
          </span>
        </h1>
      </div>
      <div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 px-4 ">
          <div className="flex flex-wrap justify-center cursor-pointer items-center bg-neutral-900 rounded-2xl p-4 shadow hover:shadow-2xl hover:shadow-indigo-700 text-color-primary hover:text-color-yellow transition-all">
            <div className="shadow-lg rounded max-w-full h-auto border-none">
              <Image
                className="shadow rounded w-full h-auto border-none"
                src="/images/kegiatan/pengajian-m1-3.webp" 
                width={350} 
                height={350} 
                alt="image pengajian"
              />
              <h3 className="font-bold md:text-xl text:2xl mt-10">Pengajian Kitab dan Al Quran</h3>
              <p className="font-regular text-gray-400 md:text-md text:sm mt-5 mb-5">Setiap Jumat Malam, di Minggu 1 dan 3 Di Mesjid An-ni`mah</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center cursor-pointer items-center bg-neutral-900 rounded-2xl p-4 shadow hover:shadow-2xl hover:shadow-indigo-700 text-color-primary hover:text-color-yellow transition-all">
            <div className="shadow-lg rounded max-w-full h-auto border-none">
              <Image
                className="shadow rounded w-full h-auto border-none"
                src="/images/kegiatan/pengajian-m2-4.webp" 
                width={350} 
                height={350} 
                alt="image pengajian"
              />
              <h3 className="font-bold md:text-xl text:2xl mt-10">Pengajian Kitab dan Yasin</h3>
              <p className="font-regular text-gray-400 md:text-md text:sm mt-5 mb-5">Setiap kamis Malam, di Minggu 2 dan 4 Di Basecamp-Cikurubuk</p>
            </div>
          </div>   
         <div className="flex flex-wrap justify-center cursor-pointer items-center bg-neutral-900 rounded-2xl p-4 shadow hover:shadow-2xl hover:shadow-indigo-700 text-color-primary hover:text-color-yellow transition-all">
            <div className="shadow-lg rounded max-w-full h-auto border-none">
              <Image
                className="shadow rounded w-full h-auto border-none"
                src="/images/kegiatan/ruqiah.webp" 
                width={350} 
                height={350} 
                alt="image ruqiah"
              />
              <h3 className="font-bold md:text-xl text:2xl mt-10">Pelatihan Ruqyah Syariyyah</h3>
              <p className="font-regular text-gray-400 md:text-md text:sm mt-5 mb-5">Jadwal Masih Mobile</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center cursor-pointer items-center bg-neutral-900 rounded-2xl p-4 shadow hover:shadow-2xl hover:shadow-indigo-700 text-color-primary hover:text-color-yellow transition-all">
            <div className="shadow-lg rounded max-w-full h-auto border-none">
              <Image
                className="shadow rounded w-full h-auto border-none"
                src="/images/kegiatan/silaturahmi.webp" 
                width={350} 
                height={350} 
                alt="image silaturahmi"
              />
              <h3 className="font-bold md:text-xl text:2xl mt-10">Tablig Akbar, Tausyiah, Ruqyah dan Pengobatan</h3>
              <p className="font-regular text-gray-400 md:text-md text:sm mt-5 mb-5">Success in 28-11-2023</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center cursor-pointer items-center bg-neutral-900 rounded-2xl p-4 shadow hover:shadow-2xl hover:shadow-indigo-700 text-color-primary hover:text-color-yellow transition-all">
            <div className="shadow-lg rounded max-w-full h-auto border-none">
              <Image
                className="shadow rounded w-full h-auto border-none"
                src="/images/kegiatan/maggkotas.webp" 
                width={350} 
                height={350} 
                alt="image maggkotas"
              />
              <h3 className="font-bold md:text-xl text:2xl mt-10">Pelatihan Budidaya Maggot</h3>
              <p className="font-regular text-gray-400 md:text-md text:sm mt-5 mb-5">Coming Soon</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center cursor-pointer items-center bg-neutral-900 rounded-2xl p-4 shadow hover:shadow-2xl hover:shadow-indigo-700 text-color-primary hover:text-color-yellow transition-all">
            <div className="shadow-lg rounded max-w-full h-auto border-none">
              <Image
                className="shadow rounded w-full h-auto border-none"
                src="/images/kegiatan/archery.webp" 
                width={350} 
                height={350} 
                alt="image archery"
              />
              <h3 className="font-bold md:text-xl text:2xl mt-10">Tasikmalaya Archery</h3>
              <p className="font-regular text-gray-400 md:text-md text:sm mt-5 mb-5">Coming Soon</p>
            </div>
          </div> 
        </div>
      </div>
    </section>
  )
}

export default KegiatanSection;