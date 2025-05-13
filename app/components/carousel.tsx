"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const image1 = "/images/projekat1.jpg";
const image2 = "/images/projekat2.jpg";
const image3 = "/images/projekat3.jpg";
const image4 = "/images/projekat7.jpg";
const image5 = "/images/projekat5.jpg";
const image6 = "/images/projekat6.jpg";
const image7 = "/images/projekat7.jpg";
const image8 = "/images/projekat8.jpg";
const image9 = "/images/projekat9.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
];

export function Carousel() {
  return (
    <div className='overflow-hidden my-5'>
      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
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
