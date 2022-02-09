import useLocalState from "@phntms/use-local-state";
import React, { createContext, useEffect } from "react";
import { STEPS } from "./pages/SetupPage/STEPS";

const LOCALSTORAGE_CONTEXT_KEY = "CONFIG";
const initConfig = {
  isConfigured: false,
  isConfiguring: false,
  step: undefined,
  selectedLanguages: [],
  timetable: [
    {
      amount: 1,
      firstTime: "09:00",
      secondTime: "17:00",
    },
  ],
  weekdays: Array.apply(null, Array(7)).map((_weekday, i) => ({
    selected: i < 5,
    useSpecificTimes: false,
    timetable: undefined,
  })),
};

export const ConfigContext = createContext();

export const ConfigContextProvider = ({ children }) => {
  const [config, setConfig] = useLocalState(
    LOCALSTORAGE_CONTEXT_KEY,
    initConfig
  );

  const updateConfig = changes => setConfig({ ...config, ...changes });

  const setSelectedLanguages = selectedLanguages => {
    updateConfig({ selectedLanguages });
  };

  const setTimetable = timetable => {
    updateConfig({ timetable });
  };

  const setWeekdays = weekdays => {
    updateConfig({ weekdays });
  };

  const showLanguageSelection = () => {
    updateConfig({ step: STEPS.LANGUAGE_SELECTION });
  };

  const showTimingOverview = () => {
    updateConfig({ step: STEPS.TIMING_OVERVIEW });
  };

  const showTimeSelection = () => {
    updateConfig({ step: STEPS.TIME_SELECTION });
  };

  const showWeekdaySelection = () => {
    updateConfig({ step: STEPS.WEEKDAY_SELECTION });
  };

  const showSetupFinish = () => {
    updateConfig({ step: STEPS.SETUP_FINISH });
  };

  const toggleLanguageSelection = language => {
    const { selectedLanguages } = config;

    setSelectedLanguages(
      selectedLanguages.includes(language)
        ? selectedLanguages.filter(l => l !== language)
        : [...selectedLanguages, language]
    );
  };

  useEffect(() => {
    const { step } = config;

    if (step) {
      if (step === STEPS.SETUP_FINISH)
        updateConfig({ isConfigured: true, isConfiguring: false });
      else updateConfig({ isConfigured: false, isConfiguring: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config.step]);

  useEffect(() => {
    updateConfig({
      weekdays: config.weekdays.map(weekday =>
        weekday.useSpecificTimes
          ? weekday
          : { ...weekday, timetable: config.timetable }
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config.timetable]);

  return (
    <ConfigContext.Provider
      value={{
        ...config,
        setTimetable,
        setWeekdays,
        showLanguageSelection,
        showTimingOverview,
        showTimeSelection,
        showWeekdaySelection,
        showSetupFinish,
        toggleLanguageSelection,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};
