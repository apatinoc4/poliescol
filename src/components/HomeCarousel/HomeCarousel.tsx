"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, FreeMode, Thumbs } from "swiper/modules";
import HomeCarouselSlide from "./HomeCarouselSlide";
import styles from "./homeCarousel.module.scss";
import CustomIcon from "@/components/Icons";

const SLIDE_MESSAGES = [
  {
    message:
      " somos productores de masillas, impermeabilizantes, selladores y otros productos complementarios con mejores especificaciones ajustadas a las necesidades y preferencias de nuestros clientes",
    author: "Nombre de usuario",
  },
  {
    message:
      " somos productores de masillas, impermeabilizantes, selladores y otros productos complementarios con mejores especificaciones ajustadas a las necesidades y preferencias de nuestros clientes",
    author: "Nombre de usuario 2",
  },
  {
    message:
      " somos productores de masillas, impermeabilizantes, selladores y otros productos complementarios con mejores especificaciones ajustadas a las necesidades y preferencias de nuestros clientes",
    author: "Nombre de usuario 3",
  },
  {
    message:
      " somos productores de masillas, impermeabilizantes, selladores y otros productos complementarios con mejores especificaciones ajustadas a las necesidades y preferencias de nuestros clientes",
    author: "Nombre de usuario 4",
  },
];

const HomeCarousel = () => {
  const [swiperInstance, setSwiperInstance] = useState<any>();

  const handleClickPrev = () => {
    swiperInstance?.slidePrev();
  };

  const handleClickNext = () => {
    swiperInstance?.slideNext();
  };

  return (
    <div className={styles.container}>
      <div className={styles.arrowControl} onClick={() => handleClickPrev()}>
        <CustomIcon icon="arrowLeft" />
      </div>
      <Swiper
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Pagination, Navigation, FreeMode, Thumbs]}
        className="mySwiper"
      >
        {SLIDE_MESSAGES.map(({ author, message }, idx) => {
          return (
            <SwiperSlide key={idx}>
              <HomeCarouselSlide author={author} message={message} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={styles.arrowControl} onClick={() => handleClickNext()}>
        <CustomIcon icon="arrowRight" />
      </div>
    </div>
  );
};

export default HomeCarousel;
