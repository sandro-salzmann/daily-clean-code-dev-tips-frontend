import useLocalState from "@phntms/use-local-state";
import React from "react";
import { LanguageSelectionPage } from "./SetupPage/LanguageSelectionPage";
import { SetupFinishedPage } from "./SetupPage/SetupFinishedPage";
import { STEPS } from "./SetupPage/STEPS";
import { TimeSelectionPage } from "./SetupPage/TimeSelectionPage";
import { TimingOverviewPage } from "./SetupPage/TimingOverviewPage";
import { WeekdaySelectionPage } from "./SetupPage/WeekdaySelectionPage";
import { LOCALSTORAGE_CONTEXT_KEY, SetupContext } from "./SetupPageContext";

export const SetupPage = () => {
  const [config, setConfig] = useLocalState(LOCALSTORAGE_CONTEXT_KEY, {
    step: "LANGUAGE_SELECTION",
    selectedLanguages: [],
    timetable: [
      {
        amount: 1,
        firstTime: "09:00",
        secondTime: "17:00",
      },
    ],
  });

  const { step, selectedLanguages, timetable, weekdays } = config;

  const setSelectedLanguages = selectedLanguages => {
    setConfig({ ...config, selectedLanguages });
  };

  const setTimetable = timetable => {
    setConfig({ ...config, timetable });
  };

  const setWeekdays = weekdays => {
    setConfig({ ...config, weekdays });
  };

  const showTimingOverview = () => {
    setConfig({ ...config, step: "TIMING_OVERVIEW" });
  };

  const showTimeSelection = () => {
    setConfig({ ...config, step: "TIME_SELECTION" });
  };

  const showWeekdaySelection = () => {
    setConfig({
      ...config,
      step: "WEEKDAY_SELECTION",
      weekdays: Array.apply(null, Array(7)).map((_row, i) => ({
        selected: i < 5,
        useSpecificTimes: false,
        timetable,
      })),
    });
  };

  const showSetupFinish = () => {
    setConfig({ ...config, step: "SETUP_FINISH" });
  };

  const toggleLanguageSelection = language => {
    setSelectedLanguages(
      selectedLanguages.includes(language)
        ? selectedLanguages.filter(l => l !== language)
        : [...selectedLanguages, language]
    );
  };

  return (
    <SetupContext.Provider value={config}>
      {step === STEPS.SETUP_FINISH && <SetupFinishedPage />}
      {step === STEPS.LANGUAGE_SELECTION && (
        <LanguageSelectionPage
          showTimingOverview={showTimingOverview}
          toggleLanguageSelection={toggleLanguageSelection}
        />
      )}
      {step === STEPS.TIMING_OVERVIEW && (
        <TimingOverviewPage
          showSetupFinish={showSetupFinish}
          showTimeSelection={showTimeSelection}
        />
      )}
      {step === STEPS.TIME_SELECTION && (
        <TimeSelectionPage
          timetable={timetable}
          setTimetable={setTimetable}
          showWeekdaySelection={showWeekdaySelection}
        />
      )}
      {step === STEPS.WEEKDAY_SELECTION && (
        <WeekdaySelectionPage
          showSetupFinish={showSetupFinish}
          weekdays={weekdays}
          setWeekdays={setWeekdays}
        />
      )}
    </SetupContext.Provider>
  );
};
