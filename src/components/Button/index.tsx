import React from "react";
import styles from "./button.module.scss";
import clsx from "clsx";

interface ButtonProps {
  label: string;
  variant?: "red-font" | "red-body";
}

const Button = ({ label, variant }: ButtonProps) => {
  return (
    <button
      className={clsx(styles.button, {
        [styles.blueFont]: !variant,
        [styles.redFont]: variant === "red-font",
        [styles.redBody]: variant === "red-body",
      })}
    >
      {label}
    </button>
  );
};

export default Button;
