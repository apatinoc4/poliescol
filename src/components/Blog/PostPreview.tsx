import React from "react";
import Button from "@/components/Button";
import Link from "next/link";
import styles from "./postPreview.module.scss";
import Image from "next/image";
import clsx from "clsx";
import parse from "html-react-parser";

interface PostPreviewProps {
  title: string;
  author?: string;
  excerpt: string;
  image?: string;
  index: number;
  date: any;
}

function formatDate(dateString: string): string {
  const monthsInSpanish = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const dateObj = new Date(dateString);

  const day = dateObj.getDate();
  const month = monthsInSpanish[dateObj.getMonth()];
  const year = dateObj.getFullYear();

  return `${day} de ${month} ${year}`;
}

const PostPreview = ({
  title,
  author,
  excerpt,
  image,
  index,
  date,
}: PostPreviewProps) => {
  return (
    <div className={clsx(styles.container, { [styles.even]: index % 2 == 0 })}>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p className={styles.authorDate}>
          {author} / {formatDate(date)}
        </p>
        <div className={styles.body}>{parse(excerpt)}</div>
        <Link href="/">
          <Button variant="red-body" label="Leer más" />
        </Link>
      </div>
      <div className={styles.postImage}>
        {!image ? (
          <Image
            alt="missionVision.jpeg"
            className={styles.backgroundImage}
            fill
            src="/missionVision.jpeg"
            sizes="100%"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <img src={image} alt={image} />
        )}
      </div>
    </div>
  );
};

export default PostPreview;
