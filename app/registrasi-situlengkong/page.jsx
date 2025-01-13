"use client"

import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import {collection, addDoc, getDocs} from 'firebase/firestore';
import { validateHeaderValue } from 'http';

const RegistrasiSituLengkong = () => { 
    // handling user
    const [title, setTitle] = useState("Liputan Situ Lengkong Panjalu Ciamis");
    const [anggota, setAnggota] = useState("");
    const [l1, setl1] = useState("");
    const [l2, setl2] = useState("");
    const [l3, setl3] = useState("");
    const [l4, setl4] = useState("");
    const [l5, setl5] = useState("");
    const [l6, setl6] = useState("");
    const [l7, setl7] = useState("");
    const [l8, setl8] = useState("");
    const [l9, setl9] = useState("");
    const [l10, setl10] = useState("");
    const [l11, setl11] = useState("");
    const [l12, setl12] = useState("");
    const [l13, setl13] = useState("");
    const [infaq, setInfaq] = useState("0853 5399 1777");

    // create db
    const dbref = collection(db, "l_lengkong")
    // handling add function
    const add = async ()=>{
        if(anggota.length === 0 || 
            l1.length === 0
          ){
          alert("silahkan lengakapi data anda")
        }
        else{
            try {
                await addDoc(dbref, {
                  title:title, 
                  anggota:anggota, 
                  anggota1:l1, 
                  anggota2:l2, 
                  anggota3:l3, 
                  anggota4:l4, 
                  anggota5:l5, 
                  anggota6:l6, 
                  anggota7:l7, 
                  anggota8:l8, 
                  anggota9:l9, 
                  anggota10:l10, 
                  anggota11:l11, 
                  anggota12:l12, 
                  anggota13:l13, 
                  infaq:infaq,
                  })
                alert("Success, Anda Berhasil Registrasi")
                setTitle("Liputan Situ Lengkong Panjalu Ciamis")
                setAnggota("")
                setl1("")
                setl2("")
                setl3("")
                setl4("")
                setl5("")
                setl6("")
                setl7("")
                setl8("")
                setl8("")
                setl9("")
                setl10("")
                setl11("")
                setl12("")
                setl13("")
                setInfaq("0853 5399 1777")
            } catch (error) {
                alert(error)
            }
        }
    }

    return(                
    <div className="bg-gray-50 font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center py-2 px-2">
        <div className="max-w-md w-full">
          <a href="javascript:void(0)"><img
             src="/images/logo.webp"  alt="logo" className='w-20 mx-auto block' />
          </a>

          <div className="p-8 rounded-2xl bg-white shadow">
            <h2 className="text-gray-800 text-center text-xl font-bold">Web Form Registrasi Situ Lengkong Panjalu Ciamis</h2>
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
                <label className="text-gray-800 text-sm mb-2 block">Asal Korwil*</label>
                <div className="relative flex items-center">
                    <input type="text" 
                      value={anggota}
                      onChange={(e) =>setAnggota(e.target.value)}  
                      required 
                      className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                      placeholder="Input asal Korwil dengan lengkap" 
                    />
                </div>
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">List Nama Peserta (min 1 max 10)</label>
                <div className="relative flex items-center mb-3">
                  <input type="text" 
                    value={l1}
                    onChange={(e) =>setl1(e.target.value)} 
                    required 
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Input nama dengan lengkap" 
                  />
                </div>
               <div className="relative flex items-center mb-3">
                  <input type="text" 
                    value={l2}
                    onChange={(e) =>setl2(e.target.value)} 
                    required 
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Input nama dengan lengkap" 
                  />
                </div>
               <div className="relative flex items-center mb-3">
                  <input type="text" 
                    value={l3}
                    onChange={(e) =>setl3(e.target.value)} 
                    required 
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Input nama dengan lengkap" 
                  />
                </div>
               <div className="relative flex items-center mb-3">
                  <input type="text" 
                    value={l4}
                    onChange={(e) =>setl4(e.target.value)} 
                    required 
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Input nama dengan lengkap" 
                  />
                </div>
               <div className="relative flex items-center mb-3">
                  <input type="text" 
                    value={l5}
                    onChange={(e) =>setl5(e.target.value)} 
                    required 
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Input nama dengan lengkap" 
                  />
                </div>
               <div className="relative flex items-center mb-3">
                  <input type="text" 
                    value={l6}
                    onChange={(e) =>setl6(e.target.value)} 
                    required 
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Input nama dengan lengkap" 
                  />
                </div>
               <div className="relative flex items-center mb-3">
                  <input type="text" 
                    value={l7}
                    onChange={(e) =>setl7(e.target.value)} 
                    required 
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Input nama dengan lengkap" 
                  />
                </div>
               <div className="relative flex items-center mb-3">
                  <input type="text" 
                    value={l8}
                    onChange={(e) =>setl8(e.target.value)} 
                    required 
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Input nama dengan lengkap" 
                  />
                </div>
               <div className="relative flex items-center mb-3">
                  <input type="text" 
                    value={l9}
                    onChange={(e) =>setl9(e.target.value)} 
                    required 
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Input nama dengan lengkap" 
                  />
                </div>
               <div className="relative flex items-center mb-3">
                  <input type="text" 
                    value={l10}
                    onChange={(e) =>setl10(e.target.value)} 
                    required 
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Input nama dengan lengkap" 
                  />
                </div>
               <div className="relative flex items-center mb-3">
                  <input type="text" 
                    value={l11}
                    onChange={(e) =>setl11(e.target.value)} 
                    required 
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Input nama dengan lengkap" 
                  />
                </div>
               <div className="relative flex items-center mb-3">
                  <input type="text" 
                    value={l12}
                    onChange={(e) =>setl12(e.target.value)} 
                    required 
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Input nama dengan lengkap" 
                  />
                </div>
               <div className="relative flex items-center mb-3">
                  <input type="text" 
                    value={l13}
                    onChange={(e) =>setl13(e.target.value)} 
                    required 
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Input nama dengan lengkap" 
                  />
                </div>
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Infaq Via DANA a/n Yogi A Yogaswara</label>
                <div className="relative flex items-center">
                    <input type="text" 
                      value={infaq}
                      readOnly={true}
                      onChange={(e) =>setInfaq(e.target.value)}  
                      required 
                      className="w-full text-gray-800 bg-yellow-300 text-xl border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
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

export default RegistrasiSituLengkong;
