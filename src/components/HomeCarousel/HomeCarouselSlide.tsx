import React from "react";
import styles from "./homeCarouselSlide.module.scss";

interface HomeCarouselSlideProps {
  author: string;
  message: string;
}

const HomeCarouselSlide = ({ author, message }: HomeCarouselSlideProps) => {
  return (
    <div className={styles.container}>
      <p>{message}</p>
      <h2>{author}</h2>
    </div>
  );
};

export default HomeCarouselSlide;
