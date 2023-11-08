import React from "react";
import styles from "./button.module.scss";
import clsx from "clsx";

interface ButtonProps {
  label: string;
  variant?: "red-font" | "red-body";
  padding?: "sm";
  onClick?: () => void;
  href?: string;
}

const Button = ({ label, href, variant, padding, onClick }: ButtonProps) => {
  return (
    <button
      className={clsx(styles.button, {
        [styles.blueFont]: !variant,
        [styles.redFont]: variant === "red-font",
        [styles.redBody]: variant === "red-body",
        [styles.paddingSm]: padding,
      })}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
