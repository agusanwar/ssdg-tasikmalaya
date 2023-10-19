"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion"


const Footer = () => {
  return (   
    <footer className="rounded-lg shadow bg-neutral-900">
      <div className="w-full max-w-screen-xl item mx-auto p-4 md:py-8">
        <div className="sm:flex md:items-center sm:justify-between">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{  scale: 0.9 }}
          >
          <Link href="#" className="flex items-center mb-4 sm:mb-0">
            <Image 
              className="shadow rounded max-w-full h-auto align-middle border-none" 
              src="/images/logo.webp" 
              width={50} 
              height={50}   
              alt="ssdg Logo" 
            />
            <h2 className="text-white text-center text-sm font-extrabold ">
              <span className="text-transparent bg-clip-text bg-gradient-to-r text-2xl from-yellow-600 to-color-indigo">
                SSDG TASIKMALAYA
              </span>
            </h2>
          </Link>
          </motion.div>
          <ul className="flex flex-wrap justify-center items-center mb-5">
            <div className="flex mt-15 items-center justify-between"> 
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{  scale: 0.9 }}
              >
                <Link href="https://www.tiktok.com/@ssdg.tasikmalaya" className="mr-9 mt-4 transition-all flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 48 48" 
                  width="20px" 
                  height="20px"
                  >
                  <path fill="#3dd9eb" d="M20,37c2.761,0,5-2.239,5-5v-1v-1V6.07h5.208c-0.031-0.14-0.072-0.276-0.097-0.419H30.11 c-0.044-0.248-0.076-0.495-0.099-0.746V4.07H23V28v1v1c0,2.761-2.239,5-5,5c-0.864,0-1.665-0.239-2.375-0.625 C16.473,35.931,18.103,37,20,37z"/>
                  <path fill="#f55376" d="M33.718,11.407c-0.797-1.094-1.364-2.367-1.607-3.756H32.11c-0.044-0.248-0.076-0.495-0.099-0.746 V6.07h-1.803C30.699,8.252,31.969,10.132,33.718,11.407z"
                  />
                  <path fill="#f55376" d="M18,25c-2.761,0-5,2.239-5,5c0,1.897,1.069,3.527,2.625,4.375C15.239,33.665,15,32.864,15,32 c0-2.761,2.239-5,5-5c0.343,0,0.677,0.035,1,0.101v-7.05C20.669,20.023,20.338,20,20,20s-0.669,0.023-1,0.05v5.05 C18.677,25.035,18.343,25,18,25z"/>
                  <path fill="#3dd9eb" d="M36.257,13.783c0.867,0.541,1.819,0.908,2.806,1.131v-0.376v-0.002v-1.381 c-1.7,0.003-3.364-0.473-4.806-1.373c-0.186-0.116-0.361-0.247-0.538-0.376C34.406,12.351,35.263,13.163,36.257,13.783z"/>
                  <path fill="#3dd9eb" d="M19,20.05v-2C18.669,18.023,18.338,18,18,18c-6.627,0-12,5.373-12,12 c0,3.824,1.795,7.222,4.581,9.419C8.969,37.377,8,34.804,8,32C8,25.71,12.842,20.56,19,20.05z"/>
                  <path fill="#f55376" d="M39.062,14.914v4.733c-3.375,0-6.501-1.071-9.052-2.894L30.013,30l-0.014-0.018 C29.999,29.988,30,29.994,30,30c0,6.627-5.373,12-12,12c-2.804,0-5.377-0.969-7.419-2.581C12.778,42.205,16.176,44,20,44 c6.627,0,12-5.373,12-12c0-0.006-0.001-0.012-0.001-0.018L32.013,32l-0.002-13.248c2.551,1.823,5.677,2.894,9.052,2.894v-5.108 v-0.002v-1.381C40.385,15.157,39.717,15.061,39.062,14.914z"
                  />
                  <path fill="#2100c4" d="M30,30c0-0.006-0.001-0.012-0.001-0.018L30.013,30l-0.002-13.248 c2.551,1.823,5.677,2.894,9.052,2.894v-4.733c-0.987-0.223-1.939-0.59-2.806-1.131c-0.994-0.62-1.851-1.432-2.538-2.376 c-1.75-1.275-3.019-3.155-3.51-5.337H25V30v1v1c0,2.761-2.239,5-5,5c-1.897,0-3.527-1.069-4.375-2.625 C14.069,33.527,13,31.897,13,30c0-2.761,2.239-5,5-5c0.343,0,0.677,0.035,1,0.101v-5.05C12.842,20.56,8,25.71,8,32 c0,2.804,0.969,5.377,2.581,7.419C12.623,41.031,15.196,42,18,42C24.627,42,30,36.627,30,30z"/>
                </svg>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{  scale: 0.9 }}
              >
                <Link href="https://web.facebook.com/ssdg.korwiltasikmalaya" className="mr-9 mt-4 flex items-center transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"  
                  viewBox="0 0 48 48" width="20px" height="20px">
                  <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#2aa4f4"/><stop offset="1" stopColor="#007ad9"/>
                  </linearGradient>
                  <path fill="url(#Ld6sqrtcxMyckEl6xeDdMa)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"/>
                  <path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"/>
                </svg>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{  scale: 0.9 }}
              >
                <Link href="https://www.instagram.com/ssdg.korwiltasikmalaya" className="mr-9 mt-4 flex items-center transition-all">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"  
                    viewBox="0 0 48 48" width="20px" height="20px">
                    <radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#fd5"/>
                      <stop offset=".328" stopColor="#ff543f"/><stop offset=".348" stopColor="#fc5245"/>
                      <stop offset=".504" stopColor="#e64771"/><stop offset=".643" stopColor="#d53e91"/>
                      <stop offset=".761" stopColor="#cc39a4"/><stop offset=".841" stopColor="#c837ab"/>
                    </radialGradient>
                    <path fill="url(#yOrnnhliCrdS2gy~4tD8ma)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/>
                    <radialGradient id="yOrnnhliCrdS2gy~4tD8mb" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#4168c9"/><stop offset=".999" stopColor="#4168c9" stopOpacity="0"/>
                    </radialGradient>
                    <path fill="url(#yOrnnhliCrdS2gy~4tD8mb)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/>
                    <path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"/>
                    <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"/>
                    <path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"/>
                </svg>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{  scale: 0.9 }}
              >
                <Link href="!#" className="mt-4 flex items-center transition-all">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"  
                    viewBox="0 0 48 48" 
                    width="20px" 
                    height="20px" 
                    baseProfile="basic"
                    >
                    <linearGradient 
                      id="AraffhWwwEqZfgFEBZFoqa" 
                      x1="18.102" 
                      x2="25.297" 
                      y1="3.244" 
                      y2="34.74" 
                      gradientUnits="userSpaceOnUse"
                    >
                    <stop offset="0" stopColor="#35ab4a"/>
                    <stop offset=".297" stopColor="#31a145"/>
                    <stop offset=".798" stopColor="#288739"/>
                    <stop offset="1" stopColor="#237a33"/>
                    </linearGradient>
                    <path 
                      fill="url(#AraffhWwwEqZfgFEBZFoqa)" 
                      d="M13.488,4.012C10.794,2.508,7.605,3.778,6.45,6.323L24.126,24l9.014-9.014L13.488,4.012z"
                    />
                    <linearGradient 
                      id="AraffhWwwEqZfgFEBZFoqb" x1="19.158" x2="21.194" y1="23.862" y2="66.931" 
                      gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f14e5d"
                      />
                      <stop offset=".499" stopColor="#ea3d4f"/>
                      <stop offset="1" stopColor="#e12138"/>
                    </linearGradient>
                      <path 
                        fill="url(#AraffhWwwEqZfgFEBZFoqb)" 
                        d="M33.14,33.014L24.126,24L6.45,41.677 c1.156,2.546,4.345,3.815,7.038,2.312L33.14,33.014z"/>
                    <linearGradient 
                      id="AraffhWwwEqZfgFEBZFoqc" x1="32.943" x2="36.541" y1="14.899" y2="43.612" 
                      gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ffd844"
                      />
                      <stop offset=".519" stopColor="#ffc63f"/>
                      <stop offset="1" stopColor="#ffb03a"/>
                    </linearGradient>
                    <path
                    fill="url(#AraffhWwwEqZfgFEBZFoqc)" 
                    d="M41.419,28.393 c1.72-0.96,2.58-2.676,2.581-4.393c-0.001-1.717-0.861-3.434-2.581-4.393l-8.279-4.621L24.126,24l9.014,9.014L41.419,28.393z"/>
                    <linearGradient 
                      id="AraffhWwwEqZfgFEBZFoqd" x1="13.853" x2="15.572" y1="5.901" y2="42.811" 
                      gradientUnits="userSpaceOnUse"><stop offset=".003" stopColor="#0090e6"
                    />
                    <stop offset="1" stopColor="#0065a0"/>
                    </linearGradient>
                    <path 
                      fill="url(#AraffhWwwEqZfgFEBZFoqd)" 
                      d="M6.45,6.323C6.168,6.948,6,7.652,6,8.408 v31.179c0,0.761,0.164,1.463,0.45,2.09l17.674-17.68L6.45,6.323z"
                    />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </ul>
        </div>
        <hr className=" flex my-6 border-gray-200 items-center justify-center sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-color-primary sm:text-center">© 2023 SSDGTASIKMALAYA™. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;