import React, { Fragment, useContext } from "react";
import { Button, Header } from "semantic-ui-react";
import { Timetable } from "../../components/Timetable";
import { ConfigContext } from "../../ConfigContextProvider";

export const TimeSelectionPage = () => {
  const { timetable, setTimetable, showWeekdaySelection } =
    useContext(ConfigContext);

  return (
    <Fragment>
      <Header as="h1">When do you want to be notified?</Header>
      <Timetable timetable={timetable} setTimetable={setTimetable} />
      <Button
        content="Next"
        primary
        size="big"
        style={{ margin: "14px 0px" }}
        onClick={showWeekdaySelection}
      />
    </Fragment>
  );
};
