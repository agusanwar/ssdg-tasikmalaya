"use client"

import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import {collection, addDoc, getDocs} from 'firebase/firestore';
import { validateHeaderValue } from 'http';

const RegistrasiOnspotSituLengkong = () => { 
    // handling user
    const [title, setTitle] = useState("Liputan Situ Lengkong Panjalu Ciamis");
    const [anggota, setAnggota] = useState("");
    const [korwil, setKorwil] = useState("");
    const [nominal, setNominal] = useState("");
    const [infaq, setInfaq] = useState("0853 5399 1777");

    //handling fetch data
    const [fetchData, setFetchData] = useState([]);

    // create db
    const dbref = collection(db, "onspot_l_lengkong")
    // handling add function
    const add = async ()=>{
        if(korwil.length === 0 || 
            anggota.length === 0
          ){
          alert("silahkan lengakapi data anda")
        }
        else{
            try {
                await addDoc(dbref, {
                  title:title, 
                  korwil:korwil,
                  anggota:anggota, 
                  nominal:nominal,
                  infaq:infaq,
                  })
                alert("Success, Anda Berhasil Registrasi")
                setTitle("Liputan Situ Lengkong Panjalu Ciamis")
                setKorwil("")
                setAnggota("")
                setNominal("")
                setInfaq("0853 5399 1777")
            } catch (error) {
                alert(error)
            }
        }
    }

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
    <div className="bg-gray-50 font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center py-2 px-2">
        <div className="max-w-md w-full">
          <a href="javascript:void(0)"><img
             src="/images/logo.webp"  alt="logo" className='w-20 mx-auto block' />
          </a>

          <div className="p-8 rounded-2xl bg-white shadow">
            <h2 className="text-gray-800 text-center text-xl font-bold">Registrasi On the Spot Situ Lengkong Panjalu Ciamis</h2>
            <form className="mt-8 space-y-4">
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">Title</label>
                  <div className="relative flex items-center">
                      <input type="text" 
                      readOnly={true}
                        value={title}
                        onChange={(e) =>setTitle(e.target.value)}
                        required 
                        
                        className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                        placeholder="Enter email" 
                      />
                  </div>
                </div>
                <div>
                  <label className="text-gray-800 font-bold text-sm mb-2 block">Infaq Via DANA a/n Yogi A Yogaswara</label>
                  <div className="relative flex items-center">
                    <input type="text" 
                      value={infaq}
                      readOnly={true}
                      onChange={(e) =>setInfaq(e.target.value)}  
                      required 
                      className="w-full text-gray-800 font-bold bg-yellow-300 text-xl border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    />
                  </div>
                </div>  
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">Nominal Infaq</label>
                  <div className="relative flex items-center">
                      <input type="text" 
                        value={nominal}
                        onChange={(e) =>setNominal(e.target.value)}  
                        required 
                        className="w-full text-gray-800 bg-yellow-300 text-xl border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                      />
                    </div>
                </div>
                <div>
                <label className="text-gray-800 text-sm mb-2 block">Asal Korwil*</label>
                <div className="relative flex items-center">
                    <input type="text" 
                      value={korwil}
                      onChange={(e) =>setKorwil(e.target.value)}  
                      required 
                      className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                      placeholder="Input asal Korwil dengan lengkap" 
                    />
                </div>
                <label className="text-gray-800 text-sm mt-2 mb-2 block">Nama Peserta</label>
                <div className="relative flex items-center">
                    <input type="text" 
                      value={anggota}
                      onChange={(e) =>setAnggota(e.target.value)}  
                      required 
                      className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                      placeholder="Input nama peserta dengan lengkap" 
                    />
                </div>
              </div>
              <div className="!mt-8">
                <button
                  type='button'
                   onClick={add}
                    className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                    >
                 Daftar
                </button>
              </div>
            </form>
          </div>
        </div>
        </div>
    </div>
    )
}

export default RegistrasiOnspotSituLengkong;
