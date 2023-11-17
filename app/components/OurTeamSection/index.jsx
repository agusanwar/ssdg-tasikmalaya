"use client"

import React from 'react'
import { useState, useEffect } from 'react';


import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const url = 'https://fakestoreapi.com/products';

const OurTeamSection = () => {
  const [products, setProducts] = useState([]);

  const getProductsFromBackend = async () => {
    const data = await fetch(url);

    const products = await data.json();

    setProducts(products);
  };

  useEffect(() => {
    getProductsFromBackend();
  }, []);


  return (
     <section className="lg:py-5 px-5 py-5 mb-20 " id="ourteam">
      <div className=" items-center justify-center py-8 px-4 xl:gap-8 sm:py-16 xl:px-8">
        <h1 className="text-white text-center text-3xl sm:text-4xl font-extrabold ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-200">
            OUR TEAM SSDG KORWIL TASIKMALAYA
          </span>
        </h1>
      </div>
      <div>
        <h3 className="text-white text-left text-2xl font-md mb-4" >
          In Progress 
        </h3>
       
      </div>
   </section>
  );
}

export default OurTeamSection