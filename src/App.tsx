// Components
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import PlaceContentCenter from "./components/PlaceContentCenter";
// Hooks
import useStatus from "./hooks/useStatus";
// Context
import AppProvider from "./contexts/app-context";
import ThemeProvider from "./contexts/theme-context";
import CounterProvider from "./contexts/counter-context";
import Routing from "./routes/Routing";
// Helpers
import { baseUrl } from "./helpers/baseUrlPath";

function App() {
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

                  <Routing />
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
