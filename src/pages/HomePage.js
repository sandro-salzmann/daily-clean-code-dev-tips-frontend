import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Header, Message } from "semantic-ui-react";
import { LanguageDisplay } from "../components/LanguageDisplay";
import { NotificationSample } from "../components/NotificationSample";
import useConfig from "../utils/useConfig";

export const HomePage = () => {
  const navigate = useNavigate();
  const { isConfigured } = useConfig();

  const onStartClick = () => {
    navigate("/setup");
  };

  const onConfigureClick = () => {
    navigate("/settings");
  };

  const onTipsClick = () => {
    navigate("/tips");
  };

  const onInstallClick = () => {};

  return (
    <Container text>
      <Header textAlign="center" as="h1" style={{ marginBottom: 24.571 }}>
        Get clean code tips as notifications
      </Header>
      <LanguageDisplay />
      <Header as="h2">
        Learn to code cleaner every day. <br />
        No login required.
      </Header>
      {isConfigured && (
        <Message positive>
          <Message.Header>Welcome back :)</Message.Header>
          <p>
            You already set up notifications. Here's some things you can do now:
          </p>
          <Button primary onClick={onConfigureClick}>
            Configure notifications
          </Button>
          <Button primary onClick={onTipsClick}>
            View tips
          </Button>
          <Button basic onClick={onInstallClick}>
            Install app
          </Button>
        </Message>
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
      <Container textAlign="center">
        <Button
          size="big"
          primary
          onClick={isConfigured ? onConfigureClick : onStartClick}
        >
          {isConfigured ? "Configure notifications" : "Start now"}
        </Button>
        <Header as="h3">
          or <a onClick={onInstallClick}>install our app</a>
        </Header>
      </Container>
    </Container>
  );
};
