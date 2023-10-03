"use client";

import React, { useState } from "react";
import SubHeader from "../SubHeader";
import styles from "./productsSection.module.scss";
import ProductCard from "@/components/ProductCard";
import ProductCarousel from "../ProductCarousel";

const PRODUCT_LINES = [
  {
    backgroundImg: "puttyLineBg.jpeg",
    id: "pl-0",
    label: "masillas",
    hasDeWord: true,
  },
  {
    backgroundImg: "architecturalLineBg.jpeg",
    id: "pl-1",
    label: "arquitectónica",
  },
  {
    backgroundImg: "waterproofingLineBg.jpeg",
    id: "pl-2",
    label: "impermeabilizante",
  },
];

const ProductsSection = () => {
  const [isDisplayingDetail, setIsDisplayingDetail] = useState<boolean>(true);
  return (
    <section className={styles.sectionContainer}>
      <SubHeader
        backgroundImg="productsHeaderBg.jpeg"
        title="Nuestros productos"
      />
      {isDisplayingDetail ? (
        <div className={styles.containerGeneral}>
          <h2>Línea de productos</h2>
          <p>
            Tenemos diferentes tipos de productos con alta calidad y
            rendimiento.
          </p>

          <div className={styles.productCards}>
            {PRODUCT_LINES.map(({ backgroundImg, hasDeWord, id, label }) => {
              return (
                <ProductCard
                  setIsDisplayingDetail={setIsDisplayingDetail}
                  key={id}
                  backgroundImg={backgroundImg}
                  hasDeWord={hasDeWord}
                  productLabel={label}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <>
          <ProductCarousel />
        </>
      )}
    </section>
  );
};

export default ProductsSection;
