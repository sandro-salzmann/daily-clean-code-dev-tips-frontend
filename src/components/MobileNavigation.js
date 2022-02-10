import React from "react";
import { useLocation } from "react-router-dom";
import { Icon, Menu } from "semantic-ui-react";
import useNavigation from "../utils/useNavigation";

export const MobileNavigation = () => {
  const { onConfigureClick, onTipsClick } = useNavigation();
  const location = useLocation();

  return (
    <Menu fixed="bottom" fluid widths={2}>
      <Menu.Item
        name="Tips"
        active={location.pathname === "/tips"}
        onClick={onTipsClick}
      >
        <Icon name="lightbulb" />
        Tips
      </Menu.Item>
      <Menu.Item
        name="Settings"
        active={location.pathname === "/settings"}
        onClick={onConfigureClick}
      >
        <Icon name="setting" />
        Settings
      </Menu.Item>
    </Menu>
  );
};
