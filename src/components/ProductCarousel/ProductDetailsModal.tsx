import React from "react";
import styles from "./productDetailsModal.module.scss";
import clsx from "clsx";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import { Product } from "types";
import Image from "next/image";

interface ProductDetailsModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  product?: Product;
}

const ProductDetailsModal = ({
  product,
  isOpen,
  setIsOpen,
}: ProductDetailsModalProps) => {
  return (
    <div
      className={clsx(styles.container, {
        [styles.hidden]: !isOpen,
      })}
    >
      <Fade timeout={1000} in={isOpen}>
        <div onClick={() => setIsOpen(false)} className={styles.bg}></div>
      </Fade>
      <Slide
        timeout={500}
        direction="up"
        in={isOpen}
        mountOnEnter
        unmountOnExit
      >
        <div className={styles.body}>
          <div className={styles.contents}>
            <div className={styles.title}>
              <h2>{product?.name}</h2>
            </div>
            <div className={styles.article}>{product?.instructions}</div>
          </div>
          <Image
            alt={"productImg"}
            className={styles.sectionImg}
            src={`/${product?.productImg}`}
            width={300}
            height={300}
          />
        </div>
      </Slide>
    </div>
  );
};

export default ProductDetailsModal;
