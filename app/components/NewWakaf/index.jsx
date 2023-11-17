import React from 'react'
import Image from 'next/image'

const NewWakaf = () => {
  return (
    <section className="lg:py-5 px-5 py-5"  id="kegiatan">
      <div className="items-center justify-center py-8 px-4 xl:gap-8 sm:py-16 xl:px-8">
        <h1 className="text-white text-center text-3xl sm:text-4xl font-extrabold ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-200">
            Wakaf Tanah Pondok Pesantren ATHOILLAH
          </span>
        </h1>
      </div>
      <div className="md:grid md:grid-cols-2 gap-10 justify-center items-center py-4 px-4 md:gap-20 ">
        <div className="flex w-full h-auto justify-center rounded-3xl shadow hover:shadow-2xl hover:shadow-amber-700 cursor-pointer text-color-primary hover:text-color-yellow transition-all">
          <Image
            className="px-4 py-4 items-center justify-center rounded-r-lg transition-all"
            src="/images/wakaf/img_wakaf.webp" 
            width={600} 
            height={600} 
            alt="image wakaf"
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">  
          <h2 className="text-xl sm:text-4xl  mb-5 font-extrabold ">
            <span className="text-transparent mt-10 bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">
              SSDG Korwil Tasikmalaya
            </span>
          </h2>
          <p className="text-justify lg:text-md mb-2">
            Berpartisipasi dalam Program Syiar Dalam Gelap untuk tercapainya mendirikan sebuah sarana Pondok Pesantren Athoillah 
          </p>
          <p className="text-base mt-5 lg:text-lg">
            Untuk informasi lebih lanjut bisa menghubungi:
          </p>
          <div className='flex flex-col'>
            <h3 className="flex items-center justify-center mt-2 mb-5 p-5 bg-color-yellow text-color-primary rounded-t-2xl">Gagan Garnawansyah</h3>
              <h3>Fundraising Korwil Tasikmalaya</h3>
              <h3 className='indigo'>+62 819-3050-9090</h3>
              <h3 className="flex items-center justify-center mt-5 mb-5 p-5 bg-color-yellow text-color-primary rounded-b-2xl">Sutrisno</h3>
              <h3>Bendahara Korwil Tasikmalaya</h3>
              <h3 className='indigo'>+62 853-5399-1777</h3>
          </div>
          <p className="text-justify mt-5 mb-5 lg:text-lg">
            Adapun rincian Nominal Voucher Wakaf yang tersedia: 
          </p>
          <div className="grid justify-center items-center md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8 px-4">
            <div className="flex flex-wrap justify-center items-center bg-black rounded-2xl p-4 shadow hover:shadow-2xl shadow-amber-500 hover:shadow-amber-700 cursor-pointer text-color-primary hover:text-color-yellow transition-all">     
              <Image
                className="shadow rounded max-w-full h-auto align-middle border-none"
                src="/images/wakaf/wakaf_10k.webp" 
                width={250} 
                height={250} 
                alt="image voucher"
              />
            </div>
             <div className="flex flex-wrap justify-center items-center bg-black rounded-2xl p-4 shadow hover:shadow-2xl shadow-amber-500 hover:shadow-amber-700 cursor-pointer text-color-primary hover:text-color-yellow transition-all">     
              <Image
                className="shadow rounded max-w-full h-auto align-middle border-none"
                src="/images/wakaf/wakaf_20k.webp" 
                width={250} 
                height={250} 
                alt="image voucher"
              />
            </div>
             <div className="flex flex-wrap justify-center items-center bg-black rounded-2xl p-4 shadow hover:shadow-2xl shadow-amber-500 hover:shadow-amber-700 cursor-pointer text-color-primary hover:text-color-yellow transition-all">     
              <Image
                className="shadow rounded max-w-full h-auto align-middle border-none"
                src="/images/wakaf/wakaf_50k.webp" 
                width={250} 
                height={250} 
                alt="image voucher"
              />
            </div>
             <div className="flex flex-wrap justify-center items-center bg-black rounded-2xl p-4 shadow hover:shadow-2xl shadow-amber-500 hover:shadow-amber-700 cursor-pointer text-color-primary hover:text-color-yellow transition-all">     
              <Image
                className="shadow rounded max-w-full h-auto align-middle border-none"
                src="/images/wakaf/wakaf_100k.webp" 
                width={250} 
                height={250} 
                alt="image voucher"
              />
            </div>
             <div className="flex flex-wrap justify-center items-center bg-black rounded-2xl p-4 shadow hover:shadow-2xl shadow-amber-500 hover:shadow-amber-700 cursor-pointer text-color-primary hover:text-color-yellow transition-all">     
              <Image
                className="shadow rounded max-w-full h-auto align-middle border-none"
                src="/images/wakaf/wakaf_350k.webp" 
                width={250} 
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