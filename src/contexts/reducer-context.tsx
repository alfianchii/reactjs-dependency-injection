import React, { createContext, useReducer } from "react";

interface Props {
  children: React.ReactNode;
}

type Theme = "light" | "dark";

type Counter = "DECREASE" | "RESET" | "INCREASE";

interface AppState {
  count: number;
  theme: Theme;
}

export type ReducerContextProps = [AppState, React.Dispatch<AppAction>];

interface AppAction {
  type: Counter | "TOGGLE_THEME";
  payload?: number;
}

const initialContext: ReducerContextProps = [
  { count: 0, theme: "light" },
  () => null,
];

export const ReducerContext =
  createContext<ReducerContextProps>(initialContext);

const reducer = (
  state: AppState,
  { type, payload = 1 }: AppAction
): AppState => {
  switch (type) {
    case "DECREASE":
      return { ...state, count: state.count - payload };
    case "RESET":
      return { ...state, count: 0 };
    case "INCREASE":
      return { ...state, count: state.count + payload };
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      throw new Error(`Unexpected type: ${type}`);
  }
};

const initialState: AppState = { count: 0, theme: "light" };

const ReducerProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const reducerContextValue: ReducerContextProps = [state, dispatch];

  return (
    <ReducerContext.Provider value={reducerContextValue}>
      {children}
    </ReducerContext.Provider>
  );
};

export default ReducerProvider;
