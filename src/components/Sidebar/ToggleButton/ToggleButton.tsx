import React from "react";
import { BsListUl } from "react-icons/bs";
import { IoGridOutline } from "react-icons/io5";
import { useGlobalContext } from "../../../context/AppContext";
import styles from "./ToggleButton.module.css";

const ToggleButton: React.FC = () => {
  const { currentView, setCurrentView } = useGlobalContext()!;

  return (
    <div className={styles.toggleButton}>
      <h2>View Toggle</h2>
      <div className={styles.buttons}>
        <button
          style={{
            backgroundColor: currentView === "grid" ? "#99f0c9" : "#f3ebeb",
          }}
          onClick={() => setCurrentView("grid")}
        >
          <IoGridOutline />
        </button>
        <button
          style={{
            backgroundColor: currentView === "list" ? "#99f0c9" : "#f3ebeb",
          }}
          onClick={() => setCurrentView("list")}
        >
          <BsListUl />
        </button>
      </div>
    </div>
  );
};

export default ToggleButton;
