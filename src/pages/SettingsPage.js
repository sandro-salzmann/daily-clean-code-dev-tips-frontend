import React, { Fragment, useContext, useState } from "react";
import { Button, Input } from "semantic-ui-react";
import { SettingsContext } from "../SettingsContextProvider";
import { ConfigurationPage } from "./SettingsPage/ConfigurationPage";

export const SettingsPage = () => {
  const {
    active,
    pausedUntil,
    pauseNotifications,
    resumeNotifications,
    disableNotifications,
    enableNotifications,
  } = useContext(SettingsContext);
  const [showConfiguration, setShowConfiguration] = useState(false);
  const date = new Date();
  date.setDate(date.getDate() + 7);
  const [pauseDate, setPauseDate] = useState(date.toISOString().split("T")[0]);

  const configureNotifications = () => setShowConfiguration(true);

  const backToSettings = () => setShowConfiguration(false);

  const onPauseDateChange = (_e, v) => setPauseDate(v.value);

  const onPauseNotificationsClick = () => pauseNotifications(pauseDate);

  return showConfiguration ? (
    <ConfigurationPage backToSettings={backToSettings} />
  ) : (
    <Fragment>
      <h2>
        Notifications are{" "}
        {active && !pausedUntil ? (
          <span style={{ color: "green" }}>active</span>
        ) : (
          <span style={{ color: "red" }}>inactive</span>
        )}
      </h2>
      {!pausedUntil && active ? (
        <Fragment>
          <h3>Configuring notifications</h3>
          <p>You can change your notifications configuration.</p>
          <Button primary onClick={configureNotifications}>
            Configure notifications
          </Button>
          <h3>Pausing notifications</h3>
          <p>You can pause notifications for a certain time.</p>
          <Input
            value={pauseDate}
            onChange={onPauseDateChange}
            type="date"
            label={
              <Button onClick={onPauseNotificationsClick}>
                Pause notifications
              </Button>
            }
            labelPosition="right"
          />
          <h3>Disabling notifications</h3>
          <p>
            You can disable notifications permanently. Your configuration will
            not be lost and you can resume at any time.
          </p>
          <Button negative onClick={disableNotifications}>
            Disable notifications
          </Button>
        </Fragment>
      ) : pausedUntil && active ? (
        <Fragment>
          <p>
            Notifications are stopped until{" "}
            {new Date(pausedUntil).toLocaleDateString()}.
          </p>
          <Button primary onClick={resumeNotifications}>
            Resume notifications
          </Button>
        </Fragment>
      ) : (
        <Fragment>
          <p>Notifications are disabled until you enable them.</p>
          <Button primary onClick={enableNotifications}>
            Activate notifications
          </Button>
        </Fragment>
      )}
    </Fragment>
  );
};
