"use client";

import React from "react";
import styles from "./dealersSection.module.scss";
import ImageCard from "@/components/ImageCard";
import Image from "next/image";
import useIntersecting from "hooks/useIntersecting";
import clsx from "clsx";

const IMAGE_CARDS = [
  {
    label: "Larga trayectoria",
    backgroundImg: "dealerCard1.jpeg",
  },
  {
    label: "Envíos agiles",
    backgroundImg: "dealerCard2.jpeg",
  },
  {
    label: "Asesoría personalizada",
    backgroundImg: "dealerCard3.jpeg",
  },
];

const DealersSection = () => {
  const [elementRef, isIntersecting] = useIntersecting({
    threshold: 0.4,
  });
  return (
    <section className={styles.sectionContainer}>
      <div
        ref={elementRef as React.MutableRefObject<any>}
        className={clsx(styles.contents, { [styles.offset]: !isIntersecting })}
      >
        <div className={styles.sectionTitle}>
          <h2>Trabajamos con distribuidores</h2>
          <p>
            Otros negocios han confiado en nosotros como proveedores de
            productos industriales. Contamos con:
          </p>
        </div>
        <div className={styles.sectionCards}>
          <div className={styles.imageCards}>
            {IMAGE_CARDS.map(({ backgroundImg, label }, idx) => {
              return (
                <ImageCard
                  backgroundImg={backgroundImg}
                  key={`${backgroundImg}-${idx}`}
                  label={label}
                />
              );
            })}
          </div>
          <div className={styles.backgroundStripe}>
            <div className={styles.tlCover}></div>
            <Image
              alt="warehouseBg.png"
              className={styles.backgroundImage}
              fill
              sizes="100%"
              src="/warehouseBg.png"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealersSection;
