import { useSettings } from "../context/SettingsContext";

const Header = () => {
  const { language } = useSettings();

  // Simple dictionary for translations
  const text = {
    en: { title: "Welcome" },
    th: { title: "ยินดีต้อนรับ" },
  };

  return (
    <header className="header">
      <h1>{text[language].title}</h1>
    </header>
  );
};

export default Header;