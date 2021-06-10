import React, { useEffect, useRef } from "react";
import styles from "./NewsModal.module.css";

interface Props {
  link: string;
  title: string;
  summary: string;
  published: string;
  setShowLink: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewsModal: React.FC<Props> = ({
  link,
  title,
  summary,
  published,
  setShowLink,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ousideClickEvent = (e: any) => {
      if (!modalRef.current?.contains(e.target)) {
        setShowLink(false);
      }
    };
    window.addEventListener("click", ousideClickEvent);
    return () => window.removeEventListener("click", ousideClickEvent);
  });

  return (
    <div className={styles.NewsModalContainer}>
      <div className={styles.NewsModal} ref={modalRef}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.published}>{published}</p>
        <p className={styles.summary}>{summary}</p>
        <p className={styles.link}>
          For more info visit{" "}
          <a href={link} target="_blank" rel="noreferrer">
            {link}
          </a>
        </p>
      </div>
    </div>
  );
};

export default NewsModal;
