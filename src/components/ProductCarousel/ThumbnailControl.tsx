"use client";

import Image from "next/image";
import styles from "./thumbnailControl.module.scss";

interface ThumbnailControlProps {
  idx: number;
  swiperInstance: any;
  productImg: string;
}

const ThumbnailControl = ({
  idx,
  productImg,
  swiperInstance,
}: ThumbnailControlProps) => {
  return (
    <div
      className={styles.container}
      onClick={() => swiperInstance.slideTo(idx)}
    >
      <Image alt={productImg} src={`/${productImg}`} width={93} height={93} />
    </div>
  );
};

export default ThumbnailControl;
