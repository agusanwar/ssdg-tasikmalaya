import React from "react";
import Image from "next/image";

import TableDataKas from '../components/TableDataKas/index'
const Datakas = () => {
  return(
    <div className="col-span-7 ml-5 mr-5 place-self-center text-left  sm:text-left ">       
      <h1 className="text-white mt-10 mb-4 text-4xl font-extrabold ">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-400">
      SSDG KORWIL TASIKMALAYA
      </span>
      <br></br>
      </h1>
      <p className="text-white mt-5 mb-4 text-2xl font-bold">
          Data Kas Periode 2023
      </p>
      <TableDataKas/>
    </div>
  );
};

export default Datakas;