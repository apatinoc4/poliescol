import React from "react";
import styles from "./footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import CustomIcon from "@/components/Icons";
import { IconName } from "types";

const FOOTER_SECTIONS = [
  {
    title: "Contáctanos",
    field1: {
      icon: "whatsapp",
      label: "+57 316 8340926",
      linkTo: "https://wa.me/573168340926",
    },
    field2: {
      icon: "mail",
      label: "info@poliescol.com",
      linkTo: "mailto:info@poliescol.com",
    },
    field3: {
      icon: "phone",
      label: "+57 316 8340926",
      linkTo: "https://wa.me/573168340926",
    },
  },
  {
    title: "Preguntas frecuentes",
    field1: {
      label: "Políticas y garantías",
      linkTo: "preguntas-frecuentes",
      noTargetBlank: true,
    },
    field2: {
      label: "Preguntas frecuentes",
      linkTo: "preguntas-frecuentes",
      noTargetBlank: true,
    },
    field3: {
      label: "Contacto con asesores",
      linkTo: "asesores",
      noTargetBlank: true,
    },
  },
  {
    title: "Síguenos en redes",
    field1: {
      icon: "instagram",
      label: "@productospoliescol",
      linkTo: "https://www.instagram.com/productospoliescol/",
    },
    field2: {
      icon: "facebook",
      label: "@facebook",
      linkTo: "https://www.facebook.com/p/Productos-poliescol-100070740716277/",
    },
    field3: {
      icon: "youtube",
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
                {field1.icon && <CustomIcon icon={field1.icon as IconName} />}
                <Link
                  href={field1.linkTo}
                  target={field1.noTargetBlank ? "" : "_blank"}
                >
                  <p className={styles.contact}>{field1.label}</p>
                </Link>
              </div>
              <div className={styles.footerField}>
                {field2.icon && <CustomIcon icon={field2.icon as IconName} />}
                <Link
                  href={field2.linkTo}
                  target={field2.noTargetBlank ? "" : "_blank"}
                >
                  <p className={styles.contact}>{field2.label}</p>
                </Link>
              </div>
              <div className={styles.footerField}>
                {field3.icon && <CustomIcon icon={field3.icon as IconName} />}
                <Link
                  href={field3.linkTo}
                  target={field3.noTargetBlank ? "" : "_blank"}
                >
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
