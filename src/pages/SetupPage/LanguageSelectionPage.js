import React, { Fragment, useContext } from "react";
import { Button, Header } from "semantic-ui-react";
import { LanguageSelection } from "../../components/LanguageSelection";
import { ConfigContext } from "../../ConfigContextProvider";

export const LanguageSelectionPage = () => {
  const { selectedLanguages, showTimingOverview, toggleLanguageSelection } =
    useContext(ConfigContext);

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
        disabled={selectedLanguages.length === 0}
      >
        Next
      </Button>
    </Fragment>
  );
};
