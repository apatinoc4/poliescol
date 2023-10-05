"use client";

import React, { useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import ProductCarouselSlide from "./ProductCarouselSlide";
import { ProductLineIds } from "types/products";
import { PRODUCTS } from "constants/products";
import styles from "./productCarousel.module.scss";
import ThumbnailControl from "./ThumbnailControl";

interface ProductCarouselProps {
  productLine: ProductLineIds;
}

const ProductCarousel = ({ productLine }: ProductCarouselProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const currentProducts = useMemo(() => {
    return PRODUCTS[productLine];
  }, [productLine]);

  return (
    <div className={styles.container}>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {currentProducts.map(({ description, name, productImg }, idx) => {
          return (
            <SwiperSlide key={`${productLine}-${idx}`}>
              <ProductCarouselSlide
                description={description}
                name={name}
                productImg={productImg}
              />
            </SwiperSlide>
          );
        })}
        <div className={styles.thumbnails}>
          {currentProducts.map(({ productImg }, idx) => {
            return (
              <ThumbnailControl productImg={productImg} key={idx} idx={idx} />
            );
          })}
        </div>
      </Swiper>
    </div>
  );
};

export default ProductCarousel;