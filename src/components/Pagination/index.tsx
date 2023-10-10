import React from "react";
import styles from "./pagination.module.scss";
import clsx from "clsx";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}

const Pagination = ({
  totalPages,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const pages = Array.from(Array(totalPages), (_, x) => x);
  const handlePrevPage = () => setCurrentPage(currentPage - 1);
  const handleNextPage = () => setCurrentPage(currentPage + 1);

  return (
    <div className={styles.container}>
      <p
        className={clsx({
          [styles.disabled]: currentPage === 1,
        })}
        onClick={handlePrevPage}
      >
        Página anterior
      </p>
      <div className={styles.pages}>
        {pages.map((page, idx) => {
          return (
            <div
              className={clsx(styles.pageBullet, {
                [styles.currentPage]: currentPage === idx + 1,
              })}
              key={idx}
            ></div>
          );
        })}
      </div>
      <p
        className={clsx({ [styles.disabled]: currentPage === totalPages })}
        onClick={handleNextPage}
      >
        Siguiente página
      </p>
    </div>
  );
};

export default Pagination;
