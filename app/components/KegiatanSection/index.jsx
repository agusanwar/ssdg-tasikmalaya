"use client"
import React from 'react'
import Image from 'next/image'
import KegiatanCard from '../KegiatanCard'
import {cardsData} from '../../data'
import FadeIn from '../FadeIn'


const Index =() =>{
  return (
    <section className="text-white lg:py-16 px-5 py-5"  id="kegiatan">
      <div className=" items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <h1 className="text-white text-center text-4xl font-extrabold ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-200">
            Kegiatan Korwil Tasikmalaya
          </span>
        </h1>
      </div>
      <div className="md:grid md:grid-cols-3 mt-5 gap-8 items-center py-8 px-4 md:gap-6 ">
        <Image
          className="px-4 py-2 rounded-lg scale-60 hover:scale-125 ease-in duration-100"
          src="/images/kegiatan/archery.webp" 
          width={500} 
          height={500} 
          alt="image oendaftaran"
        />
        <Image
          className="px-4 py-2 rounded-lg scale-60 hover:scale-125 ease-in duration-100"
          src="/images/kegiatan/ruqiah.webp" 
          width={500} 
          height={500} 
          alt="image oendaftaran"
        />
        <Image
          className="px-4 py-2 rounded-lg scale-60 hover:scale-125 ease-in duration-100"
          src="/images/kegiatan/maggkotas.webp" 
          width={500} 
          height={500} 
          alt="image oendaftaran"
        />
        <Image
          className="px-4 py-2 rounded-lg scale-60 hover:scale-125 ease-in duration-100"
          src="/images/kegiatan/silaturahmi.webp" 
          width={500} 
          height={500} 
          alt="image oendaftaran"
        />
        <Image
          className="px-4 py-2 rounded-lg scale-60 hover:scale-125 ease-in duration-100"
          src="/images/kegiatan/ruqyah.webp" 
          width={500} 
          height={500} 
          alt="image oendaftaran"
        />
        <Image
          className="px-4 py-2 rounded-lg scale-60 hover:scale-125 ease-in duration-100"
          src="/images/kegiatan/pengajian.webp" 
          width={500} 
          height={500} 
          alt="image oendaftaran"
        />
     </div>
    </section>
  )
}

export default Index