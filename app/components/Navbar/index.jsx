"use client"
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "../../../public/images/logo.png"
import NavLink  from "./navlink"
import Menu from "./menu"

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
    title: "Team",
    path: "#team",
  },
];

const Index = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex justify-between items-center w-full h-full px-10 2xl:px-16">
       <div className="flex items-center w-full h-full px-10 2xl:px-16"> 
       <div className="animate-[wiggle_1s_ease-in-out_infinite]">
       <Image src={logo} alt="/" width={50} height={50} />
        </div>
        <Link
          href={"/"}
          className="text-sm md:text-md text-white font-semibold "
          >
          SSDG TASIKMALAYA
        </Link>
       </div>
         <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div> 
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <Menu links={navLinks} /> : null}
    </nav>

  );
};

export default Index;
