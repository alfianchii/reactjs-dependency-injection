import { Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import PlaceContentCenter from "./components/PlaceContentCenter";
import useStatus from "./hooks/useStatus";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import AppProvider from "./contexts/app-context";
import Reducer from "./pages/Reducer";
import ReducerProvider from "./contexts/reducer-context";

function App() {
  const status: boolean = useStatus();

  return (
    <>
      <AppProvider>
        <ReducerProvider>
          <PlaceContentCenter>
            <Card>
              <Card.Title className={`select-none`}>
                {status ? "✅ Online!" : "❌ Disconnected ..."}
              </Card.Title>

              <Card.Body>
                <Navbar
                  elements={{
                    home: "/reactjs-dependency-injection/",
                    profile: "/reactjs-dependency-injection/profile",
                    reducer: "/reactjs-dependency-injection/reducer",
                  }}
                />

                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/reducer" element={<Reducer />} />
                </Routes>
              </Card.Body>
            </Card>
          </PlaceContentCenter>
        </ReducerProvider>
      </AppProvider>
    </>
  );
}

export default App;
