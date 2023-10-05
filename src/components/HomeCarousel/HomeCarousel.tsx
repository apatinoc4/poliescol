"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import HomeCarouselSlide from "./HomeCarouselSlide";
import styles from "./homeCarousel.module.scss";
import ArrowIcon from "@/components/Icons/Arrow";

const HomeCarousel = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <div className={styles.test1}>
        <ArrowIcon direction="left" />
      </div>
      <div className={styles.test1}>
        <ArrowIcon direction="left" />
      </div>
      <SwiperSlide>
        <HomeCarouselSlide />
      </SwiperSlide>
      <SwiperSlide>
        <HomeCarouselSlide />
      </SwiperSlide>
      <div className={styles.test2}>
        <ArrowIcon direction="right" />
      </div>
      <div className={styles.test2}>
        <ArrowIcon direction="right" />
      </div>
    </Swiper>
  );
};

export default HomeCarousel;
