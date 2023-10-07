"use client";
import React, { useState } from "react";
import styles from "./infoCard.module.scss";
import CustomIcon from "@/components/Icons";
import IconButton from "@mui/material/IconButton";

interface InfoCardProps {
  title: string;
  body: string;
}

const InfoCard = ({ body, title }: InfoCardProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h6>{title}</h6>
        <IconButton onClick={() => setIsExpanded((prevState) => !prevState)}>
          {!isExpanded ? (
            <CustomIcon icon="arrowDown" />
          ) : (
            <CustomIcon icon="arrowUp" />
          )}
        </IconButton>
      </div>
      {isExpanded && (
        <div className={styles.body}>
          <p>{body}</p>
        </div>
      )}
    </div>
  );
};

export default InfoCard;
