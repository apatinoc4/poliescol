import React from "react";
import styles from "./productCarouselSlide.module.scss";
import Image from "next/image";
import Button from "@/components/Button";

interface ProductCarouselSlideProps {
  description: string;
  name: string;
  productImg: string;
}

const ProductCarouselSlide = ({
  description,
  name,
  productImg,
}: ProductCarouselSlideProps) => {
  return (
    <div className={styles.container}>
      <Image
        alt={productImg}
        className={styles.sectionImg}
        src={`/${productImg}`}
        width={300}
        height={300}
      />
      <div className={styles.infoContent}>
        <div className={styles.text}>
          <div className={styles.title}>
            <h2>{name}</h2>
          </div>
          <p>{description}</p>
        </div>
        <Button variant="red-body" label="Descargar ficha técnica " />
      </div>
    </div>
  );
};

export default ProductCarouselSlide;
