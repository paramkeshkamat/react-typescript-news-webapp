import React, { useEffect, useRef } from "react";
import Feedback from "./Feedback/Feedback";
import ToggleButton from "./ToggleButton/ToggleButton";
import UserProfile from "./UserProfile/UserProfile";
import FeedbackForm from "./FeedbackForm/FeedbackForm";
import { useGlobalContext } from "../../context/AppContext";
import styles from "./Sidebar.module.css";

const Sidebar: React.FC = () => {
  const { showFeedbackForm, setShowFeedbackForm } = useGlobalContext()!;
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ousideClickEvent = (e: any) => {
      if (!formRef.current?.contains(e.target)) {
        setShowFeedbackForm(false);
      }
    };
    window.addEventListener("click", ousideClickEvent);
    return () => window.removeEventListener("click", ousideClickEvent);
  });

  return (
    <div className={showFeedbackForm ? styles.sidebarBackground : undefined}>
      <div className={styles.sidebar} ref={formRef}>
        <UserProfile />
        {!showFeedbackForm && <ToggleButton />}
        <Feedback />
        <FeedbackForm />
      </div>
    </div>
  );
};

export default Sidebar;
