import React from "react";
import styles from "./sidePanelView.module.scss";
import clsx from "clsx";
import Image from "next/image";
import Button from "@/components/Button";

interface SidePanelViewProps {
  buttonLabel: string;
  coverImg: string;
  panelImg: string;
  title: string;
  text: string;
  variant: "left" | "right";
}

const SidePanelView = ({
  buttonLabel,
  coverImg,
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
            <Button text={buttonLabel} />
          ) : (
            <Button text={buttonLabel} variant="red-font" />
          )}
        </div>
        <Image
          alt={panelImg}
          className={styles.backgroundImage}
          fill
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
