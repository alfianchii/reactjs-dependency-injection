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

export type CounterContextProps = [AppState, React.Dispatch<AppAction>];

interface AppAction {
  type: Counter | "TOGGLE_THEME";
  payload?: number;
}

const initialContext: CounterContextProps = [
  { count: 0, theme: "light" },
  () => null,
];

export const CounterContext =
  createContext<CounterContextProps>(initialContext);

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

const CounterProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const counterContextValue: CounterContextProps = [state, dispatch];

  return (
    <CounterContext.Provider value={counterContextValue}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
