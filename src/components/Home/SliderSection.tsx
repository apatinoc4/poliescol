"use client";

import React from "react";
import styles from "./sliderSection.module.scss";
import Image from "next/image";
import "swiper/css";
import HomeCarousel from "@/components/HomeCarousel/HomeCarousel";
import useIntersecting from "hooks/useIntersecting";
import clsx from "clsx";

const SliderSection = () => {
  const [elementRef, isIntersecting] = useIntersecting({
    threshold: 0.4,
  });

  return (
    <div className={styles.container}>
      <div
        ref={elementRef as React.MutableRefObject<any>}
        className={clsx(styles.carousel, { [styles.offset]: !isIntersecting })}
      >
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
