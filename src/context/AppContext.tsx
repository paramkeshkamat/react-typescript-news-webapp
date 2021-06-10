import React, { createContext, useContext, useState } from "react";

type ContextType = {
  currentView: string;
  showFeedbackForm: boolean;
  setCurrentView: React.Dispatch<React.SetStateAction<string>>;
  setShowFeedbackForm: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppContext = createContext<ContextType | undefined>(undefined);

export const AppProvider: React.FC = ({ children }) => {
  const [currentView, setCurrentView] = useState("list");
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  return (
    <AppContext.Provider
      value={{
        currentView,
        setCurrentView,
        showFeedbackForm,
        setShowFeedbackForm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
