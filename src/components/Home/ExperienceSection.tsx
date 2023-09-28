import React from "react";
import styles from "./experienceSection.module.scss";
import Image from "next/image";
import Button from "@/components/Button";

const ExperienceSection = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.sectionContent}>
        <div className={styles.content}>
          <h2>Somos una empresa especializada</h2>
          <p>
            en la producción y comercialización de compuestos especiales como:
            masillas, impermeabilizantes y otros productos complementarios
            diseñados para satisfacer las necesidades de la industria de pintura
            automotriz, metalmecánica y constructora.
          </p>
          <p>Más de 50 años de experiencia</p>
          <Button text="Conoce más" />
        </div>
      </div>
      <Image
        alt="experienceSectionBg.jpeg"
        className={styles.backgroundImage}
        fill
        src="/experienceSectionBg.jpeg"
        style={{ objectFit: "cover" }}
      />
    </section>
  );
};

export default ExperienceSection;
