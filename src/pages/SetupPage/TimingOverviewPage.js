import React from "react";
import { Button, Header, Icon } from "semantic-ui-react";

export const TimingOverviewPage = ({ showSetupFinish, showTimeSelection }) => {
  return (
    <div>
      <Header as="h1">Per default we notify you as follows:</Header>
      <Header as="h2">
        <Icon name="time" />
        1x between 9am to 5pm on workdays (Mo-Fr)
      </Header>
      <Header as="h2">Do you want to change that?</Header>
      <Button
        size="big"
        style={{ marginTop: 14 }}
        onClick={showTimeSelection}
        primary
      >
        Yes, let me change that
      </Button>
      <Button
        size="big"
        style={{ marginTop: 14 }}
        onClick={showSetupFinish}
        primary
        basic
      >
        No, keep these settings
      </Button>
    </div>
  );
};
