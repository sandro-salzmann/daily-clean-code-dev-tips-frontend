import React, { Fragment, useContext } from "react";
import { Button, Container, Header, Message } from "semantic-ui-react";
import { LanguageDisplay } from "../components/LanguageDisplay";
import { NotificationSample } from "../components/NotificationSample";
import { ConfigContext } from "../ConfigContextProvider";
import useNavigation from "../utils/useNavigation";

export const HomePage = () => {
  const {
    onStartClick,
    onContinueClick,
    onConfigureClick,
    onTipsClick,
    onInstallClick,
  } = useNavigation();
  const { isConfigured, isConfiguring } = useContext(ConfigContext);

  return (
    <Fragment>
      <Header textAlign="center" as="h2" style={{ marginBottom: 24.571 }}>
        Get clean code tips as notifications
      </Header>
      <LanguageDisplay />
      <Header as="h3">
        Learn to code cleaner every day. <br />
        No login required.
      </Header>
      {isConfigured ? (
        <Message positive>
          <Message.Header>Welcome back :)</Message.Header>
          <p>
            You've already set up notifications. Here's some things you can do
            now:
          </p>
          <Button secondary onClick={onTipsClick}>
            View tips
          </Button>
          <Button secondary onClick={onConfigureClick}>
            Settings
          </Button>
          <Button basic onClick={onInstallClick}>
            Install app
          </Button>
        </Message>
      ) : (
        isConfiguring && (
          <Message warning>
            <Message.Header>Welcome back :)</Message.Header>
            <p>You've already started the setup in the past.</p>
            <Button primary onClick={onContinueClick}>
              Continue setup
            </Button>
          </Message>
        )
      )}
      <p>
        Just select time & weekday you want to be notified with random clean
        code tips of your favourite programming language.
      </p>
      <div
        style={{
          marginTop: 14,
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
        }}
      >
        <NotificationSample />
      </div>
      {!isConfigured && (
        <Container textAlign="center">
          {isConfiguring ? (
            <Fragment>
              <Button size="big" primary onClick={onStartClick}>
                Continue setup
              </Button>
            </Fragment>
          ) : (
            <Button
              size="big"
              primary
              onClick={isConfigured ? onConfigureClick : onStartClick}
            >
              Start now
            </Button>
          )}
          <Header as="h4">
            or
            <Button
              secondary
              basic
              onClick={onInstallClick}
              style={{ marginLeft: 8 }}
            >
              install our app
            </Button>
          </Header>
        </Container>
      )}
    </Fragment>
  );
};
