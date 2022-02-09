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
      render: LanguageSelectionPage,
      goBack: showHomePage,
    },
    [STEPS.TIMING_OVERVIEW]: {
      render: TimingOverviewPage,
      goBack: showLanguageSelection,
    },
    [STEPS.TIME_SELECTION]: {
      render: TimeSelectionPage,
      goBack: showTimingOverview,
    },
    [STEPS.WEEKDAY_SELECTION]: {
      render: WeekdaySelectionPage,
      goBack: showTimeSelection,
    },
    [STEPS.SETUP_FINISH]: {
      render: SetupFinishedPage,
    },
  };

  const { render, goBack } = tabs[step];

  return (
    <Fragment>
      {goBack && <Button basic onClick={goBack} content="Back" />}
      {render()}
    </Fragment>
  );
};
