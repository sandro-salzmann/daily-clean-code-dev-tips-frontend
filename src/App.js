import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { SettingsPage } from "./pages/SettingsPage";
import { SetupPage } from "./pages/SetupPage";
import { TipsPage } from "./pages/TipsPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
    <h1>Daily Clean Code Dev Tips</h1>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="setup" element={<SetupPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="tips" element={<TipsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
