import React, { useState } from "react";
import NewsModal from "../../NewsModal/NewsModal";
import { VscChromeClose } from "react-icons/vsc";
import styles from "./GridViewCard.module.css";

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
    <div className={styles.GridViewCard}>
      <div className={styles.cardContent}>
        <div className={styles.close}>
          <button onClick={() => removeNews(id)}>
            <VscChromeClose />
          </button>
        </div>
        <div className={styles.cardText} onClick={() => setShowLink(true)}>
          <h2 className={styles.title}>
            {title?.length > 55 ? `${title.substr(0, 55)}...` : title}
          </h2>
          <p className={styles.summary}>
            {summary?.length > 170 ? `${summary.substr(0, 180)}...` : summary}
          </p>
          <p className={styles.published}>{published}</p>
        </div>
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
