import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { SettingsPage } from "./pages/SettingsPage";
import { SetupPage } from "./pages/SetupPage";
import { TipsPage } from "./pages/TipsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <div style={{ padding: "24.571px 0px" }}>
      <BrowserRouter>
        <Container text>
          <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="setup" element={<SetupPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="tips" element={<TipsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
