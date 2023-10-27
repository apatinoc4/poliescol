"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./thumbnailControl.module.scss";
import clsx from "clsx";
import { Product } from "types";

interface ThumbnailControlProps {
  idx: number;
  swiperInstance: any;
  product: Product;
}

const ThumbnailControl = ({
  idx,
  product,
  swiperInstance,
}: ThumbnailControlProps) => {
  const containerRef = useRef(null);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  return (
    <div
      className={styles.container}
      onClick={() => swiperInstance.slideTo(idx)}
      ref={containerRef}
    >
      <div
        className={clsx(styles.tooltip, { [styles.isHovering]: isHovering })}
      >
        {product.shortenedName ? product.shortenedName : product.name}
      </div>
      <Image
        onMouseEnter={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
        alt={product.productImg}
        src={`/${product.productImg}`}
        width={93}
        height={93}
      />
    </div>
  );
};

export default ThumbnailControl;
