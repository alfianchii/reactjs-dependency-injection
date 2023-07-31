import { useContext } from "react";
import { AppContext, AppContextProps } from "../contexts/app-context";

export const useAppContext = (): AppContextProps => useContext(AppContext);
