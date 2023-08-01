import React, { createContext, useEffect, useReducer } from "react";
import avatar from "../assets/ranpo-1.jpg";

export type AppContextValue = [AppContextProps, React.Dispatch<AppAction>];

interface Props {
  children: React.ReactNode;
}

interface UserProps {
  username: string;
  avatar: string;
}

interface AppAction {
  type: "UPDATE_USER" | "TOGGLE_THEME";
  payload: UserProps;
}

interface AppContextProps {
  user: UserProps;
}

const initialState: AppContextProps = {
  user: { username: "", avatar: "" },
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
    default:
      throw new Error(`Unexpected type: ${type}`);
  }
};

const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const payload: UserProps = {
      username: "alfianchii",
      avatar,
    };
    dispatch({ type: "UPDATE_USER", payload });
  }, []);

  const appContextValue: AppContextValue = [state, dispatch];

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
