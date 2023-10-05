"use client";

import Image from "next/image";
import { useSwiper } from "swiper/react";
import styles from "./thumbnailControl.module.scss";

interface ThumbnailControlProps {
  idx: number;
  productImg: string;
}

const ThumbnailControl = ({ idx, productImg }: ThumbnailControlProps) => {
  const swiper = useSwiper();

  return (
    <div className={styles.container} onClick={() => swiper.slideTo(idx)}>
      <Image alt={productImg} src={`/${productImg}`} width={93} height={93} />
    </div>
  );
};

export default ThumbnailControl;
