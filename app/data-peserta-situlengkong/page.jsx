"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import TableDataKas from '../components/TableDataKas'
import NewTable from '../components/NewTable'


const DataPesertaSitulengkong = () => {
  return(
    <div className="col-span-7 bg-[#121212] px-5 py-5 min-h-screen"> 
      <Link href="/" className="flex items-center justify-center sm:mb-0">
      <div className="flex items-left justify-left mb-5">
        <h1 className="text-white flex items-center justify-center text-center sm:text-5xl text-4xl font-extrabold ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-200">
           LIST DATA LIPUTAN SITU LENGKONG
          </span>
        </h1>
      </div>
      </Link> 
      <p className="text-white mt-5 mb-4 text-center text-2xl font-bold">
          Data Kas Periode 2023
      </p>
      <div className="md:mb-20 md:px-10 ">
        <NewTable />
      </div>
    </div>
  );
};

export default DataPesertaSitulengkong;


