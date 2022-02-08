import React from "react";
import { WeekdaySelectionWithTimetable } from "./WeekdaySelectionWithTimetable";

export const WeekdaysSelectionWithTimetables = ({
  weekdays,
  getOnRowChangeHandler,
}) => {
  return (
    <div>
      {weekdays.map((weekday, rowIndex) => (
        <WeekdaySelectionWithTimetable
          key={"WEEKDAY_" + rowIndex}
          weekday={rowIndex}
          onRowChange={getOnRowChangeHandler(rowIndex)}
          {...weekday}
        />
      ))}
    </div>
  );
};
