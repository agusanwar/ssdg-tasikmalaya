"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import TableDataKas from '../components/TableDataKas'
import NewTable from '../components/NewTable'


const DatakasAnggota = () => {
  return(
    <div className="col-span-7 bg-[#121212] px-5 py-5 items-center justify-center"> 
      <Link href="/" className="flex items-center justify-center sm:mb-0">
      <div className="flex items-center justify-center mb-5">
        <h1 className="text-white flex items-center justify-center text-center sm:text-5xl text-4xl font-extrabold ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-200">
           SSDG Korwil Tasikmalaya
          </span>
        </h1>
      </div>
      </Link> 
      <p className="text-white text-center mb-5 text-xl font-bold">
        Metode Pembayaran Iuran KAS Anggota
      </p>
      <div className="relative w-full mx-auto md:px-10 lg:px-10 max-w-7xl">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4">
          <div className="max-w-sm mx-auto justify-center text-center items-center overflow-hidden shadow-lg bg-zinc-900 rounded-2xl p-4 hover:shadow-2x hover:shadow-color-primary cursor-pointer hover:text-color-primary transition-all">
            <Image
              className="p-4 max-w-full h-auto border-none"
              src="/images/bri.webp" 
              width={200} 
              height={100} 
              alt="image bri"
            />
            <p className="text-white text-xl">
            4468 0101 6532 538
            </p>
            <p className="text-white text-xl">
            a/n SUTRISNO
            </p>
            <div className="mt-5">
              <p className="text-white text-base">
                Bendahara Korwil Tasikmalaya
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="block w-full text-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black">Ki Ohang - SUTRISNO</span>
            </div>
          </div>
          <div className="max-w-sm mx-auto justify-center text-center items-center overflow-hidden shadow-lg bg-zinc-900 rounded-2xl p-4 hover:shadow-2x hover:shadow-color-primary cursor-pointer hover:text-color-primary transition-all">
            <Image
              className="p-4 max-w-full h-auto border-none"
              src="/images/dana.webp" 
              width={200} 
              height={100} 
              alt="image dana"
            />
            <p className="text-white text-xl mb-10">
              0819-3050-9090
            </p>
            
            <div className="mt-5 px-5">
              <p className="text-white text-base">
              Ketua Korwil Tasikmalaya
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="block w-full text-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black">DIKA PRATAMA</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-white mt-5 mb-4 text-2xl font-bold">
          Data Kas Periode 2023
      </p>
     <div className="mb-20">
     <NewTable />
     </div>
    </div>
  );
};

export default DatakasAnggota;