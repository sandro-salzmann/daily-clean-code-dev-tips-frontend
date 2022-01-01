import React from "react";
import { Form } from "semantic-ui-react";
import { WeekdaySelectionWithTimetable } from "./WeekdaySelectionWithTimetable";

export const WeekdaysSelectionWithTimetables = ({
  weekdays,
  getOnRowChangeHandler,
}) => {
  return (
    <Form unstackable>
      {weekdays.map((weekday, rowIndex) => (
        <WeekdaySelectionWithTimetable
          key={"WEEKDAY_" + rowIndex}
          weekday={rowIndex}
          onRowChange={getOnRowChangeHandler(rowIndex)}
          {...weekday}
        />
      ))}
    </Form>
  );
};
