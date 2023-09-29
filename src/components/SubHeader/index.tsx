import React from "react";
import styles from "./subHeader.module.scss";
import clsx from "clsx";
import Image from "next/image";

interface SubHeaderProps {
  backgroundImg: string;
  title: string;
  variant?: "section";
}

const SubHeader = ({ backgroundImg, title, variant }: SubHeaderProps) => {
  return (
    <div
      className={clsx(styles.container, {
        [styles.default]: !variant,
        [styles.section]: variant,
      })}
    >
      {variant ? <h2>{title}</h2> : <h1>{title}</h1>}
      <div className={styles.tlCover}></div>
      <Image
        alt={backgroundImg}
        className={styles.backgroundImage}
        fill
        src={`/${backgroundImg}`}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default SubHeader;
