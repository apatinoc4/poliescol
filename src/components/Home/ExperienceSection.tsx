import React from "react";
import styles from "./experienceSection.module.scss";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

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
          <Link href="/nosotros">
            <Button label="Conoce más" />
          </Link>
        </div>
      </div>
      <Image
        alt="experienceSectionBg.png"
        className={styles.backgroundImage}
        fill
        sizes="100%"
        src="/experienceSectionBg.png"
        style={{ objectFit: "cover" }}
      />
    </section>
  );
};

export default ExperienceSection;
