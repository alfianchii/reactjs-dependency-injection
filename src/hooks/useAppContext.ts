import { useContext } from "react";
import { AppContext, AppContextValue } from "../contexts/app-context";

export const useAppContext = (): AppContextValue => useContext(AppContext);
