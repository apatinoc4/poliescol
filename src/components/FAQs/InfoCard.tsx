"use client";
import React, { useState } from "react";
import styles from "./infoCard.module.scss";

const InfoCard = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Preguntas frecuentes</h3>
        <p onClick={() => setIsExpanded((prevState) => !prevState)}>
          {isExpanded ? "Esconder" : "Leer"}
        </p>
      </div>
      {isExpanded && <div className={styles.body}>Pregunta</div>}
    </div>
  );
};

export default InfoCard;
