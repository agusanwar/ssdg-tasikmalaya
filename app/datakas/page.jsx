import React from "react";
import Image from "next/image";
import Link from "next/link";
import TableDataKas from '../components/TableDataKas'


const Datakas = () => {
  return(
    <div className="col-span-7 ml-5 mr-5 bg-[#121212]  place-self-center text-left sm:text-left "> 
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
      <TableDataKas/>
      <p className="text-white mt-10 mb-4 text-2xl font-bold">
          Pembayaran Iuran KAS
        </p>
      <div className="relative justify-items-center justify-evenly w-full px-4 py-4 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="grid md:grid-cols-2 justify-center text-center items-center sm:grid-cols-1 grid-cols-1 gap-4 px-4">
          <div className="max-w-sm justify-center text-center items-center overflow-hidden shadow-lg bg-zinc-900 rounded-2xl p-4 hover:shadow-2x hover:shadow-amber-700 cursor-pointer hover:text-color-yellow transition-all">
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
          <div className="max-w-sm justify-center text-center items-center overflow-hidden shadow-lg bg-zinc-900 rounded-2xl p-4 hover:shadow-2x hover:shadow-amber-700 cursor-pointer hover:text-color-yellow transition-all">
            <Image
              className="p-4 max-w-full h-auto border-none"
              src="/images/dana.webp" 
              width={200} 
              height={100} 
              alt="image dana"
            />
            <p className="text-white text-xl">
              0819-3050-9090
            </p>
            <div className="mt-5">
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
    </div>
  );
};

export default Datakas;