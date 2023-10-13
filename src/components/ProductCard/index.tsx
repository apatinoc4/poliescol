import Image from "next/image";
import React from "react";
import styles from "./productCard.module.scss";
import { ProductLineIds } from "types/products";

interface ProductCardProps {
  backgroundImg: string;
  hasDeWord?: boolean;
  productLabel: string;
  productLineId: ProductLineIds;
  onClick: (productLineId: ProductLineIds) => void;
}

const ProductCard = ({
  backgroundImg,
  hasDeWord,
  productLabel,
  productLineId,
  onClick,
}: ProductCardProps) => {
  return (
    <div onClick={() => onClick(productLineId)} className={styles.container}>
      <h3>
        Línea {hasDeWord && <span>de</span>}
        <br />
        <span className={styles.bottomLine}>
          {productLabel.toLocaleLowerCase()}
        </span>
      </h3>
      <Image
        alt={backgroundImg}
        className={styles.backgroundImage}
        fill
        sizes="100%"
        src={`/${backgroundImg}`}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default ProductCard;
