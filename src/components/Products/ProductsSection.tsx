"use client";

import React, { useState, useMemo } from "react";
import SubHeader from "../SubHeader";
import styles from "./productsSection.module.scss";
import ProductCard from "@/components/ProductCard";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import MenuItem from "@mui/material/MenuItem";
import clsx from "clsx";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import IconButton from "@mui/material/IconButton";
import { ProductLineIds } from "types/products";
import PageThemeProvider from "context/PageThemeProvider";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomIcon from "@/components/Icons";
import { PRODUCTS } from "constants/products";
import ThumbnailControl from "@/components/ProductCarousel/ThumbnailControl";

enum ProductLineLabels {
  Putty = "Masillas",
  Architectural = "Arquitectónica",
  Waterproofing = "Impermeabilizante",
}

const PRODUCT_LINES = [
  {
    backgroundImg: "puttyLineBg.png",
    id: ProductLineIds.Putty,
    label: ProductLineLabels.Putty,
    hasDeWord: true,
  },
  {
    backgroundImg: "architecturalLineBg.png",
    id: ProductLineIds.Architectural,
    label: ProductLineLabels.Architectural,
  },
  {
    backgroundImg: "waterproofingLineBg.png",
    id: ProductLineIds.Waterproofing,
    label: ProductLineLabels.Waterproofing,
  },
];

const ProductsSection = () => {
  const [isDisplayingDetail, setIsDisplayingDetail] = useState<boolean>(false);
  const [productLine, setProductLine] = useState<ProductLineIds>(
    ProductLineIds.Putty
  );
  const [swiperInstance, setSwiperInstance] = useState<any>();

  const selectedProducts = useMemo(() => {
    return PRODUCTS[productLine];
  }, [productLine]);

  const handleClickCard = (productLineId: ProductLineIds) => {
    setIsDisplayingDetail(true);
    setProductLine(productLineId);
  };

  const handleSelectLine = (e: SelectChangeEvent) => {
    setProductLine(e.target.value as ProductLineIds);
    swiperInstance.slideTo(0);
  };

  return (
    <PageThemeProvider>
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
              <div className={styles.dropdownControls}>
                <IconButton
                  className="productLines-back"
                  onClick={() => setIsDisplayingDetail(false)}
                >
                  <CustomIcon icon="arrowLeft" />
                </IconButton>
                <FormControl className="productLines-dropdown" fullWidth>
                  <Select
                    IconComponent={ExpandMoreIcon}
                    id="product-line"
                    name="product-line"
                    onChange={handleSelectLine}
                    variant="standard"
                    value={productLine}
                  >
                    {PRODUCT_LINES.map(({ id, label }) => {
                      return (
                        <MenuItem value={id} key={id}>
                          {id === ProductLineIds.Architectural
                            ? `Linea ${label.toLocaleLowerCase()}`
                            : label}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </div>
              <ProductCarousel
                products={selectedProducts}
                setSwiperInstance={setSwiperInstance}
              />
            </div>
            <div className={styles.thumbnails}>
              {selectedProducts.map(({ productImg }, idx) => {
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
          </div>
        )}
      </section>
    </PageThemeProvider>
  );
};

export default ProductsSection;
