import React, { useEffect, useMemo, useState } from "react";
import styles from "./thumbnailContainer.module.scss";
import { Product } from "types";
import ThumbnailControl from "./ThumbnailControl";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "./thumbnailCarousel.scss";
import clsx from "clsx";

interface ThumbnailContainerProps {
  products: Product[];
  swiperInstance: any;
}

const ThumbnailContainer = ({
  products,
  swiperInstance,
}: ThumbnailContainerProps) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const productAmount = useMemo(() => products.length, [products]);
  const slideAmount = useMemo(() => {
    if (windowWidth > 1024) {
      return productAmount - 1;
    } else if (windowWidth > 800 && windowWidth < 1024) {
      return 6;
    } else return 4;
  }, [windowWidth, productAmount]);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div
      className={clsx(styles.container, {
        [styles.equalPadding]: productAmount < 4,
      })}
    >
      {productAmount > 4 ? (
        <Swiper
          slidesPerView={slideAmount}
          modules={[FreeMode, Navigation, Thumbs]}
          navigation={true}
          wrapperClass="thumbnail-carousel"
        >
          {products.map(({ productImg }, idx) => {
            return (
              <SwiperSlide key={idx}>
                <ThumbnailControl
                  productImg={productImg}
                  swiperInstance={swiperInstance}
                  idx={idx}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <>
          {products.map(({ productImg }, idx) => {
            return (
              <ThumbnailControl
                key={idx}
                productImg={productImg}
                swiperInstance={swiperInstance}
                idx={idx}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default ThumbnailContainer;
