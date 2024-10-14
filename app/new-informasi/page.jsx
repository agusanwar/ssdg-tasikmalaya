import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NewInformation = () => {

  
  return (
    <div className="infomation w-full items-center justify-center py-10 px-10">  
      <h1 className="text-white text-xl md:text-4xl text-center font-extrabold ">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-200">
       LIPUTAN SITU LENGKONG, PANJALU CIAMIS
        </span>
      </h1>
      <div className="md:grid md:grid-cols-2 md:p-4 gap-x-8 md:gap-x-8 ">
        <div className="flex w-full h-auto justify-center rounded-3xl shadow hover:shadow-2xl hover:shadow-amber-700 cursor-pointer text-color-primary hover:text-color-yellow transition-all">
          <Image
            className="px-4 py-8 items-center justify-center rounded-r-lg transition-all"
            src="/images/new_information/panjalu.webp" 
            width={700} 
            height={700} 
            alt="image wakaf"
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">  
          <h2 className="text-xl md:text-2xl text-center md:text-start py-4 font-extrabold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">
              INFORMATION
             </span>
          </h2>
          <p className="text-justify lg:text-md ">
           Kegiatan SDG di Korwil Tasikmalaya pada kesempatan ini, melakukan kegiatan liputan di Situ Lengkong Panjalu Ciamis.
          </p>
          <p className="text-justify mt-5 lg:text-md">
            Adapun untuk informasi lebih lanjut bisa menghubungi:
          </p>
          <div className='flex flex-col'>
           <div className="py-4 md:w-full">
            <div className="flex items-center mx-auto sm:flex-row flex-col">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-color-yellow bg-gray-800 flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
                </div>
                <div className="flex-grow md:text-left text-center mt-6 md:mt-0 leading-loose">
                  <h2 className="text-white text-lg title-font font-medium">-</h2>
                  <p className="leading-relaxed text-base">Pendaftaran Peserta</p>
                  <Link href="https://api.whatsapp.com/send?phone=+6281323084642" className="mt-3 text-color-yellow hover:text-color-primary inline-flex items-center">
                  <svg className="w-6 h-6 mr-5 text-color-yellow dark:text-color-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                    <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
                  </svg>
                  -
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
           <div className="py-4 md:w-full">
            <div className="flex items-center mx-auto sm:flex-row flex-col">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-color-yellow bg-gray-800 flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
                </div>
                <div className="flex-grow md:text-left text-center mt-6 md:mt-0 leading-loose">
                  <h2 className="text-white text-lg title-font font-medium">-</h2>
                  <p className="leading-relaxed text-base">Informasi Pendaftaran</p>
                  <Link href="https://api.whatsapp.com/send?phone=+6281323084642" className="mt-3 text-color-yellow hover:text-color-primary inline-flex items-center">
                  <svg className="w-6 h-6 mr-5 text-color-yellow dark:text-color-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                    <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
                  </svg>
                 -
                  </Link>
                </div>
              </div>
            </div>
          </div>
            <h2 className="text-xl md:text-2xl text-center md:text-start py-4 font-extrabold ">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">
                REGISTRASI
              </span>
            </h2>
          <div className="mt-4 md:mt-2 text-left flex flex-col h-full">  
            <p className="text-justify lg:text-md">
              Untuk Link Registrasi LIPUTAN PANJALU SITU LENGKONG CIAMIS, Silahkan isi DATA diri dengan lengkap.
            </p>
            <p className="text-justify mt-4 lg:text-md">
            link: <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSc0HG-Oa4rNKMkqoxngFj0KXI1VjCwJIFvLZ15Kfo86Xl4oEg/viewform?usp=sf_link"} className="mr-12 text-blue-600  underline hover:text-amber-500 transition-all">G-form Registrasi Liputan</Link>
            </p>
          </div>
          <h2 className="text-xl md:text-2xl text-center md:text-start mt-4 py-4 font-extrabold ">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">
                INCLUDE
              </span>
            </h2>
            <p className="text-justify mb-6 md:text-lg text-md">
              Adapun Include Yang akan didapatkan oleh peserta pada Liputan Situ Lengkong Panjalu Ciamis: 
            </p>
          <div className="grid justify-center items-center md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-y-4  gap-x-4">
          
            <div className="flex flex-wrap justify-center items-center bg-black rounded-2xl p-4 shadow hover:shadow-2xl shadow-amber-500 hover:shadow-amber-700 cursor-pointer text-color-primary hover:text-color-yellow transition-all">     
              <p className="text-right mb-5 md:text-lg text-md leading-loose">
                1. Kartu Access Peserta
              </p>
              <Image
                className="shadow rounded max-w-full h-auto align-middle border-none"
                src="/images/new_information/id_access.webp" 
                width={300} 
                height={250} 
                alt="image voucher"
              />
            </div>
             <div className="flex flex-wrap justify-center items-center bg-black rounded-2xl p-4 shadow hover:shadow-2xl shadow-amber-500 hover:shadow-amber-700 cursor-pointer text-color-primary hover:text-color-yellow transition-all">     
               <p className="text-justify mb-5 md:text-lg text-md leading-loose">
                2. 1 X Coffee Break 
              </p>
              <Image
                className="shadow rounded max-w-full h-auto align-middle border-none mb-10" 
                src="/images/new_information/coffee_break.webp" 
                width={300} 
                height={250} 
                alt="image voucher"
              />
            </div>
            
          </div>
        </div>
        
      </div>
       
    </div>
  )
}

export default NewInformation