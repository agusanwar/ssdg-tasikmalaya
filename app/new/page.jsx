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

      <div class="container px-5 py-10 mx-auto flex flex-wrap">
        <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-r-2xl overflow-hidden">
        <Image
            class="object-cover object-center h-full w-full" 
            src="/images/new_information/img_new_ruqyah.webp"
            width={500} 
            height={500} 
            alt="image our team"
          />
        </div>
        <div class="flex flex-col flex-wrap lg:py-6 -mb-5 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <h2 className="text-2xl sm:text-4xl mb-5 font-extrabold ">
              <span className="text-transparent mt-10 bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">
                PENGOBATAN RUQYAH SYAR'IYYAH
              </span>
            </h2>
            <div class="flex-grow">
              <h2 className="text-xl sm:text-md mb-2 font-extrabold ">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-200">
                  Lokasi
                </span>
              </h2>
              <p className="text-base lg:text-md mb-4">
                Mesjid An-Ni'mah Perum Bumi Endah Residence
              </p>
            </div>
          </div>
          <div class="flex flex-col mb-5 lg:items-start items-center">
            <h1 className="text-xl sm:text-md mb-2 font-extrabold ">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-500">
                Waktu & Tanggal
              </span>
            </h1>
            <div class="flex-grow">
              <p className="text-base lg:text-md mb-2">
              Senin, 27 November 2023
              </p>
            </div>
          </div>
          <div class="flex flex-col mb-5 lg:items-start items-center">
            <h1 className="text-xl sm:text-md mt-4 mb-2 font-extrabold ">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-gray-200">
                Informasi 
              </span>
            </h1>
            <div class="flex-grow">
              <p className="text-base mb-2 lg:text-md">
                1. Quota Peserta Terbatas Hanya 50 Orang
              </p>
              <p className="text-base lg:text-lg">
                2. Tersedia Untuk Anggota Korwil Tasikmalaya, Keluarga Anggota Korwil Tasikmalaya, dan Terbuka Quota 15 orang untuk masyarakat Perum Buni Endah Residence
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewInformation