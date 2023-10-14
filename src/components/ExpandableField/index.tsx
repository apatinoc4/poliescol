"use client";
import React, { FC, PropsWithChildren, useState } from "react";
import styles from "./expandableField.module.scss";
import CustomIcon from "@/components/Icons";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

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

  const bodyVariants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 },
  };

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
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={bodyVariants}
            transition={{ duration: 0.5 }}
            className={styles.body}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpandableField;
