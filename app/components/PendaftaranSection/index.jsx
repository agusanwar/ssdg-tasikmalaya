import React from 'react'
import Image from 'next/image'


const PendaftaranSection =() =>{
  return (
    <section className="text-white p-4"  id="pendaftaran">
      <div className="items-center justify-center py-4 px-4 xl:gap-8 sm:py-16 xl:px-16">
        <h1 className="text-white text-2xl sm:text-4xl text-center font-extrabold ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-200">
            Pendaftaran Anggota Korwil Baru
          </span>
        </h1>
      </div>
      <div className="grid md:grid-cols-2 gap-10 py-4 px-4 md:gap-20 justify-center items-center">
        <div className="mt-4 md:mt-0 flex flex-col h-full">
          <p className="text-base lg:text-lg">
            Mengenai informasi untuk pendaftaran anggota kowril, bisa menghubungi kontak dibawah ini :
          </p>
          <br></br>
          <div className='flex flex-col'>
            <div className='flex-col'>
            <h3 className="flex items-center justify-center p-5 bg-gradient-to-br from-blue-600 via-blue-200 to-yellow-400 hover:bg-color-indigo text-black">Dika Pratama</h3>
              <br></br>
              <h3 >Ketua Korwil Tasikmalaya</h3>
              <h3 className='indigo'>+62 819-3050-9090</h3>
            </div>
            <br></br>
            <div className='flex-col'>
              <h3 className="flex items-center justify-center p-5 bg-gradient-to-br from-blue-600 via-blue-200 to-yellow-400 hover:bg-color-indigo text-black">Yogi A Yogaswara</h3>
              <br></br>
              <h3>Kaderisasi Korwil Tasikmalaya</h3>
              <h3 className='indigo'>+62 853-5399-1777</h3>
            </div>
          </div>
        </div>   
        <div className="flex rounded-3xl justify-center items-center w-full h-auto border-none shadow hover:shadow-2xl hover:shadow-amber-700 cursor-pointer text-color-primary hover:text-color-yellow transition-all">
          <Image
             className="px-4 py-4 items-center justify-center rounded-r-lg transition-all"
            src="/images/img_pendaftaran1.webp" 
            width={500} 
            height={500} 
            alt="image detok"
          />
        </div>
     </div>
     <div className="md:grid md:grid-cols-2 gap-10 justify-center items-center py-4 px-4 md:gap-20 ">
          <div className="flex w-full h-auto justify-center rounded-3xl shadow hover:shadow-2xl hover:shadow-amber-700 cursor-pointer text-color-primary hover:text-color-yellow transition-all">
            <Image
              className="px-4 py-4 items-center justify-center rounded-r-lg transition-all"
              src="/images/img_pendaftaran2.webp" 
              width={500} 
              height={500} 
              alt="image detok"
            />
          </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">  
          <h2 className="text-4xl mb-5 font-extrabold ">
            <span className="text-transparent mt-10 bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">
              Syiar Dalam Gelap
            </span>
          </h2>
          <h1 className="text-2xl sm:text-md mb-2 font-extrabold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-500">
              Visi 
            </span>
          </h1>
          <p className="text-base lg:text-md mb-2">
            Membentuk kepribadian muslim yang kuat dalam Iman, Ilmu dan Amal.
            
          </p>
          <h1 className="text-2xl sm:text-md mt-4 mb-2 font-extrabold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-600">
              Misi 
            </span>
          </h1>
          <p className="text-base mb-2 lg:text-md">
            1. Memberikan pemahaman tentang makhluk ghoib dan eksistensinya.
          </p>
          <p className="text-base lg:text-lg">
            2. Memberikan pelajaran tentang kebenaran dan kebaikan & berdasarkan tuntunan Rasulullah SAW.
          </p>
        </div>
     </div>
    </section>
  )
}

export default PendaftaranSection