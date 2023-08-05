import React, { createContext, useReducer } from "react";
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
  type: "TOGGLE_THEME";
}

const theme: Theme = getItemWithExp("THEME").theme ?? "light";

const reducer = (
  state: ThemeContextProps,
  { type }: AppAction
): ThemeContextProps => {
  switch (type) {
    case "TOGGLE_THEME":
      console.log(
        "State: " + state.theme,
        "Local: " + getItemWithExp("THEME").theme
      );
      setItemWithExp("THEME", {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      });
      return { ...getItemWithExp("THEME") };
    default:
      throw new Error(`Unexpected type: ${type}`);
  }
};

const initialState: ThemeContextProps = { theme };
const initialContext: ThemeContextValue = [initialState, () => null];
export const ThemeContext = createContext<ThemeContextValue>(initialContext);

const ThemeProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const themeContextValue: ThemeContextValue = [state, dispatch];

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
