// Packages
import { Routes, Route } from "react-router-dom";
// Components
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import PlaceContentCenter from "./components/PlaceContentCenter";
// Hooks
import useStatus from "./hooks/useStatus";
// Pages
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Counter from "./pages/Counter";
import CounterSetting from "./pages/CounterSetting";
// Context
import AppProvider from "./contexts/app-context";
import ThemeProvider from "./contexts/theme-context";
import CounterProvider from "./contexts/counter-context";

function App() {
  const baseUrl: string = import.meta.env.BASE_URL;
  const status: boolean = useStatus();

  return (
    <>
      <AppProvider>
        <ThemeProvider>
          <CounterProvider>
            <PlaceContentCenter className={`box-border`}>
              <Card>
                <Card.Title className={`select-none`}>
                  {status ? "✅ Online!" : "❌ Disconnected ..."}
                </Card.Title>

                <Card.Body>
                  <Navbar
                    elements={{
                      home: baseUrl,
                      profile: `${baseUrl}profile`,
                      counter: `${baseUrl}counter`,
                      counterSettings: `${baseUrl}counter-settings`,
                    }}
                  />

                  <Routes>
                    <Route path={`${baseUrl}`} element={<Home />} />
                    <Route path={`${baseUrl}profile`} element={<Profile />} />
                    <Route path={`${baseUrl}counter`} element={<Counter />} />
                    <Route
                      path={`${baseUrl}counter-settings`}
                      element={<CounterSetting />}
                    />
                    <Route path={`*`} element={<NotFound />} />
                  </Routes>
                </Card.Body>
              </Card>
            </PlaceContentCenter>
          </CounterProvider>
        </ThemeProvider>
      </AppProvider>
    </>
  );
}

export default App;
