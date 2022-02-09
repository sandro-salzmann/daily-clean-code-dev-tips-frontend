import React, { Fragment, useContext } from "react";
import { Button } from "semantic-ui-react";
import { LanguageSelection } from "../../components/LanguageSelection";
import { Timetable } from "../../components/Timetable";
import { WeekdaysSelectionWithTimetables } from "../../components/WeekdaysSelectionWithTimetables";
import { ConfigContext } from "../../ConfigContextProvider";

export const ConfigurationPage = ({ backToSettings }) => {
  const {
    selectedLanguages,
    timetable,
    weekdays,
    setTimetable,
    setWeekdays,
    toggleLanguageSelection,
  } = useContext(ConfigContext);

  const getOnRowChangeHandler = rowIndex => (key, value) => {
    setWeekdays(
      weekdays.map((weekday, weekdayIndex) =>
        weekdayIndex === rowIndex ? { ...weekday, [key]: value } : weekday
      )
    );
  };

  return (
    <Fragment>
      <Button primary onClick={backToSettings}>
        Back
      </Button>
      <h2>Language selection</h2>
      <LanguageSelection
        selectedLanguages={selectedLanguages}
        toggleLanguageSelection={toggleLanguageSelection}
      />
      <h2>Time selection</h2>
      <Timetable timetable={timetable} setTimetable={setTimetable} />
      <h2>Weekday selection</h2>
      <WeekdaysSelectionWithTimetables
        weekdays={weekdays}
        getOnRowChangeHandler={getOnRowChangeHandler}
      />
      <br />
    </Fragment>
  );
};
