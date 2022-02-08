import React from "react";
import { Button, Form, List } from "semantic-ui-react";
import { TimetableRow } from "./TimetableRow";

export const Timetable = ({ timetable, setTimetable }) => {
  const getOnRemoveRowClickHandler = rowIndex => () => {
    setTimetable(timetable.filter((_x, i) => i !== rowIndex));
  };

  const getOnChangeRowHandler = rowIndex => e => {
    setTimetable(
      timetable.map((n, i) =>
        i === rowIndex
          ? {
              ...n,
              [e.target.name]: e.target.value,
            }
          : n
      )
    );
  };

  const onAddRowClick = () =>
    setTimetable([...timetable, { amount: 1, firstTime: "09:00" }]);

  return (
    <div>
      <Form style={{ marginBottom: 14 }}>
        <List>
          {timetable.map((row, rowIndex) => (
            <TimetableRow
              key={rowIndex}
              {...row}
              onRemoveClick={getOnRemoveRowClickHandler(rowIndex)}
              onChange={getOnChangeRowHandler(rowIndex)}
            />
          ))}
        </List>
      </Form>
      <Button style={{ marginTop: 3 }} onClick={onAddRowClick}>
        Add row
      </Button>
    </div>
  );
};
