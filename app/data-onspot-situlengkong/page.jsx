"use client"

import React from 'react'
import NewTable from '../components/NewTable';


const DataOnspotSituLengkong= () => {
  return(
    <div className="col-span-7 bg-[#121212] px-5 py-5 min-h-screen"> 
      <div className='py-8'>
        <h1 className="text-white text-xl md:text-4xl text-start font-bold mb-6">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-200">
          LIST DATA REGISTRASI ONTHESPOT LIPUTAN SITU LENGKONG
        </span>
        </h1>
      </div>
      <div className="mb-10">
        <NewTable />
      </div>
    </div>
  );
};

export default DataOnspotSituLengkong


