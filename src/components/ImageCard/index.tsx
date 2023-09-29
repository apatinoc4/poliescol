import React from "react";
import styles from "./imageCard.module.scss";
import Image from "next/image";

interface ImageCardProps {
  label: string;
  backgroundImg: string;
}

const ImageCard = ({ backgroundImg, label }: ImageCardProps) => {
  return (
    <div className={styles.container}>
      <p>{label}</p>
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

export default ImageCard;
