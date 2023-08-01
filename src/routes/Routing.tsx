// Packages
import { Route, Routes } from "react-router-dom";
// Pages
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import Counter from "../pages/Counter";
import CounterSetting from "../pages/CounterSetting";

const baseUrl: string = import.meta.env.BASE_URL;

const Routing = () => {
  return (
    <Routes>
      <Route path={`${baseUrl}`} element={<Home />} />
      <Route path={`${baseUrl}profile`} element={<Profile />} />
      <Route path={`${baseUrl}counter`} element={<Counter />} />
      <Route path={`${baseUrl}counter-settings`} element={<CounterSetting />} />
      <Route path={`*`} element={<NotFound />} />
    </Routes>
  );
};

export default Routing;
