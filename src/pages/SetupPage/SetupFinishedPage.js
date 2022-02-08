import React from "react";
import { Button, Header, Icon } from "semantic-ui-react";
import useNavigation from "../../utils/useNavigation";

export const SetupFinishedPage = () => {
  const { onConfigureClick, onTipsClick, onInstallClick } = useNavigation();

  return (
    <div>
      <Header as="h1">
        <Icon name="check circle" color="green" />
        Great, you're all setup!
      </Header>
      <Header as="h2">
        You can always come back to
        <a href="https://dailycleancode.ml/"> dailycleancode.ml</a> and
        reconfigure your settings.
      </Header>
      <Header as="h2">Or you could install our app with one click!</Header>
      <Button
        size="big"
        style={{ marginTop: 3 }}
        primary
        onClick={onInstallClick}
      >
        Install app
      </Button>
      <Button
        size="big"
        style={{ marginTop: 3 }}
        primary
        basic
        onClick={onTipsClick}
      >
        View tips
      </Button>
      <Button
        size="big"
        style={{ marginTop: 4.5 }}
        primary
        basic
        onClick={onConfigureClick}
      >
        Configure notifications
      </Button>
    </div>
  );
};
