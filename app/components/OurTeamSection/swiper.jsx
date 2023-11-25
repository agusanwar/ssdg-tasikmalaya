import * as React from 'react';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const photos = [
 {
  img: '/ourteam/sutrisno.webp',
  price: 'image 1',
 },
 {
img: '/ourteam/sutrisno.webp',
  price: 'image 2',
 },
 {
img: '/ourteam/sutrisno.webp',
  price: 'image 3',
 },
 {
img: '/ourteam/sutrisno.webp',
  price: 'image 3',
 },
 {
img: '/ourteam/sutrisno.webp',
  price: 'image 3',
 },
 {
img: '/ourteam/sutrisno.webp',
  price: 'image 3',
 },
 {
img: '/ourteam/sutrisno.webp',
  price: 'image 3',
 },
 {
img: '/ourteam/sutrisno.webp',
  price: 'image 3',
 },
 {
img: '/ourteam/sutrisno.webp',
  price: 'image 3',
 },
 {
img: '/ourteam/sutrisno.webp',
  price: 'image 3',
 },
 {
img: '/ourteam/sutrisno.webp',
  price: 'image 3',
 },
 {
img: '/ourteam/sutrisno.webp',
  price: 'image 3',
 },
 {
img: '/ourteam/sutrisno.webp',
  price: 'image 3',
 },
 {
img: '/ourteam/sutrisno.webp',
  price: 'image 3',
 },
 {
img: '/ourteam/sutrisno.webp',
  price: 'image 3',
 },
];
const CoverFlow =() => {
  return (
    <div className="pt-5">
        <Swiper
          modules={[EffectCoverflow, Pagination]}
          effect={'creative'}
          loop={true}
          spaceBetween={30}
          slidesPerView={7}
          // pagination={{
          //   clickable: true,
          // }}
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
                <img src={p.img} alt="" />
                <h3 className='items-start'>{p.price}</h3>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
  );
}

export default CoverFlow
