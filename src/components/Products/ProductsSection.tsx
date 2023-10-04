"use client";

import React, { useState } from "react";
import SubHeader from "../SubHeader";
import styles from "./productsSection.module.scss";
import ProductCard from "@/components/ProductCard";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import MenuItem from "@mui/material/MenuItem";
import clsx from "clsx";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ProductLineIds } from "types/products";

enum ProductLineLabels {
  Putty = "Masillas",
  Architectural = "Arquitectónica",
  Waterproofing = "Impermeabilizante",
}

const PRODUCT_LINES = [
  {
    backgroundImg: "puttyLineBg.jpeg",
    id: ProductLineIds.Putty,
    label: ProductLineLabels.Putty,
    hasDeWord: true,
  },
  {
    backgroundImg: "architecturalLineBg.jpeg",
    id: ProductLineIds.Architectural,
    label: ProductLineLabels.Architectural,
  },
  {
    backgroundImg: "waterproofingLineBg.jpeg",
    id: ProductLineIds.Waterproofing,
    label: ProductLineLabels.Waterproofing,
  },
];

const ProductsSection = () => {
  const [isDisplayingDetail, setIsDisplayingDetail] = useState<boolean>(false);
  const [productLine, setProductLine] = useState<ProductLineIds>(
    ProductLineIds.Putty
  );

  const handleClickCard = (productLineId: ProductLineIds) => {
    setIsDisplayingDetail(true);
    setProductLine(productLineId);
  };
  return (
    <section className={styles.sectionContainer}>
      <SubHeader
        backgroundImg="productsHeaderBg.jpeg"
        title="Nuestros productos"
      />
      {!isDisplayingDetail ? (
        <div className={clsx(styles.generalContainer, styles.cardsContainer)}>
          <h2>Línea de productos</h2>
          <p>
            Tenemos diferentes tipos de productos con alta calidad y
            rendimiento.
          </p>

          <div className={styles.productCards}>
            {PRODUCT_LINES.map(({ backgroundImg, hasDeWord, id, label }) => {
              return (
                <ProductCard
                  onClick={handleClickCard}
                  productLineId={id}
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
        <div
          className={clsx(styles.generalContainer, styles.carouselContainer)}
        >
          <div className={styles.contents}>
            <button onClick={() => setIsDisplayingDetail(false)}>back</button>
            <FormControl fullWidth>
              <Select
                name="product-line"
                id="product-line"
                onChange={(e) =>
                  setProductLine(e.target.value as ProductLineIds)
                }
                value={productLine}
              >
                {PRODUCT_LINES.map(({ id, label }) => {
                  return (
                    <MenuItem value={id} key={id}>
                      {label}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <ProductCarousel productLine={productLine} />
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductsSection;
