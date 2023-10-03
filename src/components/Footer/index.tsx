import React from "react";
import styles from "./footer.module.scss";
import Image from "next/image";
import Link from "next/link";

const FOOTER_SECTIONS = [
  {
    title: "Contáctanos",
    field1: {
      icon: "icon_call_.svg",
      label: "+57 316 8340926",
      linkTo: "https://wa.me/573168340926",
    },
    field2: {
      icon: "icon_call_.svg",
      label: "info@poliescol.com",
      linkTo: "mailto:info@poliescol.com",
    },
    field3: {
      icon: "icon_call_.svg",
      label: "+57 316 8340926",
      linkTo: "https://wa.me/573168340926",
    },
  },
  {
    title: "Preguntas frecuentes",
    field1: {
      label: "Políticas y garantías",
      linkTo: "placeholder_link4",
    },
    field2: {
      label: "Preguntas frecuentes",
      linkTo: "placeholder_link5",
    },
    field3: {
      label: "Contacto con asesores",
      linkTo: "placeholder_link6",
    },
  },
  {
    title: "Síguenos en redes",
    field1: {
      icon: "icon_call_.svg",
      label: "@productospoliescol",
      linkTo: "https://www.instagram.com/productospoliescol/",
    },
    field2: {
      icon: "icon_call_.svg",
      label: "@facebook",
      linkTo: "https://www.facebook.com/p/Productos-poliescol-100070740716277/",
    },
    field3: {
      icon: "icon_call_.svg",
      label: "@youtube",
      linkTo: "https://www.youtube.com/watch?v=bN7bWOnZ050",
    },
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
          <p className={styles.slogan}>
            Diseñados para satisfacer las necesidades de la industria, de
            pintura automotriz, metalmecánica y constructora
          </p>
        </div>
        {FOOTER_SECTIONS.map(({ title, field1, field2, field3 }, idx) => {
          return (
            <div className={styles.info} key={idx}>
              <h6>{title}</h6>
              <div className={styles.footerField}>
                {field1.icon && (
                  <Image
                    alt={field1.icon}
                    src={`/${field1.icon}`}
                    height={15}
                    width={15}
                  />
                )}
                <Link href={field1.linkTo} target="_blank">
                  <p className={styles.contact}>{field1.label}</p>
                </Link>
              </div>
              <div className={styles.footerField}>
                {field2.icon && (
                  <Image
                    alt={field2.icon}
                    src={`/${field2.icon}`}
                    height={15}
                    width={15}
                  />
                )}
                <Link href={field2.linkTo} target="_blank">
                  <p className={styles.contact}>{field2.label}</p>
                </Link>
              </div>
              <div className={styles.footerField}>
                {field3.icon && (
                  <Image
                    alt={field3.icon}
                    src={`/${field3.icon}`}
                    height={15}
                    width={15}
                  />
                )}
                <Link href={field3.linkTo} target="_blank">
                  <p className={styles.contact}>{field3.label}</p>
                </Link>
              </div>
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
