import React, { createContext, useEffect, useReducer } from "react";
import { setItemWithExp, getItemWithExp } from "../helpers/localstorage";

type Theme = "light" | "dark";

export type ThemeContextValue = [ThemeContextProps, React.Dispatch<AppAction>];

interface Props {
  children: React.ReactNode;
}

interface ThemeContextProps {
  theme: Theme;
}

interface AppAction {
  type: "TOGGLE_THEME" | "SET_THEME";
  payload?: Theme;
}

const reducer = (
  state: ThemeContextProps,
  { type, payload = "light" }: AppAction
): ThemeContextProps => {
  switch (type) {
    case "TOGGLE_THEME":
      setItemWithExp("THEME", {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      });
      return { ...getItemWithExp("THEME") };
    case "SET_THEME":
      setItemWithExp("THEME", { ...state, theme: payload });
      return { ...getItemWithExp("THEME") };
    default:
      throw new Error(`Unexpected type: ${type}`);
  }
};

const initialState: ThemeContextProps = { theme: "light" };
const initialContext: ThemeContextValue = [initialState, () => null];
export const ThemeContext = createContext<ThemeContextValue>(initialContext);

const ThemeProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "SET_THEME", payload: getItemWithExp("THEME").theme });
  }, []);

  const themeContextValue: ThemeContextValue = [state, dispatch];

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
