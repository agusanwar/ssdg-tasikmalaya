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
            src="/images/new_information/liputan-situlengkong.webp" 
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
                  <h2 className="text-white text-lg title-font font-medium">Kang Yogi A Yogaswara</h2>
                  <p className="leading-relaxed text-base">Pendaftaran Peserta</p>
                  <Link href="https://api.whatsapp.com/send?phone=+6281323084642" className="mt-3 text-color-yellow hover:text-color-primary inline-flex items-center">
                  <svg className="w-6 h-6 mr-5 text-color-yellow dark:text-color-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                    <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
                  </svg>
                  0853-5399-1777
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
                  <h2 className="text-white text-lg title-font font-medium">Kang Iqbal</h2>
                  <p className="leading-relaxed text-base">Informasi Lebih Lanjut:</p>
                  <Link href="https://api.whatsapp.com/send?phone=+6281323084642" className="mt-3 text-color-yellow hover:text-color-primary inline-flex items-center">
                  <svg className="w-6 h-6 mr-5 text-color-yellow dark:text-color-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                    <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
                  </svg>
                 0813-2788-0229
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
            link: <Link href={"https://ssdg-tasikmalaya.vercel.app/registrasi-situlengkong"} className="mr-12 text-blue-600  underline hover:text-amber-500 transition-all">Web-Form Registrasi Liputan</Link>
            </p>
            <h2 className="text-xl md:text-2xl text-center md:text-start mt-4 py-4 font-extrabold ">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">
                  Catatan 
                </span>
              </h2>
              <p className="text-justify mb-6 md:text-lg text-md">
                1. Untuk Pendaftaran Bisa di Koordinasikan di Ketua Korwil masing-masing.
              </p>
              <p className="text-justify mb-6 md:text-lg text-md">
                2. Tiket Masuk Wisata di Tanggung Masing-masing,
              </p>
              <p className="text-justify mb-6 md:text-lg text-md">
                3. Paniti Tidak Menyediakan Penginapan dan Makan.
              </p>
          </div>
        </div>
      </div>
      <div className='py-12'>
      <h1 className="text-white text-xl md:text-3xl text-start font-bold mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-200">
          Informasi dan Himbauan
          </span>
        </h1>
        <div className="grid md:grid-cols-2 item-start sm:grid-cols-2 grid-cols-1 gap-4 px-4">
          <div>
            <div className="flex flex-wrap justify-center items-start bg-black rounded-2xl py-4 px-4 shadow hover:shadow-2xl shadow-amber-500 hover:shadow-amber-700 cursor-pointer text-color-primary hover:text-color-yellow transition-all">     
              <p className="text-start mb-5 md:text-lg text-md leading-loose">
                Tata Cara Registrasi Liputan
              </p>
              <Image
                className="shadow rounded max-w-full h-auto align-middle border-none"
                src="/images/new_information/flow-chart.webp" 
                width={650} 
                height={450} 
                alt="image voucher"
              />
            </div>
          </div>
          <div>
            <div className="flex flex-wrap justify-center items-start bg-black rounded-2xl p-4 shadow hover:shadow-2xl shadow-amber-500 hover:shadow-amber-700 cursor-pointer text-color-primary hover:text-color-yellow transition-all">     
              <p className="text-start mb-5 md:text-lg text-md leading-loose">
                  Tata Tertib Peserta Liputan
                </p>
              <Image
                className="shadow justify-center items-start rounded max-w-full h-auto align-middle border-none"
                src="/images/new_information/tata-tertib.webp" 
                width={600} 
                height={600} 
                alt="image voucher"
              />
            </div>
          </div>
          </div>
      </div>

      <div className='py-12'>
      <h1 className="text-white text-xl md:text-3xl text-start font-bold mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-200">
          Panitia Liputan Situ Lengkong Panjalu Ciamis
          </span>
        </h1>
        <div className="grid md:grid-cols-2 item-start sm:grid-cols-2 grid-cols-1 gap-4 px-4">
          <div>
              <div className="flex flex-wrap justify-center items-start bg-black rounded-2xl py-4 px-4 shadow hover:shadow-2xl shadow-amber-500 hover:shadow-amber-700 cursor-pointer text-color-primary hover:text-color-yellow transition-all">     
                <p className="text-start mb-5 md:text-lg text-md leading-loose">
                  Panitia Liputan
                </p>
                <Image
                  className="shadow rounded max-w-full h-auto align-middle border-none"
                  src="/images/new_information/panitia-liputan.webp" 
                  width={650} 
                  height={450} 
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