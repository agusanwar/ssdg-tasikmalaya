"use client"
import React from "react"
import Image from "next/image"


const Index =() =>{
  return (
    <section className="lg:py-5 px-5 py-5"  id="kegiatan">
      <div className=" items-center justify-center py-8 px-4 xl:gap-8 sm:py-16 xl:px-8">
        <h1 className="text-white text-center text-4xl font-extrabold ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-200">
            Kegiatan Korwil Tasikmalaya
          </span>
        </h1>
      </div>
      <div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 px-4 ">
          <div className="flex flex-wrap justify-center cursor-pointer text-color-primary hover:text-color-yellow transition-all">
            <div className="shadow-lg rounded max-w-full h-auto align-middle border-none">
              <Image
                 className="shadow rounded max-w-full h-auto align-middle border-none"
                src="/images/kegiatan/archery.webp" 
                width={400} 
                height={400} 
                alt="image oendaftaran"
              />
              <h3 className="font-bold md:text-xl text:2xl px-2 py-2">Tasikmalaya Archery</h3>
              <h3 className="font-regular md:text-md text:sm px-2 py-2">Coming Soon</h3>
            </div>
          </div>
          <div className="flex flex-wrap justify-center cursor-pointer text-color-primary hover:text-color-yellow transition-all">
            <div className="shadow-lg rounded max-w-full h-auto align-middle border-none">
              <Image
                className="shadow rounded max-w-full h-auto align-middle border-none"
                src="/images/kegiatan/ruqiah.webp" 
                width={400} 
                height={400} 
                alt="image oendaftaran"
              />
              <h3 className="font-bold md:text-xl text:2xl px-2 py-2">Pelatihan Ruqyah Syariyyah</h3>
              <h3 className="font-regular md:text-md text:sm px-2 py-2">Jadwal Masih Mobile</h3>
            </div>
          </div>   
          <div className="flex flex-wrap justify-center cursor-pointer text-color-primary hover:text-color-yellow transition-all">
            <div className="shadow-lg rounded max-w-full h-auto align-middle border-none">
              <Image
                className="shadow rounded max-w-full h-auto align-middle border-none"
                src="/images/kegiatan/maggkotas.webp" 
                width={400} 
                height={400} 
                alt="image oendaftaran"
              />
              <h3 className="font-bold md:text-xl text:2xl px-2 py-2">Pelatihan Budidaya Maggot</h3>
              <h3 className="font-regular md:text-md text:sm px-2 py-2">Coming Soon</h3>
            </div>
          </div>
          <div  className="flex flex-wrap justify-center cursor-pointer text-color-primary hover:text-color-yellow transition-all">
            <div className="shadow-lg rounded max-w-full h-auto align-middle border-none">
              <Image
                className="shadow rounded max-w-full h-auto align-middle border-none"
                src="/images/kegiatan/ruqyah.webp" 
                width={400} 
                height={400} 
                alt="image oendaftaran"
              />
              <h3 className="font-bold md:text-xl text:2xl px-2 py-2">Pengajian Kitab Riyadhus Shalihin</h3>
              <h3 className="font-regular md:text-md text:sm px-2 py-2">Coming Soon</h3>
            </div>
          </div>
          <div className="flex flex-wrap justify-center cursor-pointer text-color-primary hover:text-color-yellow transition-all">
            <div className="shadow-lg rounded max-w-full h-auto align-middle border-none">
              <Image
                className="shadow rounded max-w-full h-auto align-middle border-none"
                src="/images/kegiatan/silaturahmi.webp" 
                width={500} 
                height={500} 
                alt="image oendaftaran"
              />
              <h3 className="font-bold md:text-xl text:2xl px-2 py-2">Pengajian Al Quran dan Makhraj Huruf</h3>
              <h3 className="font-regular md:text-md text:sm px-2 py-2">Setiap Jumat Malam Di Mesjid An Nimah, Rumah Ki Ohang</h3>
            </div>
          </div>
          <div className="flex flex-wrap justify-center cursor-pointer text-color-primary hover:text-color-yellow transition-all">
            <div className="shadow-lg rounded max-w-full h-auto align-middle border-none">
              <Image
                className="shadow rounded max-w-full h-auto align-middle border-none"
                src="/images/kegiatan/pengajian.webp" 
                width={400} 
                height={400} 
                alt="image oendaftaran"
              />
              <h3 className="font-bold md:text-xl text:2xl px-2 py-2">Pengajian Kitab Riyadhus Shalihin</h3>
              <h3 className="font-regular md:text-md text:sm px-2 py-2">Setiap Sabtu Malam Di Mesjid An Nimah  Rumah Ki Ohang</h3>
            </div>
          </div> 
        </div>
      </div>
    </section>
  )
}

export default Index