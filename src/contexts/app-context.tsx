import React, { createContext, useEffect, useReducer } from "react";
import avatar from "../assets/ranpo-1.jpg";
import { setItemWithExp, getItemWithExp } from "../helpers/localstorage";

export type AppContextValue = [AppContextProps, React.Dispatch<AppAction>];

interface Props {
  children: React.ReactNode;
}

interface UserProps {
  username: string;
  avatar: string;
}

interface AppContextProps {
  user: UserProps;
}

interface AppAction {
  type: "UPDATE_USER";
  payload?: UserProps;
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
      setItemWithExp("USER", { ...state, user: payload });
      return { ...getItemWithExp("USER") };
    default:
      throw new Error(`Unexpected type: ${type}`);
  }
};

const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Set username and avatar
    const userLocalProps: UserProps =
      getItemWithExp("USER").user ?? initialState;
    const username: string = userLocalProps.username ?? "alfianchii";
    const payload: UserProps = { username, avatar };
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
