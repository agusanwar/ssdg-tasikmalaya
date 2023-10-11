
import React from 'react'
import Image from 'next/image'


const PendaftaranSection =() =>{
  return (
    <section className="text-white lg:py-16" id="pendaftaran">
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
           Mengenai informasi untuk pendaftaran anggota kowril, bisa menghubungi kontak dibawah ini
            </p>
            <br></br>
            <div className='grid-3'>
              <div className='box'>
               <h3 className="px-6 mt-5 mb-5 py-3 inline-block w-full sm:w-fit rounded mr-4 bg-gradient-to-br from-blue-600 via-blue-200 to-yellow-400 hover:bg-slate-200 text-black">
                  Dika Pratama
               </h3>
                <br></br>
                <h3 >Ketua Korwil Tasikmalaya</h3>
                <h2 className='indigo'>+62 819-3050-9090</h2>
              </div>
              <br></br>
              <div className='box'>
                <h3 className="px-6  mt-5 mb-5 py-3 inline-block w-full sm:w-fit rounded mr-4 bg-gradient-to-br from-blue-600 via-blue-200 to-yellow-400 hover:bg-slate-200 text-black">Yogi A Yogaswara</h3>
                <br></br>
                <h3>Kaderisasi Korwil Tasikmalaya</h3>
                <h2 className='indigo'>+62 853-5399-1777</h2>
              </div>
            </div>
        </div>
        <Image
        className="px-4 py-2 rounded-lg scale-60 hover:scale-125 ease-in duration-100"
           src="/images/thumbnail_pendaftaran1.png" width={500} height={500} alt="Image Alt"/>
     </div>
     <div className="md:grid md:grid-cols-2 mt-5 gap-8 items-center py-8 px-4 xl:gap-16 ">
        <Image
          className="px-4 py-2 rounded-lg scale-60 hover:scale-125 ease-in duration-100"
           src="/images/thumbnail_pendaftaran2.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h1 className="text-4xl  font-extrabold ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-500">
            Visi Misi
          </span>
          
          </h1>
          <p className="text-base mt-10 lg:text-lg">
            Mengenai informasi untuk pendaftaran anggota kowril, bisa menghubungi kontak dibawah ini
            </p>
        </div>
     </div>


    </section>
  )
}

export default PendaftaranSection