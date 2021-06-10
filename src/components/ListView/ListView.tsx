import React, { useState } from "react";
import ListViewCard from "./ListViewCard/ListViewCard";
import Pagination from "../Pagination/Pagination";
import styles from "./ListView.module.css";

interface NewsData {
  id: number;
  link: string;
  published: string;
  summary: string;
  title: string;
}

interface Props {
  newsData: NewsData[];
  setNewsData: React.Dispatch<React.SetStateAction<NewsData[]>>;
}

const NEWS_PER_PAGE = 5;
const TOTAL_PAGES = 3;

const ListView: React.FC<Props> = ({ newsData, setNewsData }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const removeNews = (id: number) => {
    setNewsData(newsData.filter((data) => data.id !== id));
  };

  const handleClick = (num: number) => setCurrentPage(num);
  const handleNext = () => setCurrentPage((prev) => prev + 1);
  const handlePrev = () => setCurrentPage((prev) => prev - 1);

  const startIndex = currentPage * NEWS_PER_PAGE;
  const selectedNews = newsData.slice(startIndex, startIndex + NEWS_PER_PAGE);

  return (
    <div className={styles.ListView}>
      <div className={styles.ListViewCards}>
        {selectedNews.map((data) => (
          <ListViewCard key={data.id} {...data} removeNews={removeNews} />
        ))}
      </div>
      {newsData.length > 0 && (
        <Pagination
          totalPages={TOTAL_PAGES}
          currentPage={currentPage}
          handleClick={handleClick}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      )}
    </div>
  );
};

export default ListView;
