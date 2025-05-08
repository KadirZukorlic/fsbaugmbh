"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const image1 = "/images/hero.jpg";
const image2 = "/images/image2.jpg";
const image3 = "/images/image3.jpg";
const image4 = "/images/image4.jpg";
const image5 = "/images/image5.jpg";
const image6 = "/images/image6.jpg";

const images = [image1, image2, image3, image4, image5, image6];

export function Carousel() {
  return (
    <div className='w-screen overflow-hidden my-5'>
      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        loop={true}
        spaceBetween={-120}
        className='h-[100px] sm:h-[100px] md:h-[150px] lg:h-[350px]'
        breakpoints={{
          550: {
            slidesPerView: 2,
          },
          760: {
            slidesPerView: 2,
          },
          950: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 2,
          },
        }}
      >
        {images.map((image) => (
          <SwiperSlide className='h-full'>
            <img
              src={image}
              alt='slika1'
              className='w-full h-full object-cover clip-diagonal'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
