"use client"


import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import {collection, getDocs} from 'firebase/firestore';


const DataPesertaSitulengkong = () => {
  //handling fetch data
  const [fetchData, setFetchData] = useState([]);

  // create db
  const dbref = collection(db, "l_lengkong");

  // fetching data from database
  useEffect(() =>{
    fetchdata()
  },[])

  //hendling fetch data function
  const fetchdata = async() =>
  {
    const getData = await getDocs(dbref) 
    const snap = getData.docs.map((doc) => ({id:doc.id, ...doc.data()}))
    setFetchData(snap)
  }
  
  return(
    <div className="col-span-7 bg-[#121212] px-5 py-5 min-h-screen"> 
      <div className='py-8'>
        <h1 className="text-white text-xl md:text-4xl text-start font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-200">
          LIST DATA LIPUTAN SITU LENGKONG
          </span>
        </h1>
          <div>
            <div className="grid md:grid-cols-2 item-start sm:grid-cols-2 grid-cols-1 gap-4 px-4">
              {
                fetchData.map((data, i) => {
                  return(
                    
                    <div className="items-start bg-black rounded-2xl py-4 px-4 md:px-4 md:py-4 shadow hover:shadow-2xl shadow-amber-500 hover:shadow-amber-700 cursor-pointer text-color-primary hover:text-color-yellow transition-all" key={i}>  
                      <h1 className="text-black text-lg rounded-xl md:text-2xl text-start font-bold md:font-bold mb-4 md:mb-4 bg-orange-400 p-4">Korwil: {data.anggota}</h1>
                      <h1 className="text-white text-sm md:text-xl text-start font-medium md:mb-2">List Anggota: </h1>
                      <h1 className="text-white text-sm md:text-xl text-start font-medium ml-4">  {data.anggota1}</h1>
                      <h1 className="text-white text-sm md:text-xl text-start font-medium ml-4">  {data.anggota2}</h1>
                      <h1 className="text-white text-sm md:text-xl text-start font-medium ml-4">  {data.anggota3}</h1>
                      <h1 className="text-white text-sm md:text-xl text-start font-medium ml-4">  {data.anggota4}</h1>
                      <h1 className="text-white text-sm md:text-xl text-start font-medium ml-4">  {data.anggota5}</h1>
                      <h1 className="text-white text-sm md:text-xl text-start font-medium ml-4">  {data.anggota6}</h1>
                      <h1 className="text-white text-sm md:text-xl text-start font-medium ml-4">  {data.anggota7}</h1>
                      <h1 className="text-white text-sm md:text-xl text-start font-medium ml-4">  {data.anggota8}</h1>
                      <h1 className="text-white text-sm md:text-xl text-start font-medium ml-4">  {data.anggota9}</h1>
                      <h1 className="text-white text-sm md:text-xl text-start font-medium ml-4">  {data.anggota10}</h1>
                      <h1 className="text-white text-sm md:text-xl text-start font-medium ml-4">  {data.anggota11}</h1>
                      <h1 className="text-white text-sm md:text-xl text-start font-medium ml-4">  {data.anggota12}</h1>
                      <h1 className="text-white text-sm md:text-xl text-start font-medium ml-4">  {data.anggota13}</h1>
                      <h1 className="text-white text-sm md:text-xl text-start font-medium mt-4"> {data.nominal}</h1>
                    </div>
                    
                  )
                })
              }
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataPesertaSitulengkong;


