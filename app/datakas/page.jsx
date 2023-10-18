import React from "react";
import Image from "next/image";
import Link from "next/link";

import TableDataKas from '../components/TableDataKas'
import GridKas from '../components/Grid/'


const Datakas = () => {
  return(
    <div className="col-span-7 ml-5 mr-5 place-self-center text-left  sm:text-left "> 
      <Link href="/" className="flex items-center sm:mb-0">
          <h1 className="text-white mt-10 mb-4 text-4xl font-extrabold ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-400">
            SSDG KORWIL TASIKMALAYA
          </span>
          <br></br>
          </h1>
      </Link> 
      <p className="text-white mt-5 mb-4 text-2xl font-bold">
          Data Kas Periode 2023
      </p>
      {/* <TableDataKas/> */}
      <GridKas />
      <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 px-4 mb-10">
        <div className="max-w-sm mt-10 items-center justify-center overflow-hidden shadow-lg  bg-black rounded-2xl p-4 hover:shadow-2xl shadow-amber-500 hover:shadow-amber-300 cursor-pointer hover:text-color-yellow transition-al">
          <Image
            className="rounded p-4  items-center justify-center max-w-full h-auto border-none"
            src="/images/bri.webp" 
            width={200} 
            height={100} 
            alt="image detok"
          />
          <div className="p-4">
            <p className="text-gray-700 text-base">
              Bendahara Korwil Tasikmalaya
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="block w-full text-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Ki Ohang - | SUTRISNO</span>
          </div>
        </div>
        <div className="max-w-sm mt-10 items-center justify-center overflow-hidden shadow-lg  bg-black rounded-2xl p-4 hover:shadow-2xl shadow-amber-500 hover:shadow-amber-300 cursor-pointer text-color-primary hover:text-color-yellow transition-al">
          <Image
            className="rounded p-4 items-center justify-center max-w-full h-auto border-none"
            src="/images/dana.webp" 
            width={200} 
            height={100} 
            alt="image detok"
          />
         <div className="p-4">
            <p className="text-gray-700 text-base">
              Ketua Korwil Tasikmalaya
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 ">
            <span className="block w-full text-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">DIKA PRATAMA</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datakas;