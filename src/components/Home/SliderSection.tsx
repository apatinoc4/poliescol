"use client";

import React, { useState } from "react";
import styles from "./sliderSection.module.scss";
import Image from "next/image";
import "swiper/css";
import HomeCarousel from "@/components/HomeCarousel/HomeCarousel";

const SliderSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <HomeCarousel />
      </div>
      <div className={styles.transluscentBg}>
        <div className={styles.tlCover}></div>
        <Image
          alt="homeSliderSectionBg.jpeg"
          className={styles.backgroundImage}
          fill
          sizes="100%"
          src="/homeSliderSectionBg.jpeg"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default SliderSection;
