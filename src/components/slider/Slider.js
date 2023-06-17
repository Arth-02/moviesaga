import React, { useEffect, useState } from 'react'

import MovieCard from '../movieCard/MovieCard'
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './slider.css'

const Slider = (props) => {

  const [list , setList] = useState([]);
  
  useEffect(() => {
    const getList = async () => {
      await fetch(props.url).then((response) => response.json()).then((data) => {
        setList(data.results);
      })
    }
    getList();
  } , [props.url])

  return (
    <>
      <Swiper 
        slidesPerView={2}
        spaceBetween={20}
        speed={800}
        autoplay={
            {
                delay: '400000000000',
                disableOnInteraction: false
            }
        }
        breakpoints={{
          576: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          640 : {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
          },
          876: {
            slidesPerView: 5
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        keyboard={{
            enabled: true,
        }}
        rewind={true}
        slidesPerGroup={6}

        navigation={true}
        modules={[Keyboard, Navigation, Autoplay]}
        className="mySwiper"
      >
        {
          list.map((movie) => {
            return <SwiperSlide key={movie.id}>
                <MovieCard movie={movie} id={movie.id}/>
              </SwiperSlide>
          })
        }
      </Swiper>
    </>
  )
}

export default Slider