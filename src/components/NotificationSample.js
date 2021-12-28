import React from "react";
import { Message } from "semantic-ui-react";
import { Grid, Menu } from "semantic-ui-react";

// examples from https://github.com/leonardolemie/clean-code-java
const sampleNotifications = [
  {
    title: "Variables: Avoid Mental Mapping",
    text: "Don't force the reader of your code to translate what the variable means. Explicit is better than implicit.",
    time: "03:30 PM",
    showActions: true,
  },
  {
    title: "One level of abstraction per function",
    text: "When you have more than one level of abstraction your function is usually doing too much. Splitting up functions leads to reusability and easier testing.",
    time: "09:00 AM",
  },
  {
    title: "Only comment complex business logic",
    text: "Comments are an apology, not a requirement. Good code mostly documents itself.",
    time: "09:00 AM",
  },
];

export const NotificationSample = () => {
  return sampleNotifications.map(({ title, text, time, showActions }, i) => (
    <Message key={`NotificationSample_${i}`}>
      <Message.Header>
        {title}
        <span style={{ float: "right", fontSize: "1.14285714rem" }}>
          {time}
        </span>
      </Message.Header>
      <p>{text}</p>
      {showActions && (
        <Grid textAlign="center" columns={2} divided>
          <Grid.Row style={{ paddingBottom: 0 }}>
            <Grid.Column>
              <Menu fluid vertical secondary>
                <Menu.Item>Mark as read</Menu.Item>
              </Menu>
            </Grid.Column>
            <Grid.Column>
              <Menu fluid vertical secondary>
                <Menu.Item>Learn more</Menu.Item>
              </Menu>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )}
    </Message>
  ));
};
