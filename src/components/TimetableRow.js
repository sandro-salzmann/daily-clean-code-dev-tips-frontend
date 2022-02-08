import React, { Fragment } from "react";
import { Button, Dropdown, Input, List } from "semantic-ui-react";

export const TimetableRow = ({
  amount,
  firstTime,
  secondTime,
  onRemoveClick,
  onChange,
}) => {
  const onChangeAmount = (e, v) => {
    let { value } = v;

    if (!value) onChange({ ...e, target: { name: "amount" } });
    else {
      // take last digit from value
      value = parseInt(value) % 10;

      if (value >= 1 && value <= 9)
        onChange({
          ...e,
          target: { name: "amount", value: parseInt(value) },
        });
    }
  };

  return (
    <List.Item style={{ margin: "14px 0px" }}>
      <Input
        type="number"
        name="amount"
        onChange={onChangeAmount}
        value={amount}
        style={{ width: 40 }}
      />
      <span style={{ margin: "0px 8px" }}>{amount > 1 ? "times" : "time"}</span>
      <Dropdown
        value={firstTime && secondTime ? "between" : "at"}
        options={[
          { key: "at", value: "at", text: "at" },
          { key: "between", value: "between", text: "between" },
        ]}
        onChange={(_e, v) =>
          onChange({
            target: {
              name: "secondTime",
              value: v.value === "at" ? undefined : "17:00",
            },
          })
        }
        compact
      />
      <Input
        style={{
          height: 38,
          transform: "translateY(1.3px)",
          marginLeft: "8px",
        }}
        type="time"
        value={firstTime}
        onChange={onChange}
        name="firstTime"
      />
      {firstTime && secondTime && (
        <Fragment>
          <span style={{ margin: "0px 8px" }}>and</span>
          <Input
            style={{ height: 38, transform: "translateY(1.3px)", marginTop: 4 }}
            type="time"
            value={secondTime}
            onChange={onChange}
            name="secondTime"
          />
        </Fragment>
      )}
      <Button
        type="button"
        icon="x"
        basic
        negative
        onClick={onRemoveClick}
        style={{ margin: "0px 8px" }}
      />
    </List.Item>
  );
};
