"use client"

import React from "react";
import NewTable from '../components/NewTable'


const DataPesertaSitugede= () => {
  return(
    <div className="col-span-7 bg-[#121212] px-5 py-5 min-h-screen"> 
      <div className="flex items-left justify-left mb-5">
        <h1 className="text-white flex items-center justify-center text-center md:text-4xl sm:text-5xl text-2xl font-extrabold ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-200">
           LIST DATA LIPUTAN SITU GEDE
          </span>
        </h1>
      </div>
      <div className="md:mb-20 md:px-40">
        <NewTable />
      </div>
    </div>
  );
};

export default DataPesertaSitugede


