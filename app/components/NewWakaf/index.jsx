import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NewWakaf = () => {
  return (
    <section className="wakat  py-8 md:py-12 px-5"  id="kegiatan">
      <div className="items-center justify-center xl:gap-8 sm:py-12">
        <h1 className="text-white text-center text-3xl md:text-4xl font-extrabold ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-200">
            Wakaf Tanah Pondok Pesantren ATHOILLAH
          </span>
        </h1>
      </div>
      <div className="md:grid md:grid-cols-2 md:p-4 justify-center items-center gap-x-8 md:gap-x-8 ">
        <div className="flex w-full h-auto justify-center rounded-3xl shadow hover:shadow-2xl hover:shadow-amber-700 cursor-pointer text-color-primary hover:text-color-yellow transition-all">
          <Image
            className="px-4 py-8 items-center justify-center rounded-r-lg transition-all"
            src="/images/wakaf/img_wakaf.webp" 
            width={700} 
            height={700} 
            alt="image wakaf"
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">  
          <h2 className="text-xl md:text-2xl text-center md:text-start py-4 font-extrabold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">
              SSDG Korwil Tasikmalaya
            </span>
          </h2>
          <p className="text-justify leading-loose lg:text-md ">
            Berpartisipasi dalam Program Syiar Dalam Gelap untuk tercapainya mendirikan sebuah sarana Pondok Pesantren Athoillah 
          </p>
          <p className="text-justify mt-5 lg:text-md">
            Untuk informasi lebih lanjut bisa menghubungi:
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
                  <h2 className="text-white text-lg title-font font-medium">SUTRISNO</h2>
                  <p className="leading-relaxed text-base">Bendahara Korwil Tasikmalaya</p>
                  <Link href="https://api.whatsapp.com/send?phone=+6281323084642" className="mt-3 text-color-yellow hover:text-color-primary inline-flex items-center">
                  <svg className="w-6 h-6 mr-5 text-color-yellow dark:text-color-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                    <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
                  </svg>
                  +62 813-2308-4642
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <p className="text-justify py-10 md:text-lg text-md leading-loose">
            Adapun rincian Nominal Voucher Wakaf yang tersedia: 
          </p>
          <div className="grid justify-center items-center md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-y-8 gap-x-4">
            <div className="flex flex-wrap justify-center items-center bg-black rounded-2xl p-4 shadow hover:shadow-2xl shadow-amber-500 hover:shadow-amber-700 cursor-pointer text-color-primary hover:text-color-yellow transition-all">     
              <Image
                className="shadow rounded max-w-full h-auto align-middle border-none"
                src="/images/wakaf/wakaf_10k.webp" 
                width={300} 
                height={250} 
                alt="image voucher"
              />
            </div>
             <div className="flex flex-wrap justify-center items-center bg-black rounded-2xl p-4 shadow hover:shadow-2xl shadow-amber-500 hover:shadow-amber-700 cursor-pointer text-color-primary hover:text-color-yellow transition-all">     
              <Image
                className="shadow rounded max-w-full h-auto align-middle border-none"
                src="/images/wakaf/wakaf_20k.webp" 
                width={300} 
                height={250} 
                alt="image voucher"
              />
            </div>
             <div className="flex flex-wrap justify-center items-center bg-black rounded-2xl p-4 shadow hover:shadow-2xl shadow-amber-500 hover:shadow-amber-700 cursor-pointer text-color-primary hover:text-color-yellow transition-all">     
              <Image
                className="shadow rounded max-w-full h-auto align-middle border-none"
                src="/images/wakaf/wakaf_50k.webp" 
                width={300} 
                height={250} 
                alt="image voucher"
              />
            </div>
             <div className="flex flex-wrap justify-center items-center bg-black rounded-2xl p-4 shadow hover:shadow-2xl shadow-amber-500 hover:shadow-amber-700 cursor-pointer text-color-primary hover:text-color-yellow transition-all">     
              <Image
                className="shadow rounded max-w-full h-auto align-middle border-none"
                src="/images/wakaf/wakaf_100k.webp" 
                width={300} 
                height={250} 
                alt="image voucher"
              />
            </div>
             <div className="flex flex-wrap justify-center items-center bg-black rounded-2xl p-4 shadow hover:shadow-2xl shadow-amber-500 hover:shadow-amber-700 cursor-pointer text-color-primary hover:text-color-yellow transition-all">     
              <Image
                className="shadow rounded max-w-full h-auto align-middle border-none"
                src="/images/wakaf/wakaf_350k.webp" 
                width={300} 
                height={250} 
                alt="image voucher"
              />
            </div>
          </div>
        </div>
        
      </div>
      
    </section>
  )
}

export default NewWakaf