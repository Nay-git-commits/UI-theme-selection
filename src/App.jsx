import "./App.css";
import { SettingsProvider, useSettings } from "./context/SettingsContext";
import Header from "./components/Header";
import SettingsPanel from "./components/SettingsPanel";
import PreviewCard from "./components/PreviewCard";

// We need a wrapper component to access the Context for the main div class
const MainContent = () => {
  const { theme } = useSettings();

  return (
    // This div controls the entire app's background color
    <div className={`app-container ${theme}`}>
      <div className="content-wrapper">
        <Header />
        <div className="grid">
          <SettingsPanel />
          <PreviewCard />
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <SettingsProvider>
      <MainContent />
    </SettingsProvider>
  );
}

export default App;