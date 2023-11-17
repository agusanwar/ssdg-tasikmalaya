import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


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
          <p className="text-justify lg:text-lg">
            Mengenai informasi untuk pendaftaran anggota kowril, bisa menghubungi kontak dibawah ini :
          </p>
          <div className='flex flex-col'>
            <div class="p-4 mt-5 md:w-full">
              <div class="flex items-center mx-auto sm:flex-row flex-col">
              <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
                </div>
                <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h2 class="text-white text-lg title-font font-medium mb-3">DIKA PRATAMA</h2>
                  <p class="leading-relaxed text-base">Ketua Korwil Tasikmalaya</p>
                  <Link href="https://api.whatsapp.com/send?phone=+6281930509090" class="mt-3 text-indigo-400 hover:text-color-primary inline-flex items-center">
                  <svg class="w-6 h-6 mr-5 text-indigo-400 dark:text-color-indigo" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                    <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
                  </svg>
                    +62 819-3050-9090
                  </Link>
                </div>
              </div>
            </div>
            <div class="p-4 mt-5 md:w-full">
              <div class="flex items-center mx-auto sm:flex-row flex-col">
                <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                  </div>
                  <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h2 class="text-white text-lg title-font font-medium mb-3">YOGI A YOGASWARA</h2>
                    <p class="leading-relaxed text-base">Kaderisasi Korwil Tasikmalaya</p>
                    <Link href="https://api.whatsapp.com/send?phone=+6285353991777" class="mt-3 text-indigo-400 hover:text-color-primary inline-flex items-center">
                      <svg class="w-6 h-6 mr-5 text-indigo-400 dark:text-color-indigo" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                        <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
                      </svg>
                    +62 853-5399-1777
                    </Link>
                  </div>
                </div>
              </div>
            </div>
        </div>   
        <div className="flex rounded-3xl justify-center items-center w-full h-auto border-none shadow hover:shadow-2xl hover:shadow-amber-700 cursor-pointer text-color-primary hover:text-color-yellow transition-all">
          <Image
             className="px-4 py-4 items-center justify-center rounded-r-lg transition-all"
            src="/images/img_pendaftaran1.webp" 
            width={500} 
            height={500} 
            alt="image pendaptaran"
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
              alt="image our team"
            />
          </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">  
          <h2 className="text-3xl sm:text-4xl  mb-5 font-extrabold ">
            <span className="text-transparent mt-10 bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">
              Syiar Dalam Gelap
            </span>
          </h2>
          <h1 className="text-2xl sm:text-md mb-2 font-extrabold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-500">
              Visi 
            </span>
          </h1>
          <p className="text-justify lg:text-md mb-2">
            Membentuk kepribadian muslim yang kuat dalam Iman, Ilmu dan Amal.
          </p>
          <h1 className="text-2xl sm:text-md mt-4 mb-2 font-extrabold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-600">
              Misi 
            </span>
          </h1>
          <p className="text-justify mb-2 lg:text-md">
            1. Memberikan pemahaman tentang makhluk ghoib dan eksistensinya.
          </p>
          <p className="text-justify lg:text-lg">
            2. Memberikan pelajaran tentang kebenaran dan kebaikan & berdasarkan tuntunan Rasulullah SAW.
          </p>
        </div>
     </div>
    </section>
  )
}

export default PendaftaranSection