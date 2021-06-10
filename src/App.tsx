import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import ListView from "./components/ListView/ListView";
import GridView from "./components/GridView/GridView";
import { useGlobalContext } from "./context/AppContext";

interface NewsData {
  id: number;
  link: string;
  published: string;
  summary: string;
  title: string;
}

const App: React.FC = () => {
  const [newsData, setNewsData] = useState<NewsData[]>([]);
  const { currentView } = useGlobalContext()!;

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch("https://api.first.org/data/v1/news");
        const data = await response.json();
        setNewsData(data.data.reverse());
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Sidebar />
      {currentView === "grid" && (
        <GridView newsData={newsData} setNewsData={setNewsData} />
      )}
      {currentView === "list" && (
        <ListView newsData={newsData} setNewsData={setNewsData} />
      )}
    </div>
  );
};

export default App;
