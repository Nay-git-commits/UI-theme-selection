import { useSettings } from "../context/SettingsContext";

const PreviewCard = () => {
  const { theme, language } = useSettings();

  const text = {
    en: { message: "This is your preference preview." },
    th: { message: "นี่คือหน้าตัวอย่างการตั้งค่า" },
  };

  return (
    <div className="card preview-card">
      <h3>Preview</h3>
      <p><strong>Current Theme:</strong> {theme.toUpperCase()}</p>
      <p><strong>Current Language:</strong> {language.toUpperCase()}</p>
      
      <div className="message-box">
        {text[language].message}
      </div>
    </div>
  );
};

export default PreviewCard;