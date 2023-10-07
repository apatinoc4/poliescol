import React from "react";
import styles from "./sidePanelView.module.scss";
import clsx from "clsx";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

interface SidePanelViewProps {
  buttonLabel: string;
  coverImg: string;
  panelImg: string;
  title: string;
  text: string;
  variant: "left" | "right";
  linkTo: string;
}

const SidePanelView = ({
  buttonLabel,
  coverImg,
  linkTo,
  panelImg,
  title,
  text,
  variant,
}: SidePanelViewProps) => {
  return (
    <div
      className={clsx(styles.container, {
        [styles.left]: variant === "left",
        [styles.right]: variant === "right",
      })}
    >
      <div
        className={clsx(styles.sectionContent, {
          [styles.left]: variant === "left",
          [styles.right]: variant === "right",
        })}
      >
        <div
          className={clsx(styles.textContent, {
            [styles.left]: variant === "left",
            [styles.right]: variant === "right",
          })}
        >
          <div className={styles.text}>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          {variant === "left" ? (
            <Link href={linkTo}>
              {" "}
              <Button label={buttonLabel} />
            </Link>
          ) : (
            <Link href={linkTo}>
              <Button label={buttonLabel} variant="red-font" />
            </Link>
          )}
        </div>
        <Image
          alt={panelImg}
          className={styles.backgroundImage}
          fill
          sizes="100%"
          src={`/${panelImg}`}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.coverImage}>
        <Image
          alt={coverImg}
          className={styles.backgroundImage}
          fill
          src={`/${coverImg}`}
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default SidePanelView;
