import React, { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import styles from "./ListViewCard.module.css";
import NewsModal from "../../NewsModal/NewsModal";

interface Props {
  id: number;
  link: string;
  published: string;
  summary: string;
  title: string;
  removeNews: (id: number) => void;
}

const ListViewCard: React.FC<Props> = ({
  id,
  link,
  published,
  summary,
  title,
  removeNews,
}) => {
  const [showLink, setShowLink] = useState(false);

  return (
    <div className={styles.ListViewCard}>
      <div className={styles.cardContent} onClick={() => setShowLink(true)}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.summary}>
          {summary?.length > 30 ? `${summary.substr(0, 120)}...` : summary}
        </p>
        <p className={styles.published}>{published}</p>
      </div>
      <div className={styles.close}>
        <button onClick={() => removeNews(id)}>
          <VscChromeClose />
        </button>
      </div>
      {showLink && (
        <NewsModal
          link={link}
          setShowLink={setShowLink}
          title={title}
          summary={summary}
          published={published}
        />
      )}
    </div>
  );
};

export default ListViewCard;
