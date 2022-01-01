import React from "react";
import { Button, Checkbox } from "semantic-ui-react";
import { getWeekdayAsText } from "../utils/getWeekdayAsText";
import { Timetable } from "./Timetable";

export const WeekdaySelectionWithTimetable = ({
  useSpecificTimes,
  timetable,
  weekday,
  selected,
  onRowChange,
}) => {
  return (
    <div style={{ margin: "14px 0px" }}>
      <Checkbox
        width={3}
        label={getWeekdayAsText(weekday)}
        checked={selected}
        onChange={() => onRowChange("selected", !selected)}
        style={{ marginTop: 10 }}
      />
      <Button
        basic
        type="button"
        onClick={() => onRowChange("useSpecificTimes", !useSpecificTimes)}
        style={{ margin: "0px 8px" }}
        disabled={!selected}
      >
        {useSpecificTimes ? "Don't use" : "Use"} specific times
      </Button>
      {useSpecificTimes && selected && (
        <Timetable
          timetable={timetable}
          setTimetable={timetable => onRowChange("timetable", timetable)}
        />
      )}
    </div>
  );
};
