import React from "react";
import styles from "./footer.module.scss";
import Image from "next/image";

const FOOTER_SECTIONS = [
  {
    title: "Contáctanos",
    phone: "+57 ##########",
    mail: "@Loremipsum",
    website: "loremipsum.com",
  },
  {
    title: "Preguntas frecuentes",
    phone: "+57 ##########",
    mail: "@Loremipsum",
    website: "loremipsum.com",
  },
  {
    title: "Síguenos en redes",
    phone: "+57 ##########",
    mail: "@Loremipsum",
    website: "loremipsum.com",
  },
];

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.info}>
          <Image
            alt="poliescoFooter.png"
            height={65}
            src="/poliescolFooter.png"
            width={170}
          />
          <p>
            Diseñados para satisfacer las necesidades de la industria, de
            pintura automotriz, metalmecánica y constructora
          </p>
        </div>
        {FOOTER_SECTIONS.map(({ title, phone, mail, website }, idx) => {
          return (
            <div className={styles.info} key={idx}>
              <h6>{title}</h6>
              <p className={styles.contact}>{phone}</p>
              <p className={styles.contact}>{mail}</p>
              <p className={styles.contact}>{website}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.tlCover}></div>
      <Image
        alt="footerBg.jpeg"
        className={styles.backgroundImage}
        fill
        src="/footerBg.jpeg"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default Footer;
