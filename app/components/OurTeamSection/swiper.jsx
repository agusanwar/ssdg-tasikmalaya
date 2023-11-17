import * as React from 'react';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const photos = [
 {
  img: '/images/logo.webp',
  price: 'image 1',
 },
 {
  img: '/images/logo.webp',
  price: 'image 2',
 },
 {
  img: '/images/logo.webp',
  price: 'image 3',
 },
];
const CoverFlow =() => {
  return (
      <div className="lg:mx-auto max-w-4xl mx-[1rem]">
        <Swiper
          modules={[EffectCoverflow, Pagination]}
          effect={'coverflow'}
          loop={true}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          centeredSlides={true}
          grabCursor={true}
          coverflowEffect={{
            rotate: 0,
            slideShadows: false,
          }}
          className="coverflow"
        >
          {photos.map((p, index) => {
            return (
              <SwiperSlide key={index}>
               <div className="p-5">
                  <div>
                    <div className="h-[200px] cursor-pointer overflow-hidden">
                      <img
                        className="scale-1 hover:scale-[1.1] duration-300"
                        src={p.img}
                        alt=""
                      />
                    </div>
                    <p className="text-center items-center">{p.price}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
  );
}

export default CoverFlow
