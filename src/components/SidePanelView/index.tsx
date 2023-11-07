"use client";

import React from "react";
import styles from "./sidePanelView.module.scss";
import clsx from "clsx";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";
import useIntersecting from "hooks/useIntersecting";

interface SidePanelViewProps {
  buttonLabel: string;
  coverImg: string;
  panelImg: string;
  title: string;
  text: string;
  variant: "left" | "right";
  linkTo: string;
  coverSize?: "lg";
  landing?: boolean;
}

const SidePanelView = ({
  buttonLabel,
  coverImg,
  coverSize,
  linkTo,
  landing,
  panelImg,
  title,
  text,
  variant,
}: SidePanelViewProps) => {
  const [elementRef, isIntersecting] = useIntersecting({
    threshold: 0.4,
  });
  const [elementRef2, isIntersecting2] = useIntersecting({
    threshold: 0.4,
  });
  return (
    <div
      className={clsx(styles.container, {
        [styles.left]: variant === "left",
        [styles.right]: variant === "right",
        [styles.landing]: landing,
      })}
    >
      <div
        className={clsx(styles.sectionContent, {
          [styles.left]: variant === "left",
          [styles.right]: variant === "right",
          [styles.landing]: landing,
        })}
      >
        <div
          className={clsx(styles.textContent, {
            [styles.left]: variant === "left",
            [styles.right]: variant === "right",
            [styles.landing]: landing,
          })}
        >
          <div
            ref={elementRef as React.MutableRefObject<any>}
            className={clsx(styles.text, {
              [styles.offset]:
                (!isIntersecting && variant === "left") ||
                (!isIntersecting && variant === "right" && landing) ||
                (!isIntersecting && variant === "right" && coverSize),
            })}
          >
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          {variant === "left" ? (
            <Link href={linkTo}>
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
      <div
        ref={elementRef2 as React.MutableRefObject<any>}
        className={clsx(styles.coverImage, {
          [styles.offset]: !isIntersecting2 && variant === "left",
          [styles.largeCover]: coverSize === "lg",
          [styles.notLanding]: !landing,
        })}
      >
        <Image
          alt={coverImg}
          className={styles.backgroundImage}
          fill
          sizes="100%"
          src={`/${coverImg}`}
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default SidePanelView;
