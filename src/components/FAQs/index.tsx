import React from "react";
import styles from "./faqSection.module.scss";
import ExpandableField from "@/components/ExpandableField";
import InfoCard from "@/components/InfoCard";
import { FAQ, POLITICS } from "constants/faq";

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
        <ExpandableField title="Políticas y garantías">
          {POLITICS.map(({ title, politic }, idx) => {
            return <InfoCard key={idx} title={title} body={politic} />;
          })}
        </ExpandableField>
        <ExpandableField title="Preguntas frecuentes">
          {FAQ.map(({ question, answer }, idx) => {
            return <InfoCard key={idx} title={question} body={answer} />;
          })}
        </ExpandableField>
      </div>
    </section>
  );
};

export default FaqsSection;
