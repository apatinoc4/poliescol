"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import ProductCarouselSlide from "./ProductCarouselSlide";
import styles from "./productCarousel.module.scss";
import { Product } from "types/products";
import "swiper/css";

interface ProductCarouselProps {
  products: Product[];
  setSwiperInstance: (swiper: any) => void;
}

const ProductCarousel = ({
  products,
  setSwiperInstance,
}: ProductCarouselProps) => {
  return (
    <div className={styles.container}>
      <Swiper
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        modules={[FreeMode, Navigation, Thumbs]}
        wrapperClass="product-carousel"
      >
        {products.map(({ description, name, productImg }, idx) => {
          return (
            <SwiperSlide key={idx}>
              <ProductCarouselSlide
                description={description}
                name={name}
                productImg={productImg}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
