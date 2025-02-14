import React from 'react'

const DataAnggota = () => {
  return (
    <section className="anggota -mt-8 px-5 md:px-20">
      <div className="bg-color-indigo py-4 relative rounded-xl items-center justify-center gap-x-10">
        <div className="flex flex-row gap-y-4 gap-x-8 items-center justify-center md:justify-around">
          <div className="flex flex-col md:flex-row gap-x-1 items-center">
            <div className='flex flex-row items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2 md:mr-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
              <p className="text-white text-sm md:text-2xl md:px-2 text-center font-bold">
                119
              </p>
            </div>
            <div>
              <p className="text-white text-sm md:text-2xl text-center font-bold">
              Data Anggota  
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-x-1 items-center">
            <div className='flex flex-row items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2 md:mr-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>  
              <p className="text-white text-sm md:text-2xl md:px-2 text-center font-bold">
                39
              </p>
            </div>
            <div>
              <p className="text-white text-sm md:text-2xl text-center font-bold">
                  Data Fans
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DataAnggota