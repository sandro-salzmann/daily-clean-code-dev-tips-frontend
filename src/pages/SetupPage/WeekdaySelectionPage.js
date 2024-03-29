import React, { Fragment, useContext } from "react";
import { Button, Header } from "semantic-ui-react";
import { WeekdaysSelectionWithTimetables } from "../../components/WeekdaysSelectionWithTimetables";
import { ConfigContext } from "../../ConfigContextProvider";

export const WeekdaySelectionPage = () => {
  const { weekdays, setWeekdays, showSetupFinish } = useContext(ConfigContext);

  return (
    <Fragment>
      <Header as="h1">On which days do you want to get notified?</Header>
      <WeekdaysSelectionWithTimetables
        weekdays={weekdays}
        getOnRowChangeHandler={rowIndex => (key, value) => {
          setWeekdays(
            weekdays.map((weekday, weekdayIndex) =>
              weekdayIndex === rowIndex ? { ...weekday, [key]: value } : weekday
            )
          );
        }}
      />
      <Button
        primary
        size="big"
        style={{ margin: "14px 0px" }}
        onClick={showSetupFinish}
      >
        Start notifications
      </Button>
    </Fragment>
  );
};
