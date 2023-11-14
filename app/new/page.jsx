import React from 'react'
import Image from 'next/image'

const NewInformation = () => {
  return (
    <div className="items-center justify-center py-4 px-4 xl:gap-8 sm:py-16 xl:px-16">
      <h1 className="text-white text-2xl sm:text-4xl text-center font-extrabold ">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-200">
          Terbaru Kegiatan Di Bulan November 2023
        </span>
      </h1>
      <div className="flex items-center mt-10 mb-10 justify-center">
        <div className="rounded max-w-full h-auto items-center justify-center border-none">
          <Image
            className="shadow rounded max-w-full h-auto align-middle border-none"
            src="/images/new_information/img_stand_ruqyah.webp" 
            width={200} 
            height={200} 
            alt="image stand ruqyah"
          />
        </div>
      </div>
      
      <div className="md:grid md:grid-cols-2 gap-10 justify-center items-center py-4 px-4 md:gap-20 ">
        <div className="flex w-full h-auto justify-center rounded-3xl shadow hover:shadow-2xl hover:shadow-amber-700 cursor-pointer text-color-primary hover:text-color-yellow transition-all">
          <Image
            className="px-4 py-4 items-center justify-center rounded-r-lg transition-all"
            src="/images/new_information/img_new_ruqyah.webp"
            width={500} 
            height={500} 
            alt="image our team"
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">  
          <h2 className="text-4xl mb-5 font-extrabold ">
            <span className="text-transparent mt-10 bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">
              PENGOBATAN RUQYAH SYAR'IYYAH
            </span>
          </h2>
          <h1 className="text-2xl sm:text-md mb-2 font-extrabold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-200">
              Lokasi
            </span>
          </h1>
          <p className="text-base lg:text-md mb-4">
            Mesjid An-Ni'mah Perum Bumi Endah Residence
          </p>
          <h1 className="text-2xl sm:text-md mb-2 font-extrabold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-500">
              Waktu & Tanggal
            </span>
          </h1>
          <p className="text-base lg:text-md mb-2">
            Senin, 27 November 2023
          </p>
          <h1 className="text-2xl sm:text-md mt-4 mb-2 font-extrabold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-gray-200">
              Informasi 
            </span>
          </h1>
          <p className="text-base mb-2 lg:text-md">
            1. Quota Peserta Terbatas Hanya 50 Orang
          </p>
          <p className="text-base lg:text-lg">
            2. Tersedia Untuk Anggota Korwil Tasikmalaya, Keluarga Anggota Korwil Tasikmalaya, dan Terbuka Quota 15 orang untuk masyarakat Perum Buni Endah Residence
          </p>
        </div>
      </div>
    </div>
  )
}

export default NewInformation