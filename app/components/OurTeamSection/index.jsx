"use client"

import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import { Navigation, Pagination, A11y, Autoplay} from 'swiper/modules';
import {motion} from "framer-motion"

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
     <section className="lg:py-5 px-5 py-5 mb-20 "  id="ourteam">
      <div className=" items-center justify-center py-8 px-4 xl:gap-8 sm:py-16 xl:px-8">
        <h1 className="text-white text-center text-4xl font-extrabold ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-200">
            OUR TEAM SSDG KORWIL TASIKMALAYA
          </span>
        </h1>
      </div>
      <div>
        <h3 className="text-white text-left text-2xl font-md mb-4" >
          Anggota Korwil
        </h3>
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          className='sample-slider'
          speed={5000}
          direction='horizontal'
          loop={true}
          observer={true}
          observeParents={true}
          parallax={true}
          effect='slide'
          autoplay={{
            delay:0,
            disableOnInteraction: false
          }}
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={15}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            480: { slidesPerView: 3 },
            740: { slidesPerView: 3 },
            1275: { slidesPerView: 4 },
          }}
        >
          {products.map((item) => (
            <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{  scale: 0.7 }}
            >
            <SwiperSlide
              key={item.id}
              className='grid justify-center items-center bg-black rounded-2xl p-4 shadow  hover:shadow-amber-700 cursor-pointer text-color-primary hover:text-color-yellow transition-all'
            >
              <div className='flex flex-wrap hover:shadow-xl'>
                <div className='rounded-lg h-[50px] w-auto overflow flex justify-center items-center'>
                  {/* <Image
                    className='object-cover rounded-xl max-w-full h-auto justify-center items-center'
                    src={item.image}
                    width={45}
                    height={45}
                    alt={item.title}
                  /> */}
                <div>
                  <h3 className='ml-4 text-color-primary text-md mb-2'>Nama Anggota</h3>
                  <p className='ml-4 text-color-yellow text-xs mb-1'>Phone Number</p>
                  <p className='ml-4 text-color-yellow text-xs'>Area Wilayah</p>
                </div>
                </div>
              </div>
            </SwiperSlide>
            </motion.div>
          ))}
        </Swiper>
      </div>
   </section>
  );
}

export default OurTeamSection