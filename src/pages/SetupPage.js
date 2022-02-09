import React, { Fragment, useContext } from "react";
import { Button } from "semantic-ui-react";
import { ConfigContext } from "../ConfigContextProvider";
import useNavigation from "../utils/useNavigation";
import { LanguageSelectionPage } from "./SetupPage/LanguageSelectionPage";
import { SetupFinishedPage } from "./SetupPage/SetupFinishedPage";
import { STEPS } from "./SetupPage/STEPS";
import { TimeSelectionPage } from "./SetupPage/TimeSelectionPage";
import { TimingOverviewPage } from "./SetupPage/TimingOverviewPage";
import { WeekdaySelectionPage } from "./SetupPage/WeekdaySelectionPage";

export const SetupPage = () => {
  const { showHomePage } = useNavigation();
  const { step, showLanguageSelection, showTimingOverview, showTimeSelection } =
    useContext(ConfigContext);

  const tabs = {
    [STEPS.LANGUAGE_SELECTION]: {
      component: <LanguageSelectionPage />,
      goBack: showHomePage,
    },
    [STEPS.TIMING_OVERVIEW]: {
      component: <TimingOverviewPage />,
      goBack: showLanguageSelection,
    },
    [STEPS.TIME_SELECTION]: {
      component: <TimeSelectionPage />,
      goBack: showTimingOverview,
    },
    [STEPS.WEEKDAY_SELECTION]: {
      component: <WeekdaySelectionPage />,
      goBack: showTimeSelection,
    },
    [STEPS.SETUP_FINISH]: {
      component: <SetupFinishedPage />,
    },
  };

  const { component, goBack } = tabs[step];

  return (
    <Fragment>
      {goBack && <Button basic onClick={goBack} content="Back" />}
      {component}
    </Fragment>
  );
};
