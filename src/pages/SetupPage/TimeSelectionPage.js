import React from "react";
import { Button, Header } from "semantic-ui-react";
import { Timetable } from "../../components/Timetable";

export const TimeSelectionPage = ({
  timetable,
  setTimetable,
  showWeekdaySelection,
}) => {
  return (
    <div>
      <Header as="h1">When do you want to be notified?</Header>
      <Timetable timetable={timetable} setTimetable={setTimetable} />
      <Button
        content="Next"
        primary
        size="big"
        style={{ margin: "14px 0px" }}
        onClick={showWeekdaySelection}
      />
    </div>
  );
};
