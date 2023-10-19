"use client"
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLink  from "./navlink"
import Menu from "./menu"
import {motion} from "framer-motion"

const navLinks = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "Pendaftaran",
    path: "#pendaftaran",
  },
  {
    title: "Kegiatan",
    path: "#kegiatan",
  },
  {
    title: "Product",
    path: "#herbal",
  },
  {
    title: "Team",
    path: "#ourteam",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="w-full fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex justify-between items-center w-full h-full px-10 xl:px-16">
       <div className="flex items-center w-full h-full px-10 2xl:px-16"> 
       <div className="animate-[wiggle_1s_ease-in-out_infinite]">
       <Image 
          className="shadow rounded max-w-full h-auto align-middle border-none"
          src='/images/logo.webp' 
          alt="image hero" 
          width={50} 
          height={50} 
        />
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{  scale: 0.9 }}
          >
          <Link
            href={"/"}
            className="text-sm md:text-md text-white font-semibold hover:text-amber-400"
            >
            SSDG TASIKMALAYA
          </Link>   
        </motion.div>
       </div>
         <div className="mobile-menu block md:hidden rounded border-slate-200 hover:text-amber-400">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div> 
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{  scale: 0.9 }}
                >
                <NavLink href={link.path} title={link.title} />
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <Menu links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
