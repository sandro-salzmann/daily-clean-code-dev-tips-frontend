import { useState, useEffect } from "react";
import { STEPS } from "../pages/SetupPage/STEPS";
import { LOCALSTORAGE_CONTEXT_KEY } from "../pages/SetupPageContext";

function useConfig() {
  const [isConfigured, setIsConfigured] = useState(false);
  const [isConfiguring, setIsConfiguring] = useState(false);

  useEffect(() => {
    let config = window.localStorage.getItem(LOCALSTORAGE_CONTEXT_KEY);
    if (config) {
      config = JSON.parse(config);
      if (config.step === STEPS.SETUP_FINISH) {
        setIsConfigured(true);
      } else {
        setIsConfiguring(true);
      }
    }
  }, []);

  const deleteConfig = () => {
    setIsConfiguring(false);
    window.localStorage.removeItem(LOCALSTORAGE_CONTEXT_KEY);
  };

  return { isConfigured, setIsConfigured, isConfiguring, deleteConfig };
}

export default useConfig;
