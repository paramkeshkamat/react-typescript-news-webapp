import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import styles from "./Pagination.module.css";

interface Props {
  totalPages: number;
  currentPage: number;
  handleClick: (num: number) => void;
  handleNext: () => void;
  handlePrev: () => void;
}

const Pagination: React.FC<Props> = ({
  totalPages,
  currentPage,
  handleClick,
  handleNext,
  handlePrev,
}) => {
  const pages = [];
  for (let i = 0; i < totalPages; i++) pages.push(i);

  return (
    <div className={styles.Pagination}>
      {currentPage !== 0 && (
        <button onClick={handlePrev}>
          <FiArrowLeft />
        </button>
      )}
      {pages.map((num) => (
        <button
          key={num}
          onClick={() => handleClick(num)}
          className={`${styles.btn} ${
            currentPage === num ? styles.activeButton : undefined
          }`}
        >
          {num + 1}
        </button>
      ))}
      {currentPage !== totalPages - 1 && (
        <button onClick={handleNext}>
          <FiArrowRight />
        </button>
      )}
    </div>
  );
};

export default Pagination;
