import React from "react";
import { useLocation } from "react-router-dom";
import { Button, Divider } from "semantic-ui-react";
import useNavigation from "../utils/useNavigation";
import { useMediaQuery } from "react-responsive";

export const Header = () => {
  const { onConfigureClick, onTipsClick } = useNavigation();
  const { pathname } = useLocation();
  const isSmall = useMediaQuery({ query: "(max-width: 720px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 560px)" });

  return (
    <div>
      <h1 style={{ display: "inline-block" }}>
        <a href="https://dailycleancode.ml/">
          {" "}
          {isSmall && !isMobile ? "Home" : "dailycleancode.ml"}
        </a>
        {pathname !== "/" &&
          ` \\ ${pathname.charAt(1).toUpperCase() + pathname.slice(2)}`}
      </h1>
      {!isMobile && (
        <div style={{ float: "right" }}>
          <Button
            primary
            size="big"
            content="Tips"
            icon="lightbulb outline"
            labelPosition="left"
            onClick={onTipsClick}
          />
          <Button
            style={{ marginLeft: 7 }}
            primary
            size="big"
            content="Settings"
            icon="setting"
            labelPosition="left"
            onClick={onConfigureClick}
          />
        </div>
      )}
      <Divider style={isMobile ? { marginTop: 0 } : {}} />
    </div>
  );
};
