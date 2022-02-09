import useLocalState from "@phntms/use-local-state";
import React, { createContext } from "react";

const LOCALSTORAGE_SETTINGS_KEY = "SETTINGS";
const initSettings = {
  active: true,
  pausedUntil: undefined,
};

export const SettingsContext = createContext();

export const SettingsContextProvider = ({ children }) => {
  const [settings, setSettings] = useLocalState(
    LOCALSTORAGE_SETTINGS_KEY,
    initSettings
  );

  const updateSettings = changes => setSettings({ ...settings, ...changes });

  const pauseNotifications = pausedUntil => updateSettings({ pausedUntil });

  const resumeNotifications = () => updateSettings({ pausedUntil: undefined });

  const disableNotifications = () => updateSettings({ active: false });

  const enableNotifications = () => updateSettings({ active: true });

  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        pauseNotifications,
        resumeNotifications,
        disableNotifications,
        enableNotifications,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
