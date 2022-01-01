import React, { Fragment } from "react";
import { Button, Header } from "semantic-ui-react";
import { LanguageSelection } from "../../components/LanguageSelection";
import { useContext } from "react";
import { SetupContext } from "../SetupPageContext";

export const LanguageSelectionPage = ({
  showTimingOverview,
  toggleLanguageSelection,
}) => {
  const { selectedLanguages } = useContext(SetupContext);

  return (
    <Fragment>
      <Header as="h1">
        Which programming languages are you interested in?
      </Header>
      <p>Please select at least one language.</p>
      <LanguageSelection
        selectedLanguages={selectedLanguages}
        toggleLanguageSelection={toggleLanguageSelection}
      />
      <Button
        primary
        size="big"
        style={{ margin: "14px 0px" }}
        onClick={showTimingOverview}
      >
        Next
      </Button>
    </Fragment>
  );
};
