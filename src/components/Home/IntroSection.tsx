"use client";

import React from "react";
import Image from "next/image";
import styles from "./introSection.module.scss";
import useIntersecting from "hooks/useIntersecting";
import clsx from "clsx";

const IntroSection = () => {
  const [elementRef, isIntersecting] = useIntersecting({
    threshold: 0,
  });
  return (
    <section className={styles.container}>
      <div
        className={clsx(styles.landingText, {
          [styles.offset]: !isIntersecting,
        })}
        ref={elementRef as React.MutableRefObject<any>}
      >
        <div className={styles.title}>
          <h1>
            Pensados para la industria automotriz, metalmecánica y constructora
          </h1>
        </div>
        <p>
          somos productores de masillas, impermeabilizantes, selladores y otros
          productos complementarios con mejores especificaciones ajustadas a las
          necesidades y preferencias de nuestros clientes
        </p>
      </div>
      <div className={styles.gradient} />
      <Image
        alt="introSectionBg.png"
        className={styles.backgroundImage}
        fill
        sizes="100%"
        src="/introSectionBg.png"
        style={{ objectFit: "cover" }}
      />
    </section>
  );
};

export default IntroSection;
