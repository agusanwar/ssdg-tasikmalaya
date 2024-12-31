"use client"

import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import {collection, addDoc, getDocs} from 'firebase/firestore';
import { validateHeaderValue } from 'http';

const RegistrasiSitu = () => { 
    // handling user
    const [title, setTitle] = useState("Liputan Situ Lengkong");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [statusAnggota, setStatusAnggota] = useState("");
    const [alamat, setAlamat] = useState("");
    const [infaq, setInfaq] = useState("0853 5399 1777");

    // create db
    const dbref = collection(db, "registrasi_liputan")
    // handling add function
    const add = async ()=>{
        if(name.length === 0 ||  alamat.length === 0 || statusAnggota.length === 0  || phone.length === 0){
          alert("silahkan lengakapi data anda")
        }
        else{
            try {
                await addDoc(dbref, {nama:name, alamat:alamat, title:title, phone:phone, status_anggota:statusAnggota, infaq:infaq})
                alert("Success, Anda berahasil Registrasi")
                setTitle("Liputan Situ Lengkong")
                setName("")
                setAlamat("")
                setPhone("")
                setStatusAnggota("")
                setInfaq("")
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
            <h2 className="text-gray-800 text-center text-xl font-bold">Web Form Registrasi Situ Lengkong Panjalu</h2>
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
                <label className="text-gray-800 text-sm mb-2 block">Alamat Peserta</label>
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
                <label className="text-gray-800 text-sm mb-2 block">Asal Korwil</label>
                <div className="relative flex items-center">
                    <input type="text" 
                      value={statusAnggota}
                      onChange={(e) =>setStatusAnggota(e.target.value)}  
                      required 
                      className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                      placeholder="Enter no asal korwil" 
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
                        className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                        placeholder="Enter alamat" 
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

export default RegistrasiSitu;