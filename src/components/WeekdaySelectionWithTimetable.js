import React, { Fragment } from "react";
import { Form } from "semantic-ui-react";
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
    <Fragment>
      <Form.Group>
        <Form.Checkbox
          width={3}
          label={getWeekdayAsText(weekday)}
          checked={selected}
          onChange={() => onRowChange("selected", !selected)}
          style={{ marginTop: 10 }}
        />
        <Form.Button
          basic
          type="button"
          onClick={() => onRowChange("useSpecificTimes", !useSpecificTimes)}
          style={{ margin: "0px 8px" }}
          disabled={!selected}
        >
          {useSpecificTimes ? "Don't use" : "Use"} specific times
        </Form.Button>
      </Form.Group>
      {useSpecificTimes && selected && (
        <Timetable
          style={{ paddingBottom: 14 }}
          timetable={timetable}
          setTimetable={timetable => onRowChange("timetable", timetable)}
        />
      )}
    </Fragment>
  );
};
