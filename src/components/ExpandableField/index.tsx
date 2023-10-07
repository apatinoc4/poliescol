"use client";
import React, { FC, PropsWithChildren, useState } from "react";
import styles from "./expandableField.module.scss";
import CustomIcon from "@/components/Icons";
import clsx from "clsx";

interface ExpandableFieldProps {
  title: string;
  variant?: boolean;
}

const ExpandableField: FC<PropsWithChildren<ExpandableFieldProps>> = ({
  children,
  title,
  variant,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      <div
        className={styles.header}
        onClick={() => setIsExpanded((prevState) => !prevState)}
      >
        <h3
          className={clsx({
            [styles.variantTitle]: variant,
          })}
        >
          {title}
        </h3>
        {!variant ? (
          <p>{isExpanded ? "Esconder" : "Leer"}</p>
        ) : (
          <>
            {!isExpanded ? (
              <CustomIcon icon="arrowDown" />
            ) : (
              <CustomIcon icon="arrowUp" />
            )}
          </>
        )}
      </div>
      {isExpanded && <div className={styles.body}>{children}</div>}
    </div>
  );
};

export default ExpandableField;
