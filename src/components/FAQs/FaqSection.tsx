import React from "react";
import styles from "./faqSection.module.scss";
import InfoCard from "./InfoCard";

const FaqsSection = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.intro}>
        <div className={styles.title}>
          <h2>
            Queremos que estés tranquilo. Estas son algunas preguntas que puedes
            estarte haciendo.
          </h2>
        </div>
        <p>
          Explora nuestras secciones de respuestas . Si no encuentras lo que
          buscas siéntete libre de contactar a un asesor.
        </p>
      </div>
      <div className={styles.contents}>
        <InfoCard />
      </div>
    </section>
  );
};

export default FaqsSection;
