import React, { createContext, useEffect, useReducer } from "react";
import avatar from "../assets/ranpo-1.jpg";

type Theme = "light" | "dark";

interface Props {
  children: React.ReactNode;
}

interface UserProps {
  username: string;
  avatar: string;
}

interface AppAction {
  type: "UPDATE_USER" | "TOGGLE_THEME";
  payload?: UserProps;
}

interface AppContextProps {
  user: UserProps;
  theme: Theme;
}

export type AppContextValue = [AppContextProps, React.Dispatch<AppAction>];

const initialState: AppContextProps = {
  user: {
    username: "",
    avatar: "",
  },
  theme: "light",
};

const initialContext: AppContextValue = [initialState, () => null];

export const AppContext = createContext<AppContextValue>(initialContext);

const reducer = (
  state: AppContextProps,
  { type, payload = initialState.user }: AppAction
): AppContextProps => {
  switch (type) {
    case "UPDATE_USER":
      return { ...state, user: payload };
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      throw new Error(`Unexpected type: ${type}`);
  }
};

const AppProvider = ({ children }: Props) => {
  const baseUrl: string = import.meta.env.BASE_URL;
  const body = document.documentElement;
  const [state, dispatch] = useReducer(reducer, initialState);

  state.theme === "dark" ||
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? body.setAttribute("data-mode", "dark")
    : body.removeAttribute("data-mode");

  useEffect(() => {
    const payload: UserProps = {
      username: "alfianchii",
      avatar,
    };
    dispatch({ type: "UPDATE_USER", payload });
  }, [baseUrl]);

  const appContextValue: AppContextValue = [state, dispatch];

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
