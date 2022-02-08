import React, { Fragment } from "react";
import { Button } from "semantic-ui-react";
import useNavigation from "../utils/useNavigation";
import { LanguageSelectionPage } from "./SetupPage/LanguageSelectionPage";
import { SetupFinishedPage } from "./SetupPage/SetupFinishedPage";
import { STEPS } from "./SetupPage/STEPS";
import { TimeSelectionPage } from "./SetupPage/TimeSelectionPage";
import { TimingOverviewPage } from "./SetupPage/TimingOverviewPage";
import { WeekdaySelectionPage } from "./SetupPage/WeekdaySelectionPage";
import { LOCALSTORAGE_CONTEXT_KEY, SetupContext } from "./SetupPageContext";

export const SetupPage = () => {
  const { showHomePage } = useNavigation();
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

  const showLanguageSelection = () => {
    setConfig({ ...config, step: "LANGUAGE_SELECTION" });
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

  const goBack = () => {
    if (step === STEPS.LANGUAGE_SELECTION) showHomePage();
    if (step === STEPS.TIMING_OVERVIEW) showLanguageSelection();
    if (step === STEPS.TIME_SELECTION) showTimingOverview();
    if (step === STEPS.WEEKDAY_SELECTION) showTimeSelection();
  };

  return (
    <Fragment>
      {step !== STEPS.SETUP_FINISH && (
        <Button basic onClick={goBack}>
          Back
        </Button>
      )}
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
    </Fragment>
  );
};
