import { useSettings } from "../context/SettingsContext";

const SettingsPanel = () => {
  const { theme, language, setTheme, setLanguage, resetSettings } = useSettings();

  return (
    <div className="card settings-panel">
      <h3>Control Panel</h3>
      
      {/* Theme Selector */}
      <div className="control-group">
        <label>Theme:</label>
        <button 
          className={theme === "light" ? "active" : ""} 
          onClick={() => setTheme("light")}
        >
          Light ☀️
        </button>
        <button 
          className={theme === "dark" ? "active" : ""} 
          onClick={() => setTheme("dark")}
        >
          Dark 🌙
        </button>
      </div>

      {/* Language Selector */}
      <div className="control-group">
        <label>Language:</label>
        <select 
          value={language} 
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">English (EN)</option>
          <option value="th">Thai (TH)</option>
        </select>
      </div>

      <hr />

      {/* Reset Button */}
      <button className="reset-btn" onClick={resetSettings}>
        Reset to Defaults
      </button>
    </div>
  );
};

export default SettingsPanel;