import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ConfigContext } from "../ConfigContextProvider";

function useNavigation() {
  const navigate = useNavigate();
  const { showLanguageSelection } = useContext(ConfigContext);

  const onStartClick = () => {
    showLanguageSelection();
    navigate("/setup");
  };

  const onContinueClick = () => {
    navigate("/setup");
  };

  const onConfigureClick = () => {
    navigate("/settings");
  };

  const onTipsClick = () => {
    navigate("/tips");
  };

  const onInstallClick = () => {
    // PWA not setup yet.
  };

  const showHomePage = () => {
    navigate("/");
  };

  return {
    onStartClick,
    onContinueClick,
    onConfigureClick,
    onTipsClick,
    onInstallClick,
    showHomePage,
  };
}

export default useNavigation;
