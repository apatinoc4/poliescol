import Image from "next/image";
import React from "react";
import styles from "./productCard.module.scss";

interface ProductCardProps {
  backgroundImg: string;
  hasDeWord?: boolean;
  productLabel: string;
  setIsDisplayingDetail: (isDisplayingDetail: boolean) => void;
}

const ProductCard = ({
  backgroundImg,
  hasDeWord,
  productLabel,
  setIsDisplayingDetail,
}: ProductCardProps) => {
  return (
    <div
      onClick={() => setIsDisplayingDetail(false)}
      className={styles.container}
    >
      <h3>
        Línea {hasDeWord && <span>de</span>}
        <br />
        <span className={styles.bottomLine}>{productLabel}</span>
      </h3>
      <Image
        alt={backgroundImg}
        className={styles.backgroundImage}
        fill
        src={`/${backgroundImg}`}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default ProductCard;
