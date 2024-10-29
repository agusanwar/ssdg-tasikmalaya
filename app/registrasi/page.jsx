"use client"

import React, { useState } from 'react'
import { db } from '../firebase';
import {collection, addDoc} from 'firebase/firestore';
const Registrasi = () => { 
    // handling user
    const [name, setName] = useState("");
    const [alamat, setAlamat] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    // create db
    const dbref = collection(db, "registrasi")
    // handling add function
    const add = async ()=>{
        if(name.length === 0 || email.length === 0 || phone.length === 0){
          
        }
        else{
            try {
                await addDoc(dbref, {name:name, email:email, phone:phone, alamat:alamat})
                alert("succeess add data")
                setName("")
                setEmail("")
                setPhone("")
                setAlamat("")
            } catch (error) {
                alert(error)
            }
        }
    }
    return(                
    <div className="bg-gray-50 font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center py-4 px-4">
        <div className="max-w-md w-full">
          <a href="javascript:void(0)"><img
             src="/images/logo.webp"  alt="logo" className='w-20 mx-auto block' />
          </a>

          <div className="p-8 rounded-2xl bg-white shadow">
            <h2 className="text-gray-800 text-center text-2xl font-bold">Form Registrasi</h2>
            <form className="mt-8 space-y-4">
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Nama Peserta</label>
                <div className="relative flex items-center">
                    <input type="text" 
                        value={name}
                        onChange={(e) =>setName(e.target.value)} 
                        required 
                        className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                         placeholder="Enter nama" 
                    />
                </div>
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Nama Email</label>
                <div className="relative flex items-center">
                    <input type="text" 
                      value={email}
                      onChange={(e) =>setEmail(e.target.value)}
                        required 
                        className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                         placeholder="Enter email" 
                    />
                </div>
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Nomor Handphone</label>
                <div className="relative flex items-center">
                    <input type="text" 
                       value={phone}
                       onChange={(e) =>setPhone(e.target.value)}  
                        required 
                        className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                         placeholder="Enter no handphone" 
                    />
                </div>
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Alamat</label>
                <div className="relative flex items-center">
                    <input type="text" 
                       value={alamat}
                       onChange={(e) =>setAlamat(e.target.value)}  
                        required 
                        className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                         placeholder="Enter alamat" 
                    />
                </div>
              </div>

              <div className="!mt-8">
                <button
                   type="submit" 
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

export default Registrasi;
