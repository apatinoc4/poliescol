"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import ProductCarouselSlide from "./ProductCarouselSlide";
import styles from "./productCarousel.module.scss";
import "swiper/css";
import ProductDetailsModal from "./ProductDetailsModal";
import { Product } from "types";

interface ProductCarouselProps {
  products: Product[];
  setSwiperInstance: (swiper: any) => void;
}

const ProductCarousel = ({
  products,
  setSwiperInstance,
}: ProductCarouselProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentProduct, setCurrentProduct] = useState<Product | undefined>();

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

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
        {products.map((product, idx) => {
          return (
            <SwiperSlide key={idx}>
              <ProductCarouselSlide
                setCurrentProduct={setCurrentProduct}
                setIsModalOpen={setIsModalOpen}
                product={product}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <ProductDetailsModal
        product={currentProduct}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      />
    </div>
  );
};

export default ProductCarousel;
