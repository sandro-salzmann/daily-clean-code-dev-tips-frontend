import { useNavigate } from "react-router-dom";

function useNavigation() {
  const navigate = useNavigate();

  const onStartClick = () => {
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

  return { onStartClick, onConfigureClick, onTipsClick, onInstallClick };
}

export default useNavigation;
