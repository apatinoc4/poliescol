"use client";

import React from "react";
import styles from "./productCarouselSlide.module.scss";
import Image from "next/image";
import Button from "@/components/Button";
import clsx from "clsx";
import CustomIcon from "../Icons";
import { Product } from "types";
import Tooltip from "@mui/material/Tooltip";
import useDownloader from "react-use-downloader";

interface ProductCarouselSlideProps {
  product: Product;
  setIsModalOpen: (isModalOpen: boolean) => void;
  setCurrentProduct: (product: any) => void;
}

const ProductCarouselSlide = ({
  product,
  setIsModalOpen,
  setCurrentProduct,
}: ProductCarouselSlideProps) => {
  const handleOpenModal = () => {
    setCurrentProduct(product);
    setIsModalOpen(true);
  };
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();
  const fileUrl = `/${product.pdf}`;
  const filename = product.pdf;
  return (
    <div className={clsx(styles.container)}>
      <Image
        alt={product.productImg}
        className={styles.sectionImg}
        src={`/${product.productImg}`}
        width={300}
        height={300}
      />
      <div className={styles.infoContent}>
        <div className={styles.text}>
          <div className={styles.title}>
            <h2>{product.name}</h2>
          </div>
          <p className={styles.inline}>{product.description}</p>
          {product.instructions && (
            <Tooltip placement="top" arrow title="Más información">
              <div
                className={clsx(styles.inline, styles.moreInfo)}
                onClick={() => handleOpenModal()}
              >
                <CustomIcon icon="plus" />
              </div>
            </Tooltip>
          )}
        </div>
        <Button
          onClick={() => download(fileUrl, filename as string)}
          variant="red-body"
          label="Descargar ficha técnica "
        />
      </div>
    </div>
  );
};

export default ProductCarouselSlide;
