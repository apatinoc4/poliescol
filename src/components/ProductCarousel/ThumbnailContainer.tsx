import React, { useMemo } from "react";
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
  const productAmount = useMemo(() => products.length, [products]);
  return (
    <div className={styles.container}>
      <div className={styles.desktop}>
        {products.map(({ productImg }, idx) => {
          return (
            <ThumbnailControl
              productImg={productImg}
              swiperInstance={swiperInstance}
              key={idx}
              idx={idx}
            />
          );
        })}
      </div>
      <div
        className={clsx(styles.mobile, {
          [styles.equalPadding]: productAmount < 4,
        })}
      >
        {productAmount > 4 ? (
          <Swiper
            slidesPerView={4}
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
    </div>
  );
};

export default ThumbnailContainer;
