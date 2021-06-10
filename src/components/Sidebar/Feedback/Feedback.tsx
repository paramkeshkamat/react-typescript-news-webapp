import React from "react";
import { useGlobalContext } from "../../../context/AppContext";
import styles from "./Feedback.module.css";

const Feedback: React.FC = () => {
  const { showFeedbackForm, setShowFeedbackForm } = useGlobalContext()!;

  return (
    <div className={styles.feedback}>
      <h2>Have Feedback?</h2>
      <button onClick={() => setShowFeedbackForm(!showFeedbackForm)}>
        We're Listening
      </button>
    </div>
  );
};

export default Feedback;
