import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { Header } from "./components/Header";
import { MobileNavigation } from "./components/MobileNavigation";
import { ConfigContext } from "./ConfigContextProvider";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { SettingsPage } from "./pages/SettingsPage";
import { SetupPage } from "./pages/SetupPage";
import { TipsPage } from "./pages/TipsPage";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 560px)" });
  const { isConfigured } = useContext(ConfigContext);

  return (
    <div style={{ padding: "24.571px 0px" }}>
      <BrowserRouter>
        <Container text>
          <Header />
          <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="setup" element={<SetupPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="tips" element={<TipsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Container>
        {isMobile && isConfigured && <MobileNavigation />}
      </BrowserRouter>
    </div>
  );
}

export default App;
