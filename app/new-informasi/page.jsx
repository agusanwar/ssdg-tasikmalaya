import React from 'react'
import Image from 'next/image'

const NewInformation = () => {
  return (
    <div className="infomation w-full items-center justify-center py-10 px-5">
      <h1 className="text-white text-xl md:text-4xl text-center font-extrabold gap-y-10">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-200">
          COMING SOON 
        </span>
      </h1>
      <h1 className="text-white text-xl md:text-4xl text-center font-extrabold ">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-200">
       HARLAH SSDG KORWIL TASIKMALAYA
        </span>
      </h1>

      <div className="container gap-y-10 mx-auto py-5">
        <div className="lg:full w-full rounded-2xl overflow-hidden">
        <Image
            className="object-cover object-center h-full w-full" 
            src="/images/new_information/harlah.webp"
            width={500} 
            height={500} 
            alt="image our team"
          />
        </div>
      </div>
        <div className="flex flex-col gap-y-6 mx-auto py-5">
          <div className="flex flex-col md:items-start items-center">
            <h2 className="text-2xl md:text-4xl font-extrabold ">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">
               Informasi Lebih Lanjut
              </span>
            </h2>
          </div>
            <div className="flex flex-col md:items-start items-center">
              <h2 className="text-2xl md:text-4xl font-extrabold ">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-500">
                  Lokasi
                </span>
              </h2>
              <p className="text-base md:text-md">
                Coming Soon
              </p>
            </div>
          <div className="flex flex-col md:items-start items-center">
            <h1 className="text-xl md:text-4xl font-extrabold ">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-500">
                Waktu & Tanggal
              </span>
            </h1>
            <div className="flex-grow">
              <p className="text-base lg:text-md mb-2">
              Coming Soon
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default NewInformation