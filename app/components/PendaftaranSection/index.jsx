import React from 'react'
import Image from 'next/image'


const Index =() =>{
  return (
    <section className="text-white lg:py-16 px-5 py-5"  id="pendaftaran">
      <div className=" items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <h1 className="text-white text-center text-4xl font-extrabold ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-200">
            Pendaftaran Anggota Korwil Baru
          </span>
        </h1>
      </div>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 ">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <p className="text-base lg:text-lg">
            Mengenai informasi untuk pendaftaran anggota kowril, bisa menghubungi kontak dibawah ini :
          </p>
          <br></br>
          <div className='grid-3'>
            <div className='box'>
              <h3 className="px-6 mt-5 mb-5 py-3 inline-block w-full sm:w-fit rounded mr-4 bg-gradient-to-br from-blue-600 via-blue-200 to-yellow-400 hover:bg-slate-200 text-black">
                Dika Pratama
              </h3>
              <br></br>
              <h3 >Ketua Korwil Tasikmalaya</h3>
              <h3 className='indigo'>+62 819-3050-9090</h3>
            </div>
            <br></br>
            <div className='box'>
              <h3 className="px-6  mt-5 mb-5 py-3 inline-block w-full sm:w-fit rounded mr-4 bg-gradient-to-br from-blue-600 via-blue-200 to-yellow-400 hover:bg-slate-200 text-black">Yogi A Yogaswara</h3>
              <br></br>
              <h3>Kaderisasi Korwil Tasikmalaya</h3>
              <h3 className='indigo'>+62 853-5399-1777</h3>
            </div>
          </div>
        </div>
        <Image
          className="px-4 py-2 rounded-lg scale-60 hover:scale-125 ease-in duration-100"
          src="/images/img_pendaftaran1.webp" 
          width={500}
          height={500} 
          alt="image pendaftaran"
        />
     </div>
     <div className="md:grid md:grid-cols-2 mt-5 gap-8 items-center py-8 px-4 xl:gap-16 ">
        <Image
          className="px-4 py-2 rounded-lg scale-60 hover:scale-125 ease-in duration-100"
          src="/images/img_pendaftaran2.webp" 
          width={500} 
          height={500} 
          alt="image oendaftaran"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">  
          <h2 className="text-4xl mb-5 font-extrabold ">
            <span className="text-transparent mt-10 bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">
              Syiar Dalam Gelap
            </span>
          </h2>
          <h1 className="text-4xl mb-2 font-extrabold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-500">
              Visi 
            </span>
          </h1>
          <p className="text-base lg:text-lg">
            Membentuk kepribadian muslim yang kuat dalam Iman, Ilmu dan Amal.
          </p>
          <h1 className="text-4xl mb-2 mt-5 font-extrabold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-600">
              Misi 
            </span>
          </h1>
          <p className="text-base mb-2 lg:text-lg">
            1. Memberikan pemahaman tentang makhluk ghoib dan eksistensinya
          </p>
          <p className="text-base lg:text-lg">
            2. Memberikan pelajaran tentang kebenaran dan kebaikan & berdasarkan tuntunan Rasulullah SAW
          </p>
        </div>
     </div>
    </section>
  )
}

export default Index