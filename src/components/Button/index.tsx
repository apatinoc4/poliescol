import React from "react";
import styles from "./button.module.scss";
import clsx from "clsx";

interface ButtonProps {
  text: string;
  variant?: "red-font" | "red-body";
}

const Button = ({ text, variant }: ButtonProps) => {
  return (
    <button
      className={clsx(styles.button, {
        [styles.blueFont]: !variant,
        [styles.redFont]: variant === "red-font",
        [styles.redBody]: variant === "red-body",
      })}
    >
      {text}
    </button>
  );
};

export default Button;
