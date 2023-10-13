import React from "react";
import Image from "next/image";
import styles from "./introSection.module.scss";

const IntroSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.landingText}>
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
