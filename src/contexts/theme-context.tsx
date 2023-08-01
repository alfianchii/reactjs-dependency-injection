import React, { createContext, useReducer } from "react";

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

const reducer = (
  state: ThemeContextProps,
  { type }: AppAction
): ThemeContextProps => {
  switch (type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      throw new Error(`Unexpected type: ${type}`);
  }
};

const initialState: ThemeContextProps = { theme: "light" };
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
