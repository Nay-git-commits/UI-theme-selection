import { createContext, useState, useEffect, useContext } from "react";

// 1. Make sure this is NOT exported
const SettingsContext = createContext();

// 2. This is your Component (allowed to be exported)
export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(() => {
    const savedSettings = localStorage.getItem("app-settings");
    return savedSettings
      ? JSON.parse(savedSettings)
      : { theme: "light", language: "en" };
  });

  useEffect(() => {
    localStorage.setItem("app-settings", JSON.stringify(settings));
  }, [settings]);

  const setTheme = (theme) => {
    setSettings((prev) => ({ ...prev, theme }));
  };

  const setLanguage = (language) => {
    setSettings((prev) => ({ ...prev, language }));
  };

  const resetSettings = () => {
    setSettings({ theme: "light", language: "en" });
  };

  return (
    <SettingsContext.Provider
      value={{
        theme: settings.theme,
        language: settings.language,
        setTheme,
        setLanguage,
        resetSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

// 3. ADD THIS COMMENT LINE RIGHT HERE 👇
// eslint-disable-next-line react-refresh/only-export-components
export const useSettings = () => useContext(SettingsContext);