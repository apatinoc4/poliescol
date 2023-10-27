import React from "react";
import Image from "next/image";
import styles from "./introSection.module.scss";

const IntroSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>Somos una empresa especializada</h1>
        <p>
          el la producción y comercialización de compuestos especiales como:
          masillas, impermeabilizantes y otros productos complementarios
          diseñados para satisfacer las necesidades de la industria de pintura
          automotriz, metalmecánica y constructora.
        </p>
        <Image
          alt="warehouseBgAboutUs.jpeg"
          className={styles.backgroundImage}
          fill
          priority
          src="/warehouseBg.png"
          sizes="100%"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};

export default IntroSection;
